const shell = require("shelljs");
var Prompt = require("prompt-checkbox");
var Enquirer = require("enquirer");
var enquirer = new Enquirer();
enquirer.register("checkbox", require("prompt-checkbox"));
var instalation = require("./instalation.js");
var osType = "";
var osName = "";
var appdir = ["default"];
var getos = require('getos')

getos(function (e, os) {
  if (e) return console.log(e)
  osName = JSON.stringify(os);
})

if (osName.includes("win")) {
  shell.exec("powershell.exe Get-Content -Path .\\printtittle");
  osType = "W";
}
if (osName.includes("linux")) {
  shell.exec("./tittle.sh");
  osType = "L";
}
if (osName.includes("mac")) {
  osType = "M";

}

var prompt = new Prompt({
  name: "os",
  message: "Choise an OS System",
  default: (osType) === "W" ? "Window" : (osType === "L") ? "Linux" : (osType === "M") ? "MacOs" : "",
  radio: true,
  choices: ["Window", "Linux", "MacOs"],
});

prompt
  .run()
  .then(function (answers) {
    MenuOs(answers);
  })
  .catch(function (err) {
    console.log(err);
  });

function MenuOs(o) {
  if (o.includes("Window")) {
    CleanUp(o);
    MenuApps();
  }
  if (o.includes("Linux")) {
    CleanUp(o);
    MenuApps();
  }
  if (o.includes("MacOs")) {
    CleanUp(o);
    MenuApps();
  }
}

function CleanUp(o) {
  if (o.includes("Window")) {
    shell.exec("powershell.exe clear");
    shell.exec("powershell.exe Get-Content -Path .\\printtittle");
  }
  if (o.includes("Linux")) {
    shell.exec("clear");
    shell.exec("./tittle.sh");
  }
  if (o.includes("MacOs")) {

  }

}
function GetAppList() {
  const dirs = "./apps/";
  const fs = require("fs");

  var dfiles = fs.readdirSync(dirs);
  FillDir(dfiles);
}
function FillDir(e) {
  appdir = [...e];
}

function MenuApps() {
  GetAppList();
  var questions = [
    {
      name: "apps",
      type: "checkbox",
      message: "Choose your apss",
      choices: appdir,
    },
  ];
  enquirer.prompt(questions).then(function (answers) {
    instalation.PreChecks(osType);
    instalation.InstallApps(answers, osType);
  });
}
