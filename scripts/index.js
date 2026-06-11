let main=document.querySelector("main");
console.log(main);
// main.innerHTML=

let innerHTML="";
items.map((e)=>{
return innerHTML+= `<div class="product">
              <img src="./${e.image}" alt="">
              <h6>${e.rating.stars} <span>★★★★★</span> | (${e.rating.count})</h6>
              <h3>${e.company}</h3>
              <h4>${e.item_name}</h4>
              <h2 >$${e.current_price} <span class="original">$${e.original_price}</span> <span class="offer">(${e.discount_percentage}% OFF)</span></h2>
              <button>Add to Bag</button>
            </div>`
})
main.innerHTML=innerHTML
