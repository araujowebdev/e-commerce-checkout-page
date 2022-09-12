let qttItems = document.querySelectorAll(".number-items");
let itemPrice = document.querySelectorAll(".item-price");

// Increases the number of items and their total value according to the clicks the btnPlus button receives.
let btnPlus = document.querySelectorAll(".btn-plus");

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

// Decreases the number of items and their total value according to the clicks the btnPlus button receives.
let btnMinus = document.querySelectorAll(".btn-minus");

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

// Updates the total amount of the customer's purchases.
let totalValue = document.querySelector("#total-value");
const shiping = 19;

function totalV() {
  let itemPriceSum = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    itemPriceSum += +itemPrice[i].textContent;
  }
  totalValue.textContent = (itemPriceSum + shiping).toFixed(2);
}
