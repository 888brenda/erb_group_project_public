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


const showTime = dayjs().format('HH:mm');
const showDay = dayjs().format('ddd');

export function renderOrderListSummary(timeNow) {

  let cartSummaryHTML = '';
  cart.forEach((cartItem) => {
    const mealId = cartItem.mealId;
    const matchingMeal = getMeal(mealId);
    const drinkOptionId = cartItem.drinkOptionId;
    const drinkOption = getDrinkOption(drinkOptionId);
    console.log(drinkOption.drinkNameChi)
    const soupOptionId = cartItem.soupOptionId;
    const soupOption = getSoupOption(soupOptionId);

    cartSummaryHTML += `
      <div class="item-selected js-cart-item-container-${matchingMeal.mealId}">
          <div class="food-image"><img src="${matchingMeal.mealImage}" alt="${matchingMeal.mealNameChi}"></div>
          <div class="all-name">
            <div class="food-name">${matchingMeal.mealNameChi}</div>
            <div class="drink-name">已選(${drinkOption.drinkNameChi})</div>
            <div class="soup-name">已選(${soupOption.soupNameChi})</div>
          </div>
          <div class="quantity">${cartItem.quantity}</div>
          <div class="price">$${formatCurrency((matchingMeal.mealPrice)*(cartItem.quantity)+(cartItem.quantity)*(drinkOption.drinkPrice))}</div>
          <div class="drink-list">${drinkOptionsHTML(matchingMeal, cartItem)}</div>
          <div class="soup-list">${soupOptionsHTML(matchingMeal, cartItem)}</div>
          <button class="submit-btn-delete js-delete-from-link" data-meal-id="${matchingMeal.mealId}">刪除</button>
      </div>
    `;
  });
  // <div class="drink-name">已選(${drinkOption.drinkNameChi})</div>
  // <div class="price">$${formatCurrency((matchingMeal.mealPrice)*(cartItem.quantity)+(cartItem.quantity)*(drinkOption.drinkPrice))}</div>
  function drinkOptionsHTML(matchingMeal, cartItem) {

    let html = '';
    let timeNow = dayjs().format('HHmm');

    let drinkSetShow = '';
    function setDrink(timeNow) {
      if (timeNow < 1800) {
        drinkSetShow = drinkOptions[0].lunchDrink;
      } else if (timeNow > 1800) {
        drinkSetShow = drinkOptions[0].dinnerDrink;
      }
      return drinkSetShow;
    }
    
    setDrink(timeNow).forEach((drinkOption) => {
      const priceString = drinkOption.drinkPrice === 0? '免費' : `$${formatCurrency(drinkOption.drinkPrice)}`;
      const isChecked = drinkOption.drinkId === cartItem.drinkOptionId;

      html += `
        <span class="drink-option js-drink-option" data-meal-id="${matchingMeal.mealId}" data-drink-option-id="${drinkOption.drinkId}">
          <span>
            <input type="radio" ${isChecked? 'checked':''} class="drink-option-input" name="drink-option-${matchingMeal.mealId}>
            <span class="drink-option-drink-name">${drinkOption.drinkNameChi}</span>
            <span class="drink-option-drink-price">${priceString}</span>
          </span>
        </span>
      `
    });
    return html;
  }

  function soupOptionsHTML(matchingMeal, cartItem) {
    let html = '';

    soupOptions.forEach((soupOption) => {
      const priceString = soupOption.soupPrice === 0? '免費' : `$${formatCurrency(soupOption.soupPrice)}`;
      const isChecked = soupOption.soupId === cartItem.soupOptionId;

      html += `
        <span class="soup-option js-soup-option" data-meal-id="${matchingMeal.mealId}" data-soup-option-id="${soupOption.soupId}">
          <span>
            <input type="radio" ${isChecked? 'checked':''} class="soup-option-input" name="soup-option-${matchingMeal.mealId}>
            <span class="soup-option-soup-name">${soupOption.soupNameChi}</span>
            <span class="soup-option-soup-price">${priceString}</span>
          </span>
        </span>
      `
    });
    return html;
  }

  document.querySelector('.js-order-list-summary')
    .innerHTML =cartSummaryHTML;

  document.querySelectorAll('.js-delete-from-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const mealId = link.dataset.mealId;
        removeFromCart(mealId);
        console.log(cart);

        const container = document.querySelector(`.js-cart-item-container-${mealId}`);
        console.log(container)
        container.remove();

      });
    });

  document.querySelectorAll('.js-drink-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {mealId, drinkOptionId} = element.dataset;
        // console.log(element.dataset)
        updateDrinkOption(mealId, drinkOptionId);
        renderOrderListSummary();
      });
    });

  document.querySelectorAll('.js-soup-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {mealId, soupOptionId} = element.dataset;
        updateSoupOption(mealId, soupOptionId);
        renderOrderListSummary();
      });
    });
}
renderOrderListSummary();