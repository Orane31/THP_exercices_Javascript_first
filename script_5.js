const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


// Est-ce que tous les livres ont été au moins empruntés une fois ?

let notRentedYet = [];

for (let book in books) {
    if (books[book].rented === 0) {
        notRentedYet.push(book);
    }
}

if (notRentedYet.length === 0) {
    console.log("Yes, all books have been rented at least once.");
} else {
    console.log(notRentedYet.length + " books are yet to be rented.");
}


// Quel est livre le plus emprunté ?

books.sort(function(a, b) {
    return b.rented - a.rented;
  });
  console.log("The most rented book is : " + books[0].title);

// Quel est le livre le moins emprunté ?

console.log("The least rented book is : " + books[books.length - 1].title);


// Trouve le livre avec l'ID: 873495 ;

let found = books.find(function(book, index) {
    if (book.id === 873495) return true;
});
console.log("The book n°" + found.id + " is : " + found.title);


// Supprime le livre avec l'ID: 133712 ;

for (book in books) {
    
}

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
