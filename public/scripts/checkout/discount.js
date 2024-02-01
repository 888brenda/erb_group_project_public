document.addEventListener('DOMContentLoaded', () => {
  const startGameElem = document.querySelector('.js-start-game-button');

  const drawImgElem = document.querySelector('.draw-img');
  const winImgElem = document.querySelector('.win-img');
  const wheelImgElem = document.querySelector('.wheel-img');
  const welcomeImgElem = document.querySelector('.welcome-img');

  let gameArr = [];
  startGameElem.addEventListener('click', () => {
    playGame();
  });

  let discount;
  async function playGame() {

          const gameResult = Math.floor((Math.random() *100) + 1);
          drawImgElem.style.display = "none";
          wheelImgElem.style.display = "block";
          startGameElem.style.display = "none";
          console.log(gameResult);
          return new Promise(resolve => {
              setTimeout(() => {
                if(gameResult < 0) {
                    return;
                }
                if (gameResult >=1 && gameResult <=50) {
                    winImgElem.style.display = "block";
                    wheelImgElem.style.display = "none";
                    gameArr.push({
                      discount: 0.1
                    });
                } else if (gameResult >50) {
                    welcomeImgElem.style.display = "block";
                    wheelImgElem.style.display = "none";
                    gameArr.push({
                      discount: 0
                    });
                } 
                resolve();
                console.log(gameArr); 
                saveToDiscountStorage();
            },3000);
          });    
      } 
      function saveToDiscountStorage() {
        localStorage.setItem('gameArr', JSON.stringify(gameArr));
    }
  });

export let gameArrResult = JSON.parse(localStorage.getItem('gameArr'));

if(!gameArrResult) {
  gameArrResult = [{
          discount: 0
      }];
  }

