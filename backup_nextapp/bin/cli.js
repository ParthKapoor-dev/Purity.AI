#!/usr/bin/env node
const { execSync } = require("child_process");

function runCommand(command) {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e)
    return false;
  }
  return true;
};


const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ParthKapoor-dev/create-next-js ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repo with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log('Installing Dependencies for ' + repoName);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Congratulations! You are ready')