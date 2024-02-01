export let detail = JSON.parse(localStorage.getItem('detail'));

if(!detail) {
  detail = [{
        mealId: "s01"
      }];
}
// export let detail = [{
//     mealId: "s01"
//   }];

function saveToDetailStorage() {
  localStorage.setItem('detail', JSON.stringify(detail));
}

export function addToDetail(mealId) {
      let matchingItem;

      detail.forEach((detailItem) => {
        if (mealId === detailItem.mealId) {
          matchingItem = detailItem;
          detail.push({
            mealId: mealId
          });
        }
      });
      saveToStorage();
}

export function removeFromCart(mealId) {
  
  const newCart = [];

  cart.forEach((cartItem) => {
      if (cartItem.mealId !== mealId) {
          newCart.push(cartItem);
      }
  });

  cart = newCart;

  saveToStorage();
};

export function updateDrinkOption(mealId, drinkOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (mealId === cartItem.mealId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.drinkOptionId = drinkOptionId;
  saveToStorage();
}

export function updateSoupOption(mealId, soupOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (mealId === cartItem.mealId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.soupOptionId = soupOptionId;
  saveToStorage();
}


