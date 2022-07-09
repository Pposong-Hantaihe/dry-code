const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require("child_process");

function exec(command){
  return execSync(command, {encoding: 'utf8'}).trim();
}

async function run() {
  try {
    const option = core.getInput('option');
    const argument = core.getInput('argument');
    const token = core.getInput('Token');
    const context = github.context;
    const { pull_request } = context.payload;
  
    const result = exec(`npx jscpd ${option} ${argument} | sed 's/\x1b\[[0-9;]*m//g'`);
    const cloneFound = result.split("┌────────────┬────────────────┬─────────────┬──────────────┬──────────────┬──────────────────┬───────────────────┐\n");
  
    const chart = cloneFound[1].split("│");
    let Formats = [];
    for (let i = 0; i < chart.length; i++){
      if(chart[i++] === "\n├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤\n")
        Formats.push(chart.slice(i, i+7).map((value) => {
          return value.trim();
        }));
    }

    const blocks = cloneFound[0];
    const graph = "Graph:\n\n"
    const body = blocks + graph + Formats; // Formats => graph_url;

    const octokit = github.getOctokit(token);
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