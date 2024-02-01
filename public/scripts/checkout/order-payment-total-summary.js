import { cart } from '../../data/cart.js';
import { getMeal } from '../../data/meals.js';
import { getDrinkOption } from '../../data/drinkOptions.js';
import { getSoupOption } from '../../data/soupOptions.js';
import { formatCurrency } from '../utils/money.js';
import { gameArrResult } from './discount.js';
// console.log(gameArr)
export function renderPaymentTotalSummary() {
    let mealPrice = 0;
    let drinkPrice = 0;
    let soupPrice = 0;
    let rate;

    cart.forEach((cartItem) => {
        const meal = getMeal(cartItem.mealId);
        mealPrice += meal.mealPrice * cartItem.quantity;

        const drinkOption = getDrinkOption(cartItem.drinkOptionId);
        drinkPrice += drinkOption.drinkPrice;

        const soupOption = getSoupOption(cartItem.soupOptionId);
        soupPrice += soupOption.soupPrice;
    });

    gameArrResult.forEach((num) => {
        
        rate = gameArrResult[0].discount;
        return rate;
    })

    const totalBeforeServiceCharge = mealPrice + drinkPrice + soupPrice;
    const serviceCharge = totalBeforeServiceCharge * 0.1;
    const discountAmount = totalBeforeServiceCharge * rate;
    const totalPrice = totalBeforeServiceCharge + serviceCharge - discountAmount;

    const paymentSummaryHTML = `
        <div class="total-calculation">
            <div class="sub-total-price">$${formatCurrency(totalBeforeServiceCharge)}</div>
            <div class="service-charge">服務費 10%：     $${formatCurrency(serviceCharge)}</div>
            <div class="discount">遊戲所得折扣：($${formatCurrency(discountAmount)})</div>
            <div class="total">合計：  $${formatCurrency(totalPrice)}</div>
        </div>
    `;
    document.querySelector('.js-payment-total-summary').innerHTML = paymentSummaryHTML;
}

