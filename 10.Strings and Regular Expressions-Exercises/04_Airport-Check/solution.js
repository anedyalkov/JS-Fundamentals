function solve() {
    let input = document.getElementById('str').value.split(', ');
    let str = input[0];
    let command = input[1];
    let divResult = document.getElementById('result');

    let namePattern = /( [A-Z][A-Za-z]*\-[A-Z][A-Za-z]*\.\-[A-Z][A-Za-z]* )|( [A-Z][A-Za-z]*\-[A-Z][A-Za-z]* )/g;
    let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightPattern = / [A-Z]{1,3}[\d]{1,5} /g;
    let companyPattern = /(- [A-Z][A-Za-z]*)\*[A-Z][A-Za-z]* /g;
    let nameMatch = str.match(namePattern);
    let name = nameMatch.toString().replace(/\-/g, ' ').trim();

    let airports = airportPattern.exec(str);
    let airportFrom = airports[1];
    let airportTo = airports[2];

    let flight = str.match(flightPattern);

    let companyName = str.match(companyPattern);
    console.log(companyName);
    let company = companyName[0].replace(/\-/g, '').replace('*', ' ').trim();

    if (command === 'name') {
        divResult.innerHTML = `Mr/Ms, ${name}, have a nice flight!`;
    } else if (command === 'flight') {
        divResult.innerHTML = `Your flight number ${flight[0].trim()} is from ${airportFrom} to ${airportTo}.`
    } else if (command === 'company') {
        divResult.innerHTML = `Have a nice flight with ${company}.`
    } else if (command === 'all') {
        divResult.innerHTML = `Mr/Ms, ${name}, your flight number ${flight[0].trim()} is from ${airportFrom} to ${airportTo}. Have a nice flight with ${company}.`
    }

}