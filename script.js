let selecao = 0;
let priceMeal = 0;
let priceDrink = 0;
let priceDessert = 0;
let textMeal = 0;
let textDrink = 0;
let textDessert = 0;

function selectMeal(mealClass) {
   const buttonMeal = document.querySelector(".main-meal .selected");

   if (buttonMeal !== null) {
      buttonMeal.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(mealClass);
   selector.classList.add("selected");

   const getPriceMeal = document.querySelector(mealClass + " .valor");
   priceMeal = Number(getPriceMeal.innerHTML);

   const getTextMeal = document.querySelector(mealClass + " h4");
   textMeal = getTextMeal.innerHTML;
   console.log(textMeal);

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completo");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkMeal(checkMClass) {
   const mealCheck = document.querySelector(".main-meal .show");

   if (mealCheck !== null) {
      mealCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(checkMClass);
   selectorC.classList.add("show");
}

function selectDrink(drinkClass) {
   const buttonDrink = document.querySelector(".drink .selected");

   if (buttonDrink !== null) {
      buttonDrink.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(drinkClass);
   selector.classList.add("selected");

   const getPriceDrink = document.querySelector(drinkClass + " .valor");
   priceDrink = Number(getPriceDrink.innerHTML);

   const getTextDrink = document.querySelector(drinkClass + " h4");
   const getTextDrink2 = document.querySelector(drinkClass + " h5");
   textDrink = getTextDrink.innerHTML + " (" + getTextDrink2.innerHTML + ")";

   console.log(textDrink);

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completo");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkDrink(checkDClass) {
   const drinkCheck = document.querySelector(".drink .show");

   if (drinkCheck !== null) {
      drinkCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(checkDClass);
   selectorC.classList.add("show");
}

function selectDessert(dessertClass) {
   const buttonDessert = document.querySelector(".dessert .selected");

   if (buttonDessert !== null) {
      buttonDessert.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(dessertClass);
   selector.classList.add("selected");

   const getPriceDessert = document.querySelector(dessertClass + " .valor");
   priceDessert = Number(getPriceDessert.innerHTML);

   const getTextDessert = document.querySelector(dessertClass + " h4");
   textDessert = getTextDessert.innerHTML;
   console.log(textDessert);

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completo");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkDessert(checkDClass) {
   const dessertCheck = document.querySelector(".dessert .show");

   if (dessertCheck !== null) {
      dessertCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(checkDClass);
   selectorC.classList.add("show");
}

function finalizarPedido() {
   if (selecao === 3) {
      const nome = prompt("Informe seu nome:");
      const endereco = prompt("Informe seu endereço");

      const totalPrice = priceMeal + priceDrink + priceDessert;

      urlWpp =
         "https://wa.me/5519997403626?text=" +
         encodeURIComponent(
            "Olá, gostaria de fazer o pedido: \n" +
               " - Prato:  " +
               textMeal +
               "\n" +
               " - Bebida:  " +
               textDrink +
               "\n" +
               " - Sobremesa:  " +
               textDessert +
               "\n" +
               "Total: R$ " +
               totalPrice.toFixed(2) +
               "\n \nNome:  " +
               nome +
               "\nEndereço:   " +
               endereco
         );

      window.open(urlWpp);
   }
}
