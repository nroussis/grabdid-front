#Hello there.

#This is a doc for all-coupons.html file.

#Recommended block is powered by Owl Carousel plugin, it fully responsive and touch-friendly.

---------------
- PAGINATION
---------------
JS- pagination and sorting script is js/all-coupons-sort.js

Please note that JS-pagination will work correctly only if coupon element has class "coupon--paginated".

Value of visible items can be changed by changing "elsOnPage" variable (2 by default).

---------------
- SORTING
---------------
Please notice that sorting works on classes of element so there is little help:

To make sure that coupon is sorted properly please be sure that it has literation class. Examples:

"coupon-A"                      "coupon-0"        
"coupon-B"      and numeric     "coupon-5"
"coupon-C"                      "coupon-9"

---------------

---------------
- COUPON STRUCTURE
---------------

Every coupon has: 
   - attribute data-coupon-object. This is the url to online store where it will be used.
   - A link with the "Get Code >" / "Get Sale >" / "Get Coupon >" text which MUST forward us to exactly the page it placed in. For example:
    Coupon placed at somesite.com/coupons so when we click on some "Get Coupon >" link, the window with code will be somesite.com/coupons#1 and if user will click at the anothe "Get Coupon >" link it must forward to somesite.com/coupons WITHOUT a hash. That's because a core logic.

---------------

---------------
- COUPON MODAL GENERAL LOGIC
---------------
On the load page looking at url of the page and checks if there is a hash(#). If it is here, it tries to make wisible the ID with symbols after hash. For example page has URL: "site.com/coupons#1". JS takes the part after hash (1) and the looging for element with id "1" and tries to show it.

---------------

