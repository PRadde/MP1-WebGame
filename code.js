var clicks = 100250;
var multiplier = 1;
var lowShopCost = 101;
var plusShopOneCost = 525;
var plusAdderOne = 0;
var plusShopTwoCost = 10000;
var plusAdderTwo = 0;
var multiPlusCost = 3000;
var multiPlus = 0;

var endGame = 1;

//adds to the click counter 
function onClick() {
        clicks += endGame*((multiplier*(multiPlus+1))+plusAdderOne+plusAdderTwo);
        document.getElementById("clicks").innerHTML = clicks;
};

// this function 
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

//
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

//
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

// win game function
function winGame() {
    if (clicks >= 100000) {
        endGame = 0;
    }
}