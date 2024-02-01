export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart) {
  cart = [];
}
// if(!cart) {
//   cart = [{
//         mealId: "s01", 
//         quantity: 2,
//         drinkOptionId: "d01",
//         soupOptionId: "w01"
//       },{
//         mealId: "s02",
//         quantity: 1,
//         drinkOptionId: "d02",
//         soupOptionId: "w02"
//     }];
// }
// export let cart = [{
//     mealId: "s01",  // only use the id to search for whole product details called normalizing the data
//     quantity: 2,
//   },{
//     mealId: "s02",
//     quantity: 1,
// }];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// step 8: create function for add to cart, move to cart.js from main.js and export it
export function addToCart(mealId) {
  // step3: comparsion of item in dataset versus data in cart 
      // (create an empty array in cart.js)
      let matchingItem;

      cart.forEach((cartItem) => {
        if (mealId === cartItem.mealId) {
          matchingItem = cartItem;
        }
      });

      // step4: accumulate and motify the total quantity of the duplicate meal item together
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
          cart.push({
            mealId: mealId,
            quantity: 1,
            drinkOptionId: "d01",
            soupOptionId: "w01"
        });
      }
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

