let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// const url=`https://makeup-api.herokuapp.com/api/v1/products.json`;

let data=[
  {
    image:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494`,
    price:`From Rs${599}`,
    name:`May'22 The Awesummer may fab Bag`,
  },
  {
    image:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif?v=1644395072`,
    price:`From Rs${599}`,
    name:`Apr'22 The Sassy Spring Fab Bag`,
  },
  {
    image:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3_large.png?v=1641707966`,
    price:`From Rs${599}`,
    name:`Mar'22 The Empow-HER fab Bag`,
  },
  {
    image:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3_large.gif?v=1638191014`,
    price:`From Rs${599}`,
    name:`Feb'22 The Colour Me cupid Fab Bag`,
  },
  {
    image:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042`,
    price:`From Rs${599}`,
    name:`Jan'22 The Beauty Resolution Fab Bag`,
  }

]

data.forEach(function (ele){
    var div=document.createElement('div')
    div.className='cart'

    let image=document.createElement("img")
    image.src=ele.image;

    let name=document.createElement('p')
    name.innerText=ele.name;

    let price=document.createElement("p")
    price.innerText=ele.price;


    
    div.append(image,name,price)
    newcontainer.append(div)

   image.addEventListener("click",function (){
        addTocart(ele)
    })
})
function addTocart(ele){
    let addbag=JSON.parse(localStorage.getItem("item")) || []
    addbag.push(ele)
    localStorage.setItem("item",JSON.stringify(addbag))
    console.log(addbag)
}

localStorage.setItem("data",JSON.stringify(data))




