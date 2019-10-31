const startApp = require('./start');
const frontEndFolderPath = './frontend/';
const npmInstall = 'npm install';
const webappBuild = 'npm run build';
const childProcess = require('child_process');
const root = "./";

console.log('test04');
childProcess.execSync(npmInstall,{cwd:frontEndFolderPath,env:process.env,stdio:'inherit'});


childProcess.execSync(webappBuild,{cwd:frontEndFolderPath,env:process.env,stdio:'inherit'});
//childProcess.execSync(npmInstall,{cwd:root,env:process.env,stdio:'inherit'});
console.log('test04-2');
startApp();