const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require("child_process");

const { parseJscpd, parseChart } = require('./utils/parse.js');
const createBarChart = require('./utils/chart.js');

const exec = (command) => {
  return execSync(command, {encoding: 'utf8'}).trim();
}

const run = async () => {
  try {
    const options = core.getInput('options');
    const arguments = core.getInput('arguments');
    const token = core.getInput('token');
    const context = github.context;
    const { pull_request } = context.payload;
    const octokit = github.getOctokit(token);
  
    const output = exec(`npx jscpd ${options} ${arguments} | sed 's/\x1b\[[0-9;]*m//g'`);
    if(output.split(/\r\n|\r|\n/).length === 1){
      await octokit.rest.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: "dry-code-action: **No Clone Found**"
      });
      return;
    }

    const result = parseJscpd(output);
    
    console.log("Start");
    const extension = /(?:\.([^.]+))?$/;
    const files = result[0].split(" ").map((element) => {
      if(extension.exec(element)[1]){
        return `\`${element}\``;
      }
      return element;
    }).join(' ');

    console.log("start parseChart");
    const Formats = parseChart(result[1]);

    const duplicatedLinesObject = Object.fromEntries(
      new Map(Formats.map(row => [
        row[0], parseInt(row[5])
      ]))
    );

    const duplicatedLinesChart = createBarChart(duplicatedLinesObject);

    const duplicatedTokensObject = Object.fromEntries(
      new Map(Formats.map(row => [
        row[0], parseInt(row[6])
      ]))
    );

    const duplicatedTokensChart = createBarChart(duplicatedTokensObject);

    const barCharts = "Duplicated Lines\n\n" + duplicatedLinesChart + "\n\nDuplicated Tokens\n\n" + duplicatedTokensChart

    const body = files + barCharts;

    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: pull_request.number,
      body: body
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();