"use strict";

//Ici on va importer la classe Deck car selon instruction du prof on a du exporter cette dernière
import { Deck } from "./Deck.js";
import { Card } from "./Card.js";

//on exporte app.js dans Deck
export const options = {
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

// ICI ON VA FAIRE :
//Une instance de deck donc le new deck
// et on appelle les méthodes créer pour le Deck dans la classe Deck

// Instancier Deck et de carte
const deck = new Deck(options);

// Appliquer la méthode créer dans la classe deck sur notre deck
deck.createFullDeck();
deck.shuffle();
deck.displayCards();

// on peut aussi faire :
//mais attentoion il faut faire des retunr this dans chaque méthode créer
// cont deck = new Deck(options).createFullDeck().shuffle().displayCards();

console.log(deck);
