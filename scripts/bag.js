
let selectProductobj;
onLoad()
function onLoad(){
  loadBagItemObjects()
  displayBagItems()
   priceingshow()
}
function loadBagItemObjects(){
  selectProductobj=bagadd_array.map((e)=>{
      for(let i=0;i<items.length; i++){
          if(e==items[i].id){
              return items[i]
          }
      }
  })
}

function itemDelet(item){
bagadd_array=bagadd_array.filter(e=>e!=item)
localStorage.setItem("products",JSON.stringify(bagadd_array))
setstorage()
loadBagItemObjects()
displayBagItems()
priceingshow()
}



function displayBagItems(){
  let selectingProducts=document.querySelector('.bag-items-container');
  let innerHTML=""
  selectProductobj.map((e)=>{
      return innerHTML+=`<div class="bag-item-container">
              <div class="item-left-part">
                <img class="bag-item-img" src="../${e.image}">
              </div>
              <div class="item-right-part">
                <div class="company">${e.company}</div>
                <div class="item-name">${e.item_name}</div>
                <div class="price-container">
                  <span class="current-price">Tk ${e.current_price}</span>
                  <span class="original-price">Tk ${e.original_price}</span>
                  <span class="discount-percentage">(${e.discount_percentage}% OFF)</span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">${e.return_period} days</span> return available
                </div>
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">${e.delivery_date}</span>
                </div>
              </div>
  
              <div class="remove-from-cart" onclick="itemDelet(${e.id})">X</div>
            </div>`
  })
  selectingProducts.innerHTML=innerHTML;
}




// ===========sumery part start====================
function priceingshow(){

  let finalBaypart=document.querySelector(".bag-summary");
  let item=bagadd_array.length;
  let mrp=0;
  let discount_mrp=0;
  selectProductobj.forEach(e=>{
   mrp+=e.original_price;
   discount_mrp+=e.original_price-e.current_price;
  
  
  })
  let finalpayment=mrp-discount_mrp+99;
  
  finalBaypart.innerHTML=` <div class="bag-details-container">
              <div class="price-header">PRICE DETAILS (${item} Items) </div>
              <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">Tk ${mrp}</span>
              </div>
              <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-Tk ${discount_mrp}</span>
              </div>
              <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">Tk 99</span>
              </div>
              <hr>
              <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">Tk ${finalpayment}</span>
              </div>
            </div>
              <button class="btn-place-order">
              <div class="css-xjhrni">PLACE ORDER</div>
            </button>`
}
