export const soupOptions = [{
    soupId: "w01",
    soupNameChi: "羅宋",
    soupNameEng: "Tomato Soup",
    soupPrice: 0
}, {
    soupId: "w02",
    soupNameChi: "忌廉",
    soupNameEng: "Cream Soup",
    soupPrice: 0
}];

export function getSoupOption(soupOptionId) {
    let soupOption;

    soupOptions.forEach((option) => {
      if (option.soupId === soupOptionId) {
        soupOption = option;
      }
    });
    return soupOption;
}