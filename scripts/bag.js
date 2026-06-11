let selectingProducts=document.querySelector('.bag-items-container');
// selectingProducts.innerHTML=

let selectProductobj;
selectProductobj=bagadd_array.map((e)=>{
    for(let i=0;i<items.length; i++){
        if(e==items[i].id){
            return items[i]
        }
    }
})

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
                <span class="current-price">Rs ${e.current_price}</span>
                <span class="original-price">Rs ${e.original_price}</span>
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

            <div class="remove-from-cart" onclick="itemDelet()">X</div>
          </div>`
})
selectingProducts.innerHTML=innerHTML;

let finalBaypart=document.querySelector(".bag-summary");

let item=0;
finalBaypart.innerHTML=` <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (2 Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs1284</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs143</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs 1240</span>
            </div>
          </div>`
