function economicBowlers(matches, deliveries) {
    var matchIds = getMatchIdsByYear(matches, "2015");
    // consolidated data
    const result = {};
    for (let singleBallData of deliveries) {
        const matchId = singleBallData.match_id;
        if (matchIds.includes(matchId)) {
            const bowlerName = singleBallData.bowler;
            const wideRuns = singleBallData.wide_runs;
            const noballRuns = singleBallData.noball_runs;
            const totalRuns = singleBallData.total_runs;
            if (!result[matchId]) {
                result[matchId] = {};
            }
            if (!result[matchId][bowlerName]) {
                result[matchId][bowlerName] = { 'balls': 0, 'runs': 0, };
            }
            if(wideRuns == "0" && noballRuns=="0") {
                result[matchId][bowlerName].balls += 1;
            }
            result[matchId][bowlerName].runs += parseInt(totalRuns);
        }
    }

    // economy calculation
    var bowlerMinEcoData = {};
    for (const matchId in result){
        for (const bowlerName in result[matchId]){
            const totalBalls = result[matchId][bowlerName].balls;
            const totalRuns = result[matchId][bowlerName].runs;
            const  economy = parseFloat(totalRuns / (parseFloat(totalBalls / 6))).toFixed(3);
            result[matchId][bowlerName].economy = economy;
            if (!bowlerMinEcoData[bowlerName]) {
                bowlerMinEcoData[bowlerName] = economy;
            }
            if (bowlerMinEcoData[bowlerName].economy > economy ){
                bowlerMinEcoData[bowlerName] = economy;
            }
        }
    }

    // sorting the ad
    bowlerMinEcoData = sortObject(bowlerMinEcoData,true);
    return bowlerMinEcoData;
}

function sortObject(obj, isAsc) {
    var arr = [],result=[];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function (a, b) { return isAsc ? a.value - b.value : b.value - a.value;  });
    for(var index in arr){
        result.push([arr[index].key, parseFloat(arr[index].value)]);
    }
    return result;
}

function getMatchIdsByYear(matches, year) {
    let matchIds = new Set();
    for (var index = 0; index < matches.length; index++) {
        var match = matches[index];
        if (match.season == year) {
            matchIds.add(match.id);
        }
    }
    return [...matchIds];
}

module.exports = economicBowlers;
