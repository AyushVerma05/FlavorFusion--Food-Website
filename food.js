 let loading = document.querySelector(".loading");
 let container = document.querySelector(".container");
 let card = document.querySelectorAll(".card");

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);

        document.querySelector("body").innerHTML=""
        let div = document.createElement("div");
        div.classList.add("foodDetail");
        div.innerHTML=`
        <img src=${cards.firstElementChild.src} alt="">
<div class="detailText">
    <h1>Enjoy the Best with FlavorFusion</h1>
    <h3>Exciting Offers Upto 50% OFF</h3>
    <p>Cash on Delivery Available</p>
    <p>Enjoy the Food</p>
    <button>Buy Now</button>
    <button>Add To Cart</button>
    <a href="">Back</a>

</div>
        `
        document.querySelector("body").appendChild(div)
    })
})






//  loading
 container.style.display="none";
 setTimeout(function(){
 container.style.display="block";
 loading.style.display="none";



 }, 2000)
