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
    const option = core.getInput('option');
    const argument = core.getInput('argument');
    const token = core.getInput('Token');
    const context = github.context;
    const { pull_request } = context.payload;
    const octokit = github.getOctokit(token);
  
    const output = exec(`npx jscpd ${option} ${argument} | sed 's/\x1b\[[0-9;]*m//g'`);
    const result = parseJscpd(output);
  
    const extension = /(?:\.([^.]+))?$/;
    const files = result[0].split(" ").map((element) => {
      if(extension.exec(element)[1]){
        return `\`${element}\``;
      }
      return element;
    }).join(' ');

    const Formats = parseChart(result[1]);

    const graph = "Graph:\n\n"

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

    const body = files + graph + duplicatedLinesChart + duplicatedTokensChart;

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