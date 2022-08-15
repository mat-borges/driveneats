let selecao = 0;
let priceMeal = 0;
let priceDrink = 0;
let priceDessert = 0;
let textMeal = 0;
let textDrink = 0;
let textDessert = 0;

function selectMeal(selection) {
   const buttonMeal = document.querySelector(".main-meal .selected");

   if (buttonMeal !== null) {
      buttonMeal.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(selection);
   selector.classList.add("selected");

   const getPriceMeal = document.querySelector(selection + " .valor");
   priceMeal = Number(getPriceMeal.innerHTML);

   const getTextMeal = document.querySelector(selection + " h4");
   textMeal = getTextMeal.innerHTML;

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completed");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkMeal(selection) {
   const mealCheck = document.querySelector(".main-meal .show");

   if (mealCheck !== null) {
      mealCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(selection);
   selectorC.classList.add("show");
}

function selectDrink(selection) {
   const buttonDrink = document.querySelector(".drink .selected");

   if (buttonDrink !== null) {
      buttonDrink.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(selection);
   selector.classList.add("selected");

   const getPriceDrink = document.querySelector(selection + " .valor");
   priceDrink = Number(getPriceDrink.innerHTML);

   const getTextDrink = document.querySelector(selection + " h4");
   const getTextDrink2 = document.querySelector(selection + " h5");
   textDrink = getTextDrink.innerHTML + " (" + getTextDrink2.innerHTML + ")";

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completed");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkDrink(selection) {
   const drinkCheck = document.querySelector(".drink .show");

   if (drinkCheck !== null) {
      drinkCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(selection);
   selectorC.classList.add("show");
}

function selectDessert(selection) {
   const buttonDessert = document.querySelector(".dessert .selected");

   if (buttonDessert !== null) {
      buttonDessert.classList.remove("selected");
      selecao--;
   }

   const selector = document.querySelector(selection);
   selector.classList.add("selected");

   const getPriceDessert = document.querySelector(selection + " .valor");
   priceDessert = Number(getPriceDessert.innerHTML);

   const getTextDessert = document.querySelector(selection + " h4");
   textDessert = getTextDessert.innerHTML;

   selecao++;
   if (selecao === 3) {
      const fimPedido = document.querySelector(".bottom-menu h6");
      fimPedido.classList.add("completed");
      fimPedido.innerHTML = "Fechar pedido";
   }
}

function checkDessert(selection) {
   const dessertCheck = document.querySelector(".dessert .show");

   if (dessertCheck !== null) {
      dessertCheck.classList.remove("show");
   }

   const selectorC = document.querySelector(selection);
   selectorC.classList.add("show");
}

function endOrder() {
   if (selecao === 3) {
      const totalPrice = (priceMeal + priceDrink + priceDessert).toFixed(2);
      const confText = document.querySelector(".texto-confirmacao span");
      const confPrice = document.querySelector(".texto-confirmacao p");

      confText.innerHTML = `${textMeal} </br></br> ${textDrink} </br></br> ${textDessert} </br></br> <strong>TOTAL</strong>`;
      confPrice.innerHTML = `R$ ${priceMeal.toFixed(
         2
      )} </br></br> R$ ${priceDrink.toFixed(
         2
      )} </br></br> R$ ${priceDessert.toFixed(
         2
      )} </br></br> <strong>R$ ${totalPrice}</strong>`;

      const confirmation = document.querySelector(".big-confirmation");
      confirmation.classList.remove("hide");
   }
}

function fimPedido() {
   const nome = prompt("Informe seu nome:");
   const endereco = prompt("Informe seu endereço");

   const totalPrice = priceMeal + priceDrink + priceDessert;

   urlWpp =
      "https://wa.me/5519997403626?text=" +
      encodeURIComponent(
         `Olá, gostaria de fazer o pedido: \n` +
            ` - Prato:  ${textMeal} \n` +
            ` - Bebida:  ${textDrink} \n` +
            ` - Sobremesa:  ${textDessert} \n` +
            `Total: R$ ${totalPrice.toFixed(2)} \n\n` +
            `Nome:  ${nome} \n` +
            `Endereço:  ${endereco}`
      );

   window.open(urlWpp);
}

function cancel() {
   const confirmation = document.querySelector(".big-confirmation");
   confirmation.classList.add("hide");
}
