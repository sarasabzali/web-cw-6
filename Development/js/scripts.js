let num = [10, 20, 30, 40, 50];

function logger() {
    console.log(num);
}
logger();
 
//  

let one = [50, 55, 60, 65, 70, 75];
let two = [];

function hottestDays() {
    for (let i = 0; i < one.length; i++) {
        if (one[i] > 60){ 
            two.push(one[i]);
        }
    }
console.log(two);
}
hottestDays();

// 

let read = [
    {book: "book1", ID: 1},
    {book : "book2", ID: 2},
    {book : "book3", ID: 3}
];

function getBookById() {
let name = parseInt(prompt ("book ID"));
let bool = false;
for ( let i = 0; i < read.length; i++){
    if ( name == read[i].ID && bool == false ){
        console.log("we found it");
        bool = true;
    }
  }
if (bool == false){
    console.log("we have not found your book!");
 }
}
getBookById(); 
    
//   السؤال الاخير
let product = prompt("enter product (wite 'done' when you are done)");
let price = prompt("enter the price");
let quantity = prompt("enter quantity");

let products = [];
let prices = [];
let quantities = [];

// شرط يوقف الوب 

while(product !== "done") {
    products.push(product);
    prices.push(price);
    quantities.push(quantity);

    product = prompt("enter prodcut (write 'done' when you are done)");
    // عشان ما يتكرر احط السلعه براا    push جماعي كلهم نفس الحجم
    if(product!== "done"){
        price = parseFloat(prompt("enter price"));
        quantity = parseInt(prompt("enter quantity"));
 }
};
let result = 0;
for( let i = 0; i< prices.length; i++){
    // result = result + (parseFloat(prices[i])*quantities[i]);
    result = result + prices[i] * quantities[i];
};
console.log("-----------------");
console.log("reciept");
console.log("------------------");
// يطبع السلع و الكميه و السعر
for(let i = 0; i < prices.length; i++) {
    console.log(quantities[i] + " " + products[i] + " " + prices[i] + "KD");
};
console.log("---------------");
console.log( result+ " KD"); 
