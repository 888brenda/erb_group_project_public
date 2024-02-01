async function prepareNav() {
    console.log('prepareNav is called');
    let navElem = document.querySelector('#navbar-menu');

    if(navElem) {
        navElem.innerHTML = `
        <div class=".col-12 .col-sm-12 .col-md-12 .col-lg-12 .col-xl-12">
                <div class="navbar-section">
                    <span class="nth-link"></span>
                    <span class="nth-link"></span>
                    <span class="home-link">主頁</span>
                    <span>|</span>
                    <span class="order-menu-link">菜單</span>
                    <span>|</span>
                    <span class="about-link">關於我們</span>
                    <span>|</span>
                    <span class="service-link">服務</span>
                    <span>|</span>
                    <span class="gallery-link">圖冊</span>
                    <span>|</span>
                    <span class="contact-link">聯絡我們</span>
                    <span class="nth-link"></span>
                    <span class="nth-link"></span>
                </div>
            </div>
        `;
        document.querySelector(".home-link").addEventListener("click", (event) => {
            location.href = "index.html";
        });
        document.querySelector(".order-menu-link").addEventListener("click", (event) => {
            location.href = "order-menu.html";
        });
        document.querySelector(".about-link").addEventListener("click", (event) => {
            location.href = "about.html";
        });
        document.querySelector(".service-link").addEventListener("click", (event) => {
            location.href = "service.html";
        });
        document.querySelector(".gallery-link").addEventListener("click", (event) => {
            location.href = "gallery.html";
        });
        document.querySelector(".contact-link").addEventListener("click", (event) => {
            location.href = "contact.html";
        });
    }
}
prepareNav();