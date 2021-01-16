const shell = require("shelljs");
var Prompt = require("prompt-checkbox");
var Enquirer = require("enquirer");
var util = require("util");
var enquirer = new Enquirer();
enquirer.register("checkbox", require("prompt-checkbox"));
var instalation = require("./instalation.js");
var osType = "";
var appdir = ["default"];
var dfiles = new Array();

shell.exec("./tittle.sh");
var prompt = new Prompt({
  name: "os",
  message: "Choise an OS System",
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
    osType = "W";
    CleanUp();
    MenuApps();
  }
  if (o.includes("Linux")) {
    osType = "L";
    CleanUp();
    MenuApps();
  }
  if (o.includes("MacOs")) {
    osType = "M";
    CleanUp();
    MenuApps();
  }
}

function CleanUp() {
  shell.exec("clear");
  shell.exec("./tittle.sh");
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
    instalation.PreChecks();
    instalation.InstallApps(answers, osType);
  });
}
