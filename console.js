
//Database

products = [{ name:"King James Version", size:"small", price:2000},
            { name:"New International Version", size:"medium",price:2500},
            { name:"New King James Version", size:"medium",price:2500},
            { name:"America international Version", size:"Large",price:3000},
            { name:"The Passion Translation Version", size:"medium",price:2500},
            { name:"Contemporary English Version", size:"medium",price:2000},
            { name:"Christian Standard Version", size:"medium",price:3500.},
            { name:"Easy Read Version", size:"medium",price:6000},
            { name:"Good News Translation", size:"medium",price:5000},
            { name:"New Century Version", size:"medium",price:4500}];

//cart
// empty cart a
let cart =[]


//Display menu
function DisplayMenu(){
  console.log("1. View Product");
  console.log("2. Add to cart");
  console.log("3. View Cart");
  console.log("4. Checkout");
  console.log("5. Exist");
}


// view product

function viewProducts(){
  console.log("Products Available");
  products.forEach((index, product) => {
    console.log(`${index+1}. ${product[index].name}- ${products[index].price}`)
  });
}
// add to cart
function addToCart(index){
  let selectedProduct = products[index]
  cart.push(selectedProduct)
  console.log(`${selectedProduct.name} added to your cart`)
}

//view cart
function ViewCart(){
  console.log("Your shopping Cart")
  cart.forEach((item,index)=>{
    console.log(`${index + 1}. ${item[index].name} ${item[index].price}`)
  })
}

function Checkout(){
  console.log("checkout successful")
}

//main 
function main(){
  while(true){
    DisplayMenu();
    let choice= prompt("Enter your choice: ")

    let real_choice = Number(choice)

    switch (real_choice){
      case 1:
        viewProducts()
        break;
      case 2:
        const productIndex =parseInt(prompt("enter the product number: "))
        addToCart(productIndex)
        break;
      case 3:
        ViewCart()
        break;
      case 4:
        Checkout()
        return;
      case 5:
        console.log("Existing the app! Thanks for shopping ")
        return;
      default :
      console.log("invalid input! Try again")

    }
  }
}
// Run the program
main();


