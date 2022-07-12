// Exercise 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const characterHulk = avengers[0];

console.log('Valor: ', characterHulk );

for( let i = 0; i < avengers.length; i++){
    console.log( avengers[i] );
}

// Exercise 1.2
const avengersOne = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let changeCharacter = avengersOne[0];

console.log( avengersOne[0] = 'IRONMAN');
console.log( '--------------------');
console.log( avengersOne )

// Exercise 1.3
const avengersTwo = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log( avengersTwo.length );

// Exercise 1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push('Morty');
rickAndMortyCharacters.push('Summer');
console.log( rickAndMortyCharacters );

const rickAndMortyCharactersOne = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log( 'Ultimo elemento: ', rickAndMortyCharacters[rickAndMortyCharacters.length - 1] );

const rickAndMortyCharactersTwo = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

console.log( rickAndMortyCharactersTwo );

for( let i = 0; i < rickAndMortyCharactersTwo.length; i++){
    console.log( rickAndMortyCharactersTwo[i] );
    if( rickAndMortyCharactersTwo[0]){
        rickAndMortyCharactersTwo.shift();
    }
}
console.log('Elemento borrado: ',rickAndMortyCharactersTwo );