let cartItems = JSON.parse(localStorage.getItem("item"));

console.log(cartItems);

let total = cartItems.reduce(function(sum,{price}){    
    return sum + Number(price);
},0);


let total_value = document.querySelector("#cart_total");
total_value.innerText=total;
let bag=0

cartItems.map(function(ele){

    var div = document.createElement("div");
    div.className = "contents";

    let itemImage = document.createElement("img");
    itemImage.src=ele.image;

    let itemName = document.createElement("p");
    itemName.innerText=ele.name;

    let itemPrice = document.createElement("p")
    itemPrice.innerText= ele.price;

   

    div.append(itemImage,itemName,itemPrice);
   
    document.querySelector("#cart").append(div);
    document.querySelector('#cart_total').append(bag)
})
