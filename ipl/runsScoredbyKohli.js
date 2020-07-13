function runsScoredbyKohli(matches,deliveries) {
    const result = {};
    for (let match of matches) {
        const season = match.season;
        if(result[season]){
            for(let delivery of deliveries){
                const batsmanruns = delivery.batsman_runs;
                const batsman = delivery.batsman;
                if(delivery.match_id == match.id && batsman == 'V Kohli'){
                    result[season] += parseInt(batsmanruns);
                     }
                }
            }
            else {
                result[season] = 1;
            }
    }
    return result;
}
module.exports = runsScoredbyKohli