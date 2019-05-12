function solve(input){
    let gladiators = {};
    

    for(let line of input){
        if(line != 'Ave Cesar'){
            if(line.includes('vs')){
                let [firstGlad, secondGlad] = line.split(' vs ');
                if(gladiators.hasOwnProperty(firstGlad) && gladiators.hasOwnProperty(secondGlad)){
                    let firstGladTechniques = [];
                    let secondGladTechniques = [];
                  
                    for (let key of Object.keys(gladiators[firstGlad])) {
                        firstGladTechniques.push(key);
                    }
                     for (let key of Object.keys(gladiators[secondGlad])) {
                         secondGladTechniques.push(key);
                     }

                    let possessCommonTechnique = false;
                    let commonSkill = '';

                  for (let i = 0; i < firstGladTechniques.length; i++) {
                      if(possessCommonTechnique === true){
                          break;
                      }
                      let element = firstGladTechniques[i];
                      for (let j = 0; j < secondGladTechniques.length; j++) {
                          if (element === secondGladTechniques[j]) {
                              possessCommonTechnique = true;
                              commonSkill = element;
                              break;
                          }                         
                      }                  
                  }
                  if(possessCommonTechnique){
                    let firstGladSkill = gladiators[firstGlad][commonSkill];
                    let secondGladSkill = gladiators[secondGlad][commonSkill];
                    if(firstGladSkill > secondGladSkill){
                        delete gladiators[secondGlad]
                    } else{
                        delete gladiators[firstGlad]
                    }
                  }
                  
                }
            } else {
                let [gladName, techniques, skill] = line.split(' -> ');

                if(!gladiators.hasOwnProperty(gladName)){
                    gladiators[gladName] = {};
                    gladiators[gladName][techniques] = +skill;
                } else {
                    if (!gladiators[gladName].hasOwnProperty(techniques)) {
                        gladiators[gladName][techniques] = +skill;
                    } else {
                        if(gladiators[gladName][techniques] < skill){
                            gladiators[gladName][techniques] = +skill;
                        }
                    }
                }
            }
        } else {
           Object.keys(gladiators)
           .forEach((gladiatorName) => {
               gladiators[gladiatorName].totalSkill = Object.values(gladiators[gladiatorName])
               .reduce((acc,cur) => {
                    return acc + cur;
               },0)
           });

           Object.keys(gladiators)
           .sort((a, b) => {
               return gladiators[b].totalSkill - gladiators[a].totalSkill || a - b;
           })
           .forEach((name) => {
               console.log(`${name}: ${gladiators[name].totalSkill} skill`);

               Object.keys(gladiators[name])
               .filter((technique) => technique !== "totalSkill")
               .sort((a, b) => {
                   return gladiators[name][b] - gladiators[name][a] || a - b;
               })
               .forEach((technique) => {
                   console.log(`- ${technique} <!> ${gladiators[name][technique]}`);
               });
           })
        }
    }
}

solve(['Pesho -> Duck -> 400',
            'Julius -> Shield -> 150',
            'Gladius -> Heal -> 200',
            'Gladius -> Support -> 250',
            'Gladius -> Shield -> 250',
            'Pesho vs Gladius',
            'Gladius vs Julius',
            'Gladius vs Gosho',
            'Ave Cesar'
]);