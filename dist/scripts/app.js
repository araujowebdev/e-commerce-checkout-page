"use strict";var btnMinus=document.querySelectorAll(".btn-minus"),btnPlus=document.querySelectorAll(".btn-plus"),qttItems=document.querySelectorAll(".number-items"),itemPrice=document.querySelectorAll(".item-price"),totalValue=document.querySelector("#total-value"),shiping=19;function totalV(){for(var t=0,e=0;e<itemPrice.length;e++)t+=+itemPrice[e].textContent;totalValue.textContent=(t+shiping).toFixed(2)}btnPlus.forEach(function(t,e){t.addEventListener("click",function(){qttItems[e].textContent=+qttItems[e].textContent+1,itemPrice[e].textContent=(+itemPrice[e].textContent/(+qttItems[e].textContent-1)*+qttItems[e].textContent).toFixed(2),totalV()})}),btnMinus.forEach(function(t,e){t.addEventListener("click",function(){1<+qttItems[e].textContent&&(qttItems[e].textContent=+qttItems[e].textContent-1,itemPrice[e].textContent=(+itemPrice[e].textContent/(+qttItems[e].textContent+1)*+qttItems[e].textContent).toFixed(2),totalV())})});