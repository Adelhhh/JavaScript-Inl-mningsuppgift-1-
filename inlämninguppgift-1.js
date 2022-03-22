const basket = [];

function addToBasket(product) {
  // Lägg till produkten till varukorgen (basket)
  // Lägg enbart till produkten om stockLevel för produkt är högre än 0

if (product.stockLevel !== 0) {
    basket.push(product);
} 

else if (product.stockLevel === 0) {
} 

else {
console.log(`There are no products left.`);
}
}

function printBasket() {

// Skriv ut innehållet av varukorgen, se nedan där printBasket() (fylla med kod här)
// anropas, för exempel på hur det ska se ut
    
let amount = 0;
    
console.log("Product                     Price ");
console.log("------------------------------------");
    
for (let i = 0; i < basket.length; i++) {
    
console.log(basket[i].name + "             "+basket[i].price + " " + "SEK")
    
amount = amount + basket[i].price;
}
    
console.log( "     " )
console.log("Total amount:" + "               " + amount + " "+ "SEK") 
console.log( "     " )
}

function emptyBasket() {

// Töm varukorgen
        
let i = 0;
        
while (basket.length > i) {
        
basket.pop();
}
        
console.log(`Your basket is empthy ${basket.length}.`);
}

// ------------------------------------------------------------------
// Koden nedan verifierar att du implementerat lösningen rätt enligt
// instruktioner ovan.
// ------------------------------------------------------------------

let product1 = { name: "Pink T-Shirt", price: 199, stockLevel: 10 };
let product2 = { name: "Blue T-Shirt", price: 149, stockLevel: 8 };
let product3 = { name: "Black T-Shirt", price: 149, stockLevel: 0 };

addToBasket(product1);
addToBasket(product2);
addToBasket(product3);

printBasket();

/*
Product                    Price     
------------------------------------
Pink T-Shirt               199 SEK      
Blue T-Shirt               149 SEK      

Total amount: 348 SEK
*/

emptyBasket();

printBasket();

/*
Basket empty
*/


