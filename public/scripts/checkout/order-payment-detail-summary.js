// step 1: create order-list.js and type=module in html to this js file
// step 2: create little default data to the cart.js
// step 3: import cart from cart.js, prepare innerhtml for loop through
// step 4: put it in HTML
// step 5: create utils folder and money.js to create function of toFixed() and use if into differenct js files
// step 6: create drink option skipped
// step 7: create delete button, add data-, click event, create remove function in cart.js to make it interactive
// step 8: make remove/delete button interactive: (1) DOM elem (2) .remove()
// step 9: create local storoge

import { cart, removeFromCart, updateDrinkOption, updateSoupOption } from '../../data/cart.js';
import { meals, getMeal } from '../../data/meals.js';
import { formatCurrency } from '../utils/money.js';
import { drinkOptions, getDrinkOption } from '../../data/drinkOptions.js';
import { soupOptions, getSoupOption } from '../../data/soupOptions.js';

export function renderPaymentDetailSummary() {


  let cartSummaryHTML = '';
  cart.forEach((cartItem) => {
    const mealId = cartItem.mealId;

    const matchingMeal = getMeal(mealId);

    // console.log(matchingMeal);

    const drinkOptionId = cartItem.drinkOptionId;

    const drinkOption = getDrinkOption(drinkOptionId);

    const soupOptionId = cartItem.soupOptionId;

    const soupOption = getSoupOption(soupOptionId);

    // console.log(drinkOption)
    cartSummaryHTML += `
      <div class="item-selected-bill js-cart-item-container-${matchingMeal.mealId}">
          <div class="name">
            <div class="food-name">${matchingMeal.mealNameChi}</div>
            <div class="drink-name">已選(${drinkOption.drinkNameChi})</div>
            <div class="soup-list">已選(${soupOption.soupNameChi})</div>
            </div>
          <div class="quantity">${cartItem.quantity}</div>
          <div class="price">${formatCurrency((matchingMeal.mealPrice)*(cartItem.quantity)+(cartItem.quantity)*(drinkOption.drinkPrice)+(cartItem.quantity)*(soupOption.soupPrice))}</div>
      </div>
    `;
  });

  document.querySelector('.js-payment-detail-summary')
    .innerHTML =cartSummaryHTML;

  // console.log(cartSummaryHTML)

  document.querySelectorAll('.js-delete-from-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const mealId = link.dataset.mealId;
        // removeFromCart(mealId);
        // console.log(cart);

        const container = document.querySelector(`.js-cart-item-container-${mealId}`);
        console.log(container)
        container.remove();
      });
    });

  document.querySelectorAll('.js-drink-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {mealId, drinkOptionId} = element.dataset;
        updateDrinkOption(mealId, drinkOptionId);
        renderPaymentDetailSummary();
      });
    });

    document.querySelectorAll('.js-soup-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {mealId, soupOptionId} = element.dataset;
        updateSoupOption(mealId, soupOptionId);
        renderPaymentDetailSummary();
      });
    });
}
renderPaymentDetailSummary();