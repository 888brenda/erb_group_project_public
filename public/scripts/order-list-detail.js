import { meals, getMeal } from '../data/meals.js';
import { formatCurrency } from './utils/money.js';

export function addToDetail(mealId) {
  let detailHTML = '';

    const matchingMeal = getMeal(mealId);
    console.log(matchingMeal);

    detailHTML += `
      <div class="review-big-picture js-big-picture">
          <div class="food-name">${matchingMeal.mealNameChi}</div>
          <div class="food-image"><img src="${matchingMeal.mealImage}" alt="${matchingMeal.mealNameChi}"></div>
          <div class="food-price">$${formatCurrency(matchingMeal.mealPrice)}</div>
          <div class="cancelANDconfirm">
              <div class="cancel">返回上頁</div>
              <div class="confirm">確定下單</div>
          </div>
      </div>
    `;
    console.log(detailHTML)
    document.querySelector('.js-big-picture').innerHTML = detailHTML;
};
