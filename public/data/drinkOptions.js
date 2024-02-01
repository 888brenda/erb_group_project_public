export const drinkOptions = [{
  lunchDrink: [{
    drinkId: "k01",
    drinkNameChi: "咖啡",
    drinkNameEng: "Coffee",
    drinkPrice: 1000
}, {
    drinkId: "k02",
    drinkNameChi: "奶茶",
    drinkNameEng: "Hot Milk Tea",
    drinkPrice: 500
}, {
    drinkId: "k03",
    drinkNameChi: "檸茶",
    drinkNameEng: "Hot Lemon Tea",
    drinkPrice: 500
}],
  dinnerDrink: [{
    drinkId: "d01",
    drinkNameChi: "拿鐵",
    drinkNameEng: "Hot Latte Coffee",
    drinkPrice: 0
}, {
    drinkId: "d02",
    drinkNameChi: "紅酒",
    drinkNameEng: "In house red wine",
    drinkPrice: 3000
}, {
    drinkId: "d03",
    drinkNameChi: "白酒",
    drinkNameEng: "In house white wine",
    drinkPrice: 4000
}]
}];
export function getDrinkOption(drinkOptionId) {
  let drinkOption; // declare the variable inside the function
  for (let option of drinkOptions) {
    for (let drink of option.lunchDrink) {
      if (drink.drinkId === drinkOptionId) {
        drinkOption = drink; // assign the object to the variable
      }
    }
    for (let drink of option.dinnerDrink) {
      if (drink.drinkId === drinkOptionId) {
        drinkOption = drink; // assign the object to the variable
      }
    }
  }
  return drinkOption; // return the variable
}