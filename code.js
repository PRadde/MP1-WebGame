var clicks = 100250;
var multiplier = 1;
var lowShopCost = 101;
var plusShopOneCost = 525;
var plusAdderOne = 0;
var plusShopTwoCost = 10000;
var plusAdderTwo = 0;
var multiPlusCost = 3000;
var multiPlus = 0;

var plusAdderTot = plusAdderOne+plusAdderTwo;
var endGame = 1;

//adds to the click counter, modified by the various shop outputs
//multiplicitive or additive (either inside or outside the multiplicitive)
//there is also a endgame state which ends the click counter
function onClick() {
        clicks += endGame*((multiplier*(multiPlus+1))+plusAdderOne+plusAdderTwo);
        document.getElementById("clicks").innerHTML = clicks;
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
        plusShopOneCost += (plusAdderOne*plusAdderOne+525);
        document.getElementById("plusShopOneCost").innerHTML = plusShopOneCost;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("plusAdderOne").innerHTML = plusAdderOne;
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
        plusShopTwoCost = 10000+(plusAdderTwo*100);
        document.getElementById("plusShopTwoCost").innerHTML = plusShopTwoCost;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("plusAdderTwo").innerHTML = plusAdderTwo;
    }
}

//win game function, sets winGame variable to 0
//stopping the click function from adding to counter
function winGame() {
    if (clicks >= 100000) {
        endGame = 0;
    }
}