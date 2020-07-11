const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const teamsWonperYear = require("./ipl/teamsWonperYear");
const teamExtraRuns = require("./ipl/teamExtraRuns");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_1 = "./public/data_1.json";
const JSON_OUTPUT_FILE_PATH_2 = "./public/data_2.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
    });
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
    let result_1 = teamsWonperYear(matches);
    saveTeamsWonPerYear(result_1);
    csv()
     .fromFile(DELIVERIES_FILE_PATH)
     .then(deliveries => {
     let result_2 = teamExtraRuns(matches,deliveries);
     saveteamExtraRuns(result_2);
  });
});
}

function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function saveTeamsWonPerYear(result_1) {
  const jsonData = {
    teamsWonperYear : result_1
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_1, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function saveteamExtraRuns(result_2) {
  const jsonData = {
    teamExtraRuns: result_2
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main();
