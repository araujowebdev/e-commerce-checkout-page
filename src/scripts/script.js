let btnMinus = document.querySelectorAll(".btn-minus");
let btnPlus = document.querySelectorAll(".btn-plus");
let qttItems = document.querySelectorAll(".number-items");
let itemPrice = document.querySelectorAll(".item-price");
let totalValue = document.querySelector("#total-value");
const shiping = 19;

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    qttItems[index].textContent = +qttItems[index].textContent + 1;

    itemPrice[index].textContent = (
      (+itemPrice[index].textContent / (+qttItems[index].textContent - 1)) *
      +qttItems[index].textContent
    ).toFixed(2);
    totalV();
  });
});

btnMinus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (+qttItems[index].textContent > 1) {
      qttItems[index].textContent = +qttItems[index].textContent - 1;

      itemPrice[index].textContent = (
        (+itemPrice[index].textContent / (+qttItems[index].textContent + 1)) *
        +qttItems[index].textContent
      ).toFixed(2);
      totalV();
    }
  });
});

function totalV() {
  let itemPriceSum = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    itemPriceSum += +itemPrice[i].textContent;
  }
  totalValue.textContent = (itemPriceSum + shiping).toFixed(2);
}
