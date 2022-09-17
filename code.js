//initial click amount, set to zero
var clicks = 0;
//initial multiplier, set at 1
var multiplier = 1;
//shop for multiplier, initial cost of 101
var lowShopCost = 101;
//variables for first +5 additive shop
var plusShopOneCost = 525;
var plusAdderOne = 0;
//variables for second +50 additive shop
var plusShopTwoCost = 10000;
var plusAdderTwo = 0;
//variables for in multiplier additive shop, +1
var multiPlusCost = 3000;
var multiPlus = 0;

//end game variables, total additive (adder one and two),
//end game trigger/global multiplier (1 is normal game runing 0 locks out click function)
var plusAdderTotal = 0;
var endGame = 1;
var endCounter = 0;

//Timer variables
var seconds = 0;
var minutes = 0;
var hours = 0;
var endTimer = 1;

//timer function that should end when 
function startTimer() {
    setTimeout( function() {if (endTimer = 1) {
        seconds ++;
        if (seconds > 59) {
            seconds = 0;
            minutes ++;
            if (minutes > 59) {
                minutes = 0;
                hours ++;
            }
        }
    }
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    startTimer();
    }, 1000)
}

//adds to the click counter, modified by the various shop outputs
//multiplicitive or additive (either inside or outside the multiplicitive)
//there is also a endgame state which ends the click counter
function onClick() {
        clicks += endGame*((multiplier*(multiPlus+1))+plusAdderOne+plusAdderTwo);
        document.getElementById("clicks").innerHTML = clicks;
        endCounter ++;
        document.getElementById("endCounter").innerHTML = endCounter;
        if (clicks == 1){
            startTimer()
        }
};

//this function adds a plus 1 to the multiplier in the click function
function lowShop() {
    if (clicks >= lowShopCost) {
        clicks -= lowShopCost;
        multiplier ++;
        document.getElementById("multiplier").innerHTML = multiplier;
        document.getElementById("clicks").innerHTML = clicks;
        lowShopCost = (multiplier*multiplier*multiplier+100);
        document.getElementById("lowShopCost").innerHTML = lowShopCost;
    }
}

//this function adds 5 to each click outside the multiplier
function plusShopOne() {
    if (clicks >= plusShopOneCost) {
        clicks -= plusShopOneCost;
        plusAdderOne += 5;
        plusAdderTotal += 5;
        plusShopOneCost += (plusAdderOne*plusAdderOne+525);
        document.getElementById("plusShopOneCost").innerHTML = plusShopOneCost;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("plusAdderTotal").innerHTML = plusAdderTotal;
    }
}

//this function adds one click each click effected by the multiplier
function multiPlusFunc() {
    if (clicks >= multiPlusCost) {
        clicks -= multiPlusCost;
        multiPlus ++;
        multiPlusCost += (multiPlus*4+3000);
        document.getElementById("multiPlusCost").innerHTML = multiPlusCost;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("multiPlus").innerHTML = multiPlus;
    }
}

//this function adds 50! to each click outside the multiplier
function plusShopTwo() {
    if (clicks >= plusShopTwoCost) {
        clicks -= plusShopTwoCost;
        plusAdderTwo += 50;
        plusAdderTotal += 50;
        plusShopTwoCost = 10000+(plusAdderTwo*100);
        document.getElementById("plusShopTwoCost").innerHTML = plusShopTwoCost;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("plusAdderTotal").innerHTML = plusAdderTotal;
    }
}

//win game function, sets endGame variable to 0
//stopping the click function from adding to counter
function winGame() {
    if (clicks >= 100000) {
        endGame = 0;
    }
}