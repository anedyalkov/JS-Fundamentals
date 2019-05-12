function solve(input){
    let countries = {};
    for(let line of input){
        let tokens = line.split(' > ');
        let country = tokens[0];
        let town = tokens[1];
        let cost = +tokens[2];

        if (town.charAt(0).toLowerCase()){
            town = town.charAt(0).toUpperCase() + town.slice(1);
        }

        if(!countries.hasOwnProperty(country)){
            countries[country] = {};         
        }
        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = cost;
        }

        if(countries[country][town] > cost){
            countries[country][town] = cost;
        }
    }

    let sortedCountries = Object.entries(countries).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
    let output = '';
    for (let [country,towns] of sortedCountries){
        output += `${country} -> `;
        let sortedTowns = Object.entries(towns).sort((a, b) => {
            return a[1] - b[1];
        });

        for(let [town, cost] of sortedTowns){
            output += `${town} -> ${cost} `
        }
        output += `\n`
    }
    console.log(output.trim());
}

solve(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
)