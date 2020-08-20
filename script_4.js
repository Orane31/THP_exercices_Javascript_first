const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

let seventies = [];

for(let ceo in entrepreneurs) {
    if (entrepreneurs[ceo].year >= 1970 && entrepreneurs[ceo].year <= 1979) {
        seventies.push(
            entrepreneurs[ceo].first +
            " " +
            entrepreneurs[ceo].last +
            " was born in " +
            entrepreneurs[ceo].year
        );
    }
}

console.log(seventies);

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

let fullNames = [];

for (let ceo in entrepreneurs) {
    fullNames.push(entrepreneurs[ceo].first + " " + entrepreneurs[ceo].last);
}

console.log(fullNames);

// Quel âge aurait chaque inventeur aujourd'hui ?

const today = 2020;
for (let ceo in entrepreneurs) {
    let age = today - entrepreneurs[ceo].year
    console.log(entrepreneurs[ceo].first + entrepreneurs[ceo].last + " is " + age)
};

// Trie les entrepreneurs par ordre alphabétique du nom de famille.

fromAtoZ = entrepreneurs.sort((a,z) => (a.last > z.last))

console.log(fromAtoZ)