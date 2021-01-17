const shell = require("shelljs");

let appsAr = [];
function PreChecks(os) {
  if (os === "L") {
    shell.exec("./config/init.sh");
  }
  if (os === "W") {
    shell.exec("powershell.exe Set-ExecutionPolicy RemoteSigned");
    shell.exec("powershell.exe .\\config\\init.ps1");
  }
  if (os === "M") {
    console.log("here mac apps");
  }

}

function InstallApps(op, os) {
  appsAr = [...op.apps];

  if (os === "L") {
    shell.exec("echo This process will take a while please wait...");
    appsAr.forEach((element) => {
      shell.exec("./apps/linux" + element + "/init.sh");
    });
  }
  if (os === "W") {
    appsAr.forEach((element) => {
      shell.exec("powershell.exe .\\apps\\" + element + "\\window\\init.ps1");
    });
  }
  if (os === "M") {
    console.log("here mac apps");
  }
}

module.exports = {
  PreChecks,
  InstallApps,
};