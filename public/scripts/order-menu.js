// step 7: create type=module in html file and import and export related features
// step 9: import addToCart function
let daytimeElem = document.querySelector('.js-day-time');
let lunchTimeElem = document.querySelector('.lunch-time');
let dinnerTimeElem = document.querySelector('.dinner-time');
import { cart, addToCart } from '../data/cart.js';
import { meals, getMeal } from '../data/meals.js';
import { formatCurrency } from './utils/money.js';
import { addToDetail } from './order-list-detail.js';
import { dayInWeekChi, lunchActivatedTab, dinnerActivatedTab, refreshPage } from './utils/time.js';

let timeNow = dayjs().format('HHmm');
const showTime = dayjs().format('HH:mm');
const showDay = dayjs().format('ddd');

let timeHTML = '';
timeHTML = `
            <div class="today">今天：${dayInWeekChi(showDay)} ${showTime}</div>
            <br/>
            <div class="meal-set-time-period">
              <div class="lunch-time tab ${lunchActivatedTab(timeNow)}">下午 12-6</div>
              <div class="dinner-time tab ${dinnerActivatedTab(timeNow)}">晚上 6-11</div>
            </div>
          `;
daytimeElem.innerHTML = timeHTML;

// step 1: create data (meals.js), dom (below), and marked create inside html page (see *remark, but it will change in step7)
//*remark <script src="data/cart.js"></script>
//        <script src="data/meals.js"></script>
//        <script src="scripts/order-menu.js"></script> 

let set = '';
export function setMeal(timeNow) {
    if (timeNow >= 0 && timeNow <= 1800) {
      set = meals[0].lunch;
    } else if (timeNow >=1801 && timeNow <= 2400) {
      set = meals[0].dinner;
    }
    return set;
}

let mealsHTML = '';

setMeal(timeNow).forEach((meal) => {
  mealsHTML += `
      <div class="card">
      <div class="food-name-price">
          <div class="food-name">${meal.mealNameChi}</div>
          <div class="food-price">$${formatCurrency(meal.mealPrice)}</div>
      </div>
      <div class="food-image"><img src="${meal.mealImage}" alt="${meal.mealNameChi}"></div>
      <div class="confirm">
          <button onclick="showDetail(${meal.mealId})" class="submit-btn-details js-add-to-detail" data-meal-id="${meal.mealId}">放大</button>
          <button class="submit-btn-add js-add-to-cart" data-meal-id="${meal.mealId}">加入選擇</button>
      </div>
    </div>
  `;
});
document.querySelector('.js-meals-grid').innerHTML = mealsHTML;

function showDetail(mealId) {
  document.querySelectorAll('.js-add-to-detail')
  .forEach((button) => {
    button.addEventListener('click', () => {

      document.querySelector('.js-meals-grid').style.display = "none";
    
      const mealId = button.dataset.mealId;
      const matchingMeal = getMeal(mealId);
    
      
      let detailHTML = '';
      detailHTML += `
        <div class="review-big-picture">
            <div class="food-name">${matchingMeal.mealNameChi}</div>
            <div class="food-image-big-picture"><img src="${matchingMeal.mealImage}" alt="${matchingMeal.mealNameChi}"></div>
            <div class="food-price">$${formatCurrency(matchingMeal.mealPrice)}</div>
            <div class="back-to-block-section">
                <div onclick="changePage()" class="cancel">返回上頁</div>
            </div>
        </div>
      `;
      console.log(detailHTML);
      document.querySelector('.js-meals-detail').innerHTML = detailHTML;
    }); 
  });
}
showDetail();


// step 9: create function of update cart quanatity
function updateCartQuantity() {
  // step5: calculate the total quantity of meal in cart

  let cartQuantity = 0; // for record the total quantity

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  console.log(cartQuantity);
  console.log(cart);

  // step 6: add the number of quantity into the DOM
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {

      // step2: after create the click event listener, create dataset
      const mealId = button.dataset.mealId;

      // step 3 & 4 had been removed to a function called addToCart into cart.js and import back for here (refer to step 8)
      // thus run addToCart here instead:
      addToCart(mealId);

      // step 5 & 6 had been removed to a function called updateCartQuantity (refer to step 9)
      // thus run updateCartQuantity here instead:
      updateCartQuantity();

    });
  });
  



