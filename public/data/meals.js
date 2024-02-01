const timeNow = dayjs().format('HHmm');
let set = '';

export function setMeal(timeNow) {
    if (timeNow >= 0 && timeNow <= 1800) {
        set = meals[0].lunch;
    } else if (timeNow >=1801 && timeNow <= 2400) {
        set = meals[0].dinner;
    }
    return set;
}


export function getMeal(mealId) {
    let matchingMeal;

    setMeal(timeNow).forEach((meal) => {
      if (meal.mealId === mealId) {
        matchingMeal = meal;
      }
    });
    return matchingMeal;
}


export const meals = [{
    lunch: [{
        mealId: "m01",
        mealNameChi: "A: 意式三文魚菠菜烘蛋",
        mealNameEng: "A: Salmon Frittata",
        mealImage: "../image/food-image/lunch-1.jpg",
        mealPrice: "8000"
    }, 
    {
        mealId: "m02",
        mealNameChi: "B: 一鍋到底上海粗炒",
        mealNameEng: "B: Shanghai Fried Noodles",
        mealImage: "../image/food-image/lunch-2.jpg",
        mealPrice: "6000"
    },
    {
        mealId: "m03",
        mealNameChi: "C: 蜜糖栗米芝士焗雞翼",
        mealNameEng: "C: Cheesy Honey Chicken Wings with Corn",
        mealImage: "../image/food-image/lunch-3.jpg",
        mealPrice: "6500"
    },
    {
        mealId: "m04",
        mealNameChi: "D: 牛油香煎松茸和牛炊飯",
        mealNameEng: "D: Wagyu Rice with Matsutake Mushrooms",
        mealImage: "../image/food-image/lunch-4.jpg",
        mealPrice: "8500"
    },
    {
        mealId: "m05",
        mealNameChi: "E: 魚風味麻酸辣米線",
        mealNameEng: "E: Fish Yam Spicy and Sour Noodles",
        mealImage: "../image/food-image/lunch-5.jpg",
        mealPrice: "5000"
    },
    {
        mealId: "m06",
        mealNameChi: "F: 日式廣島蠔炊飯",
        mealNameEng: "F: Japanese Oyster Rice",
        mealImage: "../image/food-image/lunch-6.jpg",
        mealPrice: "8000"
    },
    {
        mealId: "m07",
        mealNameChi: "G: 薑蔥燜蠔煲",
        mealNameEng: "G: Oyster Pot with Ginger and Scallions",
        mealImage: "../image/food-image/lunch-7.jpg",
        mealPrice: "7500"
    },
    {
        mealId: "m08",
        mealNameChi: "H: 特濃蕃茄薯仔藍花蟹烏冬",
        mealNameEng: "H: Flower Crab Udon with Tomato Soup",
        mealImage: "../image/food-image/lunch-8.jpg",
        mealPrice: "9000"
    },
    {
        mealId: "m09",
        mealNameChi: "I: 無水蕃茄肥牛玉子豆腐煲",
        mealNameEng: "I: Easy Tomato Tofu Pot with Beef",
        mealImage: "../image/food-image/lunch-9.jpg",
        mealPrice: "6500"
    },
    {
        mealId: "m10",
        mealNameChi: "J: 蒜香牛油栗米大蜆炊飯",
        mealNameEng: "J: Garlic Butter Clams Rice with Corn",
        mealImage: "../image/food-image/lunch-10.jpg",
        mealPrice: "7500"
    },
    {
        mealId: "m11",
        mealNameChi: "K: 豆乳濃湯鮮腐竹浸白菜",
        mealNameEng: "K: Soy Milk Veggies",
        mealImage: "../image/food-image/lunch-11.jpg",
        mealPrice: "5500"
    },
    {
        mealId: "m12",
        mealNameChi: "L: 大蝦濃湯喇沙",
        mealNameEng: "L: Prawn Laksa ",
        mealImage: "../image/food-image/lunch-12.jpg",
        mealPrice: "7000"
    },
    {
        mealId: "m13",
        mealNameChi: "M: 香濃蕃茄忌廉帶子米型意粉",
        mealNameEng: "M: Creamy Tomato Scallop Orzo Pasta",
        mealImage: "../image/food-image/lunch-13.jpg",
        mealPrice: "7000"
    },
    {
        mealId: "m14",
        mealNameChi: "N: 油鹽水蝴蝶蚌粉絲煲",
        mealNameEng: "N: Poached Butterfly Clams with Vermiclli",
        mealImage: "../image/food-image/lunch-14.jpg",
        mealPrice: "7500"
    }],
    dinner: [{
        mealId: "s01",
        mealNameChi: "A: 特濃蕃茄大蝦忌廉意粉",
        mealNameEng: "A: Creamy Tomato Shrimp Pasta",
        mealImage: "../image/food-image/food-1.jpg",
        mealPrice: "17800"
    }, 
    {
        mealId: "s02",
        mealNameChi: "B: 蒜香煙肉蘑菇忌廉意粉",
        mealNameEng: "B: Creamy Mushroom Bacon Spaghetti",
        mealImage: "../image/food-image/food-2.jpg",
        mealPrice: "9800"
    },
    {
        mealId: "s03",
        mealNameChi: "C: 一鍋到底椰汁焗葡國雞",
        mealNameEng: "C: Baked Portuguese Chicken",
        mealImage: "../image/food-image/food-3.jpg",
        mealPrice: "12800"
    },
    {
        mealId: "s04",
        mealNameChi: "D: 特濃鮮龍蝦汁意粉",
        mealNameEng: "D: Lobster Spaghetti",
        mealImage: "../image/food-image/food-4.jpg",
        mealPrice: "22800"
    },
    {
        mealId: "s05",
        mealNameChi: "E: 蒜香清酒牛油大蝦炒意粉",
        mealNameEng: "E: Japanese Fried Spaghetti with Parwns and Sake",
        mealImage: "../image/food-image/food-5.jpg",
        mealPrice: "14800"
    },
    {
        mealId: "s06",
        mealNameChi: "F: 白酒檸檬忌廉大蜆",
        mealNameEng: "F: Garlic Butter Clams with White Wine and Lemon",
        mealImage: "../image/food-image/food-6.jpg",
        mealPrice: "12800"
    },
    {
        mealId: "s07",
        mealNameChi: "G: 滑滑花雕大蜆蒸水蛋",
        mealNameEng: "G: Steamed Eggs with Clams",
        mealImage: "../image/food-image/food-7.jpg",
        mealPrice: "12800"
    },
    {
        mealId: "s08",
        mealNameChi: "H: 特濃蕃茄滑蛋牛肉刀削麵",
        mealNameEng: "H: Tomato Beef Noodles with Eggs",
        mealImage: "../image/food-image/food-8.jpg",
        mealPrice: "14800"
    },
    {
        mealId: "s09",
        mealNameChi: "I: 港式蕃茄牛肉燴意粉",
        mealNameEng: "I: HK Style Tomato Beef Spaghetti",
        mealImage: "../image/food-image/food-9.jpg",
        mealPrice: "13800"
    },
    {
        mealId: "s10",
        mealNameChi: "J: 西班牙蒜片魷魚",
        mealNameEng: "J: Garlic Squid with Padron Peppers",
        mealImage: "../image/food-image/food-10.jpg",
        mealPrice: "16800"
    },
    {
        mealId: "s11",
        mealNameChi: "K: 鮮甜象拔蚌粉絲煲",
        mealNameEng: "K: Mini Geoduck Clams with Vermicelli",
        mealImage: "../image/food-image/food-11.jpg",
        mealPrice: "18800"
    },
    {
        mealId: "s12",
        mealNameChi: "L: 麻油雞翼菜飯",
        mealNameEng: "L: Chicken Wing Vegetable Rice",
        mealImage: "../image/food-image/food-12.jpg",
        mealPrice: "11800"
    },
    {
        mealId: "s13",
        mealNameChi: "M: 香水檸檬蜜糖焗雞翼",
        mealNameEng: "M: Lemon Honey Roast Chicken Wings",
        mealImage: "../image/food-image/food-13.jpg",
        mealPrice: "12800"
    },
    {
        mealId: "s14",
        mealNameChi: "N: 周打蜆肉忌廉湯",
        mealNameEng: "N: Clam Chowder",
        mealImage: "../image/food-image/food-14.jpg",
        mealPrice: "8800"
    }]
}]