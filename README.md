# erb_personal_project

order-menu.html -> istidiningtable.com

about.html -> 
    https://procook.com.au/what-are-the-secrets-to-running-a-successful-restaurant/

service.html -> 
    https://www.made-in.be/mechelen/update-waar-kan-je-in-onze-regio-take-away-bestellen/
    https://mpackcy.com/take-away/
    https://www.vectorstock.com/royalty-free-vector/take-away-sign-vector-25520112

    https://www.iappwebsolutions.com/mobile-apps-for-takeaways
    https://www.pinterest.com/pin/847310117377370368/

gallery.html ->
    https://www.mahagunindia.com/project/mahagun-mmillennia/
    https://www.pinterest.com/pin/189362359310753881/
    https://www.pinterest.com/pin/450289662745636704/

    https://www.healthytravelblog.com/2014/03/13/tips-for-eating-healthy-in-italy/
    https://theviewfromgreatisland.com/burrata-platter/
    https://insanelygoodrecipes.com/antipasto-recipes/

    https://traditional-italian-peranakan-food.blogspot.com/2015/03/what-makes-good-italian-food-and-great.html
    https://theviewfromgreatisland.com/burrata-platter/
    https://insanelygoodrecipes.com/antipasto-recipes/
    http://www.10interestingfacts.com/10-interesting-facts-about-italian-food.html

site map
========
landing page
(P1.-index.html) => [header]
(index.css)
(js: header.js/nav.js/footer.js)
                                   -> order                      -> review each dishes
                                      (P2.-order-menu.html)         (P8-21.-order-list-detail.html)
                                      (order-menu.css)              (order-list-details.css)
                                      (data: meals.js)              (scripts: order-list-detail.js)
                                      (scripts: order-menu.js)
                                      (scripts-utils: money.js)
                                      (scripts-utils: time.js)

                                                                 -> ordered                                          -> direct to pay               -> pay bill                                               -> paid
                                                                    (P22.-order-list.html)                              (P23.-order-payment.html)      (P25.-order-bill.html)                                    (P26.-order-success.html)
                                                                    (order-list.css)                                    (order-payment.css)            (order-bill.css)                                          (order-success.css)
                                                                    (data: cart.js / drinkOption.js / soupOption.js)                                   (scripts: order-bill.js > 
                                                                    (scripts: order-list.js >                                                               scripts-checkout: order-payment-detail-summary.js;
                                                                         scripts-checkout: order-list-summary.js                                            scripts-checkout: order-payment-total-summary.js)

                                                                                                                      -> gain discount               -> same as above                                          -> same as above
                                                                                                                          (P24.-discount.html)
                                                                                                                          (order-discount.css)
                                                                                                                          (data: discount.js)
                                   -> about us
                                      (P3.-about.html)
                                      (about.css)
                                   -> service
                                      (P4.-service.html)
                                      (service.css)
                                   -> gallery
                                      (P5.-gallery.html)
                                      (gallery.css)
                                   -> contact us
                                      (P6.-contact.html)
                                      (contact.css)
                                   -> [footer]
                                   -> policy and condition
                                      (P7.-policy.html)
                                      (policy.css)