function solve(input) {
    let trucks = {};
    let backupTires = [];

    for (let line of input) {
        if (line[0] === "NEWTRUCK") {
            let plateNumber = line[1];
            let tires = line[2];
            if (!trucks.hasOwnProperty(plateNumber)) {
                trucks[plateNumber] = {
                    tires: tires,
                    distance: 0
                };
            }
        } else if (line[0] === "NEWTIRES") {
            backupTires.push(line[1]);
        } else if (line[0] === "WORK") {
            let plateNumber = line[1];
            let distanceToTravel = line[2];
            if (trucks.hasOwnProperty(plateNumber)) {
                let canTravelDistance = calculateDistanceToTravel(
                    trucks[plateNumber].tires,
                    distanceToTravel
                );

                if (canTravelDistance) {
                    trucks[plateNumber].distance += distanceToTravel;
                } else {
                    if (backupTires.length > 0) {
                        let reserveTires = backupTires.shift();
                        trucks[plateNumber].tires = reserveTires;
                        let canTravelDistance = calculateDistanceToTravel(trucks[plateNumber].tires,distanceToTravel);
                        if (canTravelDistance) {
                            trucks[plateNumber].distance += distanceToTravel;
                        } else {
                            continue;
                        }
                    }                 
                }
            }
        }
    }

    for (let [plateNumber, obj] of Object.entries(trucks)) {
        console.log(`Truck ${plateNumber} has traveled ${obj.distance}.`);
    }

    console.log(`You have ${backupTires.length} sets of tires left.`);

    function calculateDistanceToTravel(tires, distanceToTravel) {
        let dist = distanceToTravel / 1000;
        for (let i = 0; i < tires.length; i++) {
            tires[i] -= dist;
            if (tires[i] < 0) {
                return false;
            }
        }
        return true;
    }
}

solve([
    ["NEWTRUCK", "C1111AA", [7, 7, 7, 7, 7, 7, 7, 7]],
    ["NEWTRUCK", "C2222AA", [5, 5, 5, 5, 5, 5, 5, 5]],
    ["WORK", "C1111AA", 7700],
    ["WORK", "C2222AA", 6000],
    ["WORK", "C1111AA", 3000]
]);

// solve([
//     ["NEWTRUCK", "B1002SA", [17, 17, 17, 17, 17, 17, 17, 17]],
//     ["NEWTIRES", [8, 8, 4, 8, 8, 8, 9, 8]],
//     ["NEWTIRES", [4, 4, 5, 4, 4, 7, 4, 4]],
//     ["NEWTIRES", [5, 1, 5, 5, 5, 7, 5, 1]],
//     ["WORK", "B1002SA", 7700],
//     ["WORK", "B1002SA", 6000],
//     ["WORK", "B1002SA", 3000]
// ]
// )
