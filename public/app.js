function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
function fetchAndVisualizeData_1() {
  fetch("./data_1.json")
    .then(r => r.json())
    .then(visualizeData_1);
}

fetchAndVisualizeData_1();

function visualizeData_1(data_1) {
  visualizeMatchesPlayedPerYear_1(data_1.teamsWonperYear);
  return;
}

function visualizeMatchesPlayedPerYear_1(teamsWonperYear) {
  const years = Object.keys(teamsWonperYear);
  var teams = [];
  for (year in years) {
    teams = teams.concat(Object.keys(teamsWonperYear[years[year]]));
  }
  teams = [...new Set(teams)];
  const seriesData = [];

  for (team in teams) {
    data = {
      name : teams[team],
      data : []
    }
    for (let year in years) {
      if (teamsWonperYear[years[year]] && teamsWonperYear[years[year]][teams[team]]){
        data.data.push(teamsWonperYear[years[year]][teams[team]]);
      }
      else {
        data.data.push(0);
      }
    }
    seriesData.push(data);
  }
  console.log(seriesData);
  
  Highcharts.chart("teams-won-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: 'Matches won by each team over all the years'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      "categories": years
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      },
      stackLabels: {
        enabled: true
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: seriesData
  });
}
function fetchAndVisualizeData_2() {
  fetch("./data_2.json")
    .then(r => r.json())
    .then(visualizeData_2);
}

fetchAndVisualizeData_2();

function visualizeData_2(data_2) {
  visualizeTeamExtraRuns(data_2.teamExtraRuns);
  return;
}

function visualizeTeamExtraRuns(teamExtraRuns) {
  const seriesData = [];
  for (let year in teamExtraRuns) {
    seriesData.push([year, teamExtraRuns[year]]);
  }

  Highcharts.chart("teams-extra-runs-conceded", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Runs conceded by each team, 2016'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
  },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}

