function solve(input){
    let formulaData = {};
    for(let line of input){
        let tokens = line.split(' -> ');
        let team = tokens[0];
        let pilot = tokens[1];
        let points = +tokens[2];

        if(!formulaData.hasOwnProperty(team)){
            formulaData[team] = {
                pilots:{},
                totalPoints: 0
            };
            formulaData[team].pilots[pilot] = points
            formulaData[team].totalPoints += points; 
        } else {
            if(!formulaData[team].pilots.hasOwnProperty(pilot)){
            formulaData[team].pilots[pilot] = points
            formulaData[team].totalPoints += points; 
            } else {
                formulaData[team].pilots[pilot] += points
                formulaData[team].totalPoints += points; 
            }
        }      
    }

    let sortedData = Object.entries(formulaData).sort((a, b) => {
        return b[1].totalPoints - a[1].totalPoints;
    });
    sortedData.splice(3, sortedData.length);
    let output = '';
    for (let [team, teamValue] of sortedData){
        output += `${team}: ${teamValue.totalPoints}\n`;
        let sortedPilots = Object.entries(teamValue.pilots).sort((a, b) =>{
            return b[1] - a[1];
        })

        for(let [pilot,points] of sortedPilots){
            output +=`-- ${pilot} -> ${points}\n`;
        } 
    }
    console.log(output.trim())
}

solve(["Ferrari -> Kimi Raikonnen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Mercedes -> Lewis Hamilton -> 10",
"Mercedes -> Valteri Bottas -> 8",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 4",
"Mercedes -> Lewis Hamilton -> 25",
"Mercedes -> Valteri Bottas -> 18",
"Haas -> Romain Grosjean -> 25",
"Haas -> Kevin Magnussen -> 25"
    ]
)