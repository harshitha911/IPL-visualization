function teamExtraRuns(matches,deliveries) {
  const result = {};
  for (let match of matches) {
    const season = match.season;
    if (season == "2016") {
      for (let delivery of deliveries) {
        const bowling_team = delivery.bowling_team;
        const extra_runs = delivery.extra_runs;
        if(delivery.match_id == match.id) {
          if(result[bowling_team]){
            result[bowling_team] += parseInt(extra_runs);
          }
          else {
            result[bowling_team]=1;
          }
        }

      }
    }
  }
  return result;
}

module.exports = teamExtraRuns;
