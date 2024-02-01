async function prepareHeader() {
    console.log('prepareHeader is called');
    let headerElem = document.querySelector(".header");

    if (headerElem) {
        headerElem.innerHTML= `
            <div class="logo-section">
                <div class="logo-picture">
                    <img src="../image/other-image/logo-fixed.jpg" alt="order" width="90vw" background-color="antiquewhite">
                </div>  
                <div class="logo-name">
                    <div class="logo-name1">意大利</div>
                    <div class="logo-name2">    餐廳</div>
                </div>
            </div>
            <div class="logo-mid-section"></div>
            <div class="right-header">
                <div class="header-voucher">
                    <!-- 訂單號碼: 0052 -->
                </div>
                <div class="order-tap-background">
                <div class="order-tap">
                    網上落單
                </div>
                </div>
            </div> 
        `;
        document.querySelector(".order-tap").addEventListener("click", (event) => {
            location.href = "order-menu.html";
        });
    }
}
prepareHeader();
