#Hello there.

#This is a doc for my-balance.html file.
---------------------
- TABLE COLORS
---------------------
Colors for table columns and rows you can find and change at _settings.color.scss:

    //My-balance.html colors for balance table
    - $color_balance_available: #f5f5f5;
    - $color_balance_pending: #fcf8e3;
    - $color_balance_declined: #dff0d8;
    - $color_balance_requested: #d9edf7;
    - $color_balance_proceeded: #f2dede;
    - $color_balance_lifetime:  #ffffff;

    //My-balance.html colors for history table
    - $color_history_date: #f5f5f5;
    - $color_history_refid: #fcf8e3;
    - $color_history_paytype: #dff0d8;
    - $color_history_store: #d9edf7;
    - $color_history_amount: #f2dede;
    - $color_history_cashback: #ffffff;
    - $color_history_status: orangered;

------------------------------------------------------------------------------------------


---------------------
- RESPONSIVENESS FOR HISTORY TABLE 
---------------------
In this table I used footable js plugin.

It can hide table columns on different screen size breakpoints.

The default breakpoints are:

    - x-small: 480
    - small": 768
	- medium: 992
	- large: 1200
	- x-large: 1400

Changing is easy: 

 - Put into a <table> tag following attribute:
 data-breakpoints='{ "x-small": 480, "small": 768, "medium": 992, "large": 1200, "x-large": 1400 }'
with your values.

Hiding a column:

- Into <th> tag of target column following attribute:
data-breakpoints="" with the values:
    - xs
    - sm
    - md
    - lg
    - xl

Please note that values can be combined. 
For more info read the plugin docs at http://fooplugins.github.io/FooTable/docs/getting-started.html 