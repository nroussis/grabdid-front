#Hello there.

#This is a doc for all-stores.html file.

#Recommended block is powered by Owl Carousel plugin, it fully responsive and touch-friendly.
---------------
- PAGINATION
---------------
JS- pagination and sorting script is js/all-items-sort.js

Please note that JS-pagination will work correctly only if coupon element has class "stores__item--paginated".

Value of visible items can be changed by changing "elsOnPage" variable (3 by default)

---------------
- CATEGORIES
---------------
To make current category expanded, please add class "stores-sidebar__subcategory--current" to the subcategory user is browsing now and it should expand the category tree automatically from bottom to top

---------------
- SORTING
---------------
Please notice that sorting works on classes of element so there is little help:

To make sure that coupon is sorted properly please be sure that it has literation class. Examples:

"liter_A"                      "liter_0"        
"liter_B"      and numeric     "liter_5"
"liter_C"                      "liter_9"