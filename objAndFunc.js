// objects
// let myFriend = {
//     name:"john",
//     age: 23,
//     behaviour : function talks(){
//         console.log("he talks too much")}
//     }

// console.log(myFriend.name)
// console.log(myFriend.age)
// console.log(myFriend.behaviour()

function  item(name, size,price, quantity){
    this.name = name,
    this.size = size,
    this.price = price,
    this. quantity = quantity
} 

var item1 =new item("King James Version", "small", 2000,6)
var item2 =new item("New International Version", "medium",2500,12)
var item3 =new item("New King James Version", "medium",2500,6)
var item4 =new item("America international Version", "Large",3000,8)
var item5 =new item("The Passion Translation Version", "medium",2500,5)
var item6 =new item("Contemporary English Version", "medium",2000,6)
var item7 =new item("Christian Standard Version", "medium",3500,19)
var item8 =new item("Easy Read Version", "medium",6000,11)
var item9 =new item("Good News Translation", "medium",5000,9)
var item10 =new item("New Century Version", "medium",4500,4)

var store = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10]
//console.log(store[0].name)

function DisplayMenu(){
    console.log("1, view product")
    console.log("2, Add to cart")
    console.log("3, View cart")
    console.log("4, Checkout")
    console.log("5, Exit")
}

function ViewProducts(){
    console.log("available product")
//     store.forEach((stor,index)=>{
// //        console.log(`${store[0].name} - ${store[0].size} -${store[0].price}`)
//           console.log(`${index} - ${stor[0].item10.name}`)
    // })
        for (let it = 0; it < store.length; it++) {
            const Name = store[it].name;  
            const Size = store[it].size;
            const Price = store[it].price; 
            
            console.log(`${it}. ${Name}- ${Size}-${Price}`)
        }
       
}
//ViewProducts()
// cart
let cart = []

//add to cart
function addToCart(index){
    let selectedProduct= store[index]
    cart.push(selectedProduct)
    console.log(`${selectedProduct.name} -- added to cart`)
}

//addToCart(3)

//view cart
function ViewCart(){
    console.log("your shopping cart")
    for(let prod = 0; prod < cart.length; prod++){
        const proName = cart[prod].name
        const proSize = cart[prod].size
        const proprice = cart[prod].price

        console.log(`${prod} - ${proName} ${proSize} ${proprice}`)
    }
}

// ViewCart()

//checkout
function checkout(){
    console.log(" checkout successful")
}
//checkout()
//const readline = require("readline-sync")

function main(){
    while(true){
        DisplayMenu()
        let choice = Number(prompt("choose an option:"))
        
        switch (choice){
            case 1:
                ViewProducts()
            break;

            case 2:
                const productIndex = Number(prompt("choose a product:"))
                addToCart(productIndex)
            break;

            case 3:
                ViewCart()
            break;

            case 4:
                checkout()
            return;

            case 5:
                console.log("thanks for patronizing")
            return;

            default:
                console.log("invalid input, try again")
                
        }
    }
}
// calling the main function
main()