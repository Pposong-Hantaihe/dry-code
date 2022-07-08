const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require("child_process");

function exec(command){
  return execSync(command, {encoding: 'utf8'}).trim();
}

try {
  const options = core.getInput('options');
  const arguments = core.getInput('arguments');

  const result = exec(`npx jscpd ${options} ${arguments} | sed 's/\x1b\[[0-9;]*m//g'`);
  const cloneFound = result.split("┌────────────┬────────────────┬─────────────┬──────────────┬──────────────┬──────────────────┬───────────────────┐\n");
  console.log(cloneFound[0]);

  const chart = cloneFound[1].split("│");
  let Formats = [];
  for (let i = 0; i < chart.length; i++){
    if(chart[i++] === "\n├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤\n")
      Formats.push(chart.slice(i, i+7).map((value) => {
        return value.trim();
      }));
  }
  console.log(Formats);
} catch (error) {
  core.setFailed(error.message);
}