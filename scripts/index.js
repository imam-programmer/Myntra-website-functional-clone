let bagadd_array=[]
let main=document.querySelector("main");
onLoad()
function onLoad(){
    let storagestring=localStorage.getItem("products")
    bagadd_array=storagestring?JSON.parse(storagestring):[]
    firstpage()
    setstorage()
    
}
function firstpage(){
    let innerHTML="";
    if(!main){
        return;
    }
    items.map((e)=>{
    return innerHTML+= `<div class="product">
                  <img src="./${e.image}" alt="">
                  <h6>${e.rating.stars} <span>★★★★★</span> | (${e.rating.count})</h6>
                  <h3>${e.company}</h3>
                  <h4>${e.item_name}</h4>
                  <h2 >$${e.current_price} <span class="original">$${e.original_price}</span> <span class="offer">(${e.discount_percentage}% OFF)</span></h2>
                  <button onclick="addCard(${e.id})">Add to Bag</button>
                </div>`
    })
    main.innerHTML=innerHTML;
}
function addCard(e){
    bagadd_array.push(e);
    localStorage.setItem("products",JSON.stringify(bagadd_array))
    setstorage()
   
}
function setstorage(){
    let addtopbag=document.querySelector(".bag-item-count");
 if(bagadd_array.length>0){
     addtopbag.innerHTML=bagadd_array.length
     addtopbag.style.visibility="visible"
    }else{
        addtopbag.style.visibility="hidden"
    }
}


