async function prepareFooter() {
    let fooderElem = document.querySelector('#footer');

    if (fooderElem) {
        fooderElem.innerHTML = `
            <div class=".col-12 .col-sm-12 .col-md-12 .col-lg-12 .col-xl-12">
                <div class="foot-nav-section">
                    <div class="bottom-left">
                        <div class="bottom-left-top">
                            <span class="footer-home-link">主要</span>
                            <span>|</span>
                            <span class="footer-order-menu-link">菜單</span>
                            <span>|</span>
                            <span class="footer-about-link">關於我們</span>
                            <span>|</span> 
                            <span class="footer-contact-link">聯絡我們</span>
                            <span>|</span>
                            <span class="footer-policy-link">政策及條款</span>
                        </div>
                        <div class="bottom-left-bottom">
                            <p>copyright 2023 by Italian Restaurant Limited. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="bottom-right">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                </div>
            </div>
        `;
        document.querySelector(".footer-home-link").addEventListener("click", (event) => {
            location.href = "index.html";
        });
        document.querySelector(".footer-order-menu-link").addEventListener("click", (event) => {
            location.href = "order-menu.html";
        });
        document.querySelector(".footer-about-link").addEventListener("click", (event) => {
            location.href = "about.html";
        });
        document.querySelector(".footer-contact-link").addEventListener("click", (event) => {
            location.href = "contact.html";
        });
        document.querySelector(".footer-policy-link").addEventListener("click", (event) => {
            location.href = "policy.html";
        });
    }
}
prepareFooter();