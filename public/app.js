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

function fetchAndVisualizeData_3() {
  fetch("./data_3.json")
    .then(r => r.json())
    .then(visualizeData_3);
}

fetchAndVisualizeData_3();

function visualizeData_3(data_3){
  visualizeEconomicBowlers(data_3.economicBowlers);
  return;
}

function visualizeEconomicBowlers(economicBowlers) {
  const seriesData = economicBowlers;
  for (let year in economicBowlers) {
    seriesData.push([year, economicBowlers[year]]);
  }
console.log(seriesData);
  Highcharts.chart('Economic-Bowlers', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Top 10 economy bowlers in 2015'
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Economy rate'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Economy rate',
      data: seriesData.splice(0,10),
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}',
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });
}
function fetchAndVisualizeData_4() {
  fetch("./data_4.json")
    .then(r => r.json())
    .then(visualizeData_4);
}

fetchAndVisualizeData_4();

function visualizeData_4(data_4) {
  visualizerunsScoredbyKohli(data_4.runsScoredbyKohli);
  return;
}

function visualizerunsScoredbyKohli(runsScoredbyKohli) {
  const seriesData = [];
  for (let year in runsScoredbyKohli) {
    seriesData.push([year, runsScoredbyKohli[year]]);
  }

  Highcharts.chart("runs-scored-by-kohli", {
    chart: {
      type: "column"
    },
    title: {
      text: "Runs Scored by Virat Kohli"
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
        text: "Runs Scored"
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