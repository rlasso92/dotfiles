const shell = require("shelljs");

let appsAr = [];
function PreChecks() {
  shell.exec("./config/init.sh");
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
    console.log("here windows apps");
  }
  if (os === "M") {
    console.log("here mac apps");
  }
}

module.exports = {
  PreChecks,
  InstallApps,
};
