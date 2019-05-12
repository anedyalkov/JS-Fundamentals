
function solve(input) {
    let heroes = [];

    for (let hero of input) {
        let [name, level, items] = hero.split(" / ");
        items = items === undefined ? [] : items.split(", ");

        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(currentHero)
    }
    console.log(JSON.stringify(heroes));
}

console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));