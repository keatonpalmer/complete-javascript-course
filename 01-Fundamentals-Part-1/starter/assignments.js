const COUNTRY = "USA";
const CONTINENT = "North America";
let population = 579000000;

console.log(COUNTRY, CONTINENT, population);


let isIsland = false;
const LANGUAGE = "English";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof COUNTRY);
console.log(typeof LANGUAGE);


console.log(population/2);
console.log(population+1);

let finlandPopulation = 6000000;

if (population > finlandPopulation) {
    console.log("The " + COUNTRY + " has a larger population than Finland.");
} else {
    (console.log("Finland has a greater population than the " + COUNTRY + "."));
}

const avgPopulation = 33000000;
console.log(population < avgPopulation);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);