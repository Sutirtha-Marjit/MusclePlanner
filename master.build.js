const startApp = require('./start');
const frontEndFolderPath = './frontend/';
const npmInstall = 'npm install';
const webappBuild = 'npm run build';
const childProcess = require('child_process');
const root = "./";

console.log('FrontEnd dependency installation:Started');
childProcess.execSync(npmInstall,{cwd:frontEndFolderPath,env:process.env,stdio:'inherit'});
console.log('FrontEnd dependency installation:End');
console.log('FrontEnd build :started');
childProcess.execSync(webappBuild,{cwd:frontEndFolderPath,env:process.env,stdio:'inherit'});
console.log('FrontEnd build :end');
//childProcess.execSync(npmInstall,{cwd:root,env:process.env,stdio:'inherit'});
console.log('test05');
startApp();