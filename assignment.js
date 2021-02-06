

// Problemt-1 = convert Kilometer to Meter
function kilometerToMeter(inputKilometer) {
    
    if(inputKilometer < 0){
        
        console.log("Please Provide the right Kilometer")
    }

    else{
        var findMeter = inputKilometer * 1000;
    }
    return findMeter;

}

// Problem-2 = Find Budget to purchase 3 product

function budgetCalculator(watch, mobile, laptop) {
    
    if(watch < 0 || mobile < 0 || laptop < 0){
        console.log("Please provide the right quantity of product")
    }

    else{
        var purchaseWatch = watch * 50;
        var purchaseMobile = mobile * 100;
        var purchaseLaptop = laptop * 500;
    
        var purchaseAllProduct = purchaseWatch + purchaseMobile + purchaseLaptop;

    }
    
    return purchaseAllProduct;
}

//Problem -3 = Hotel Cost 

function hotelCost(inputDay) {

    var totalHotelCost = 0;

    if (inputDay <= 10 && inputDay >=1 ) {
        totalHotelCost = inputDay * 100;
    }

    else if (inputDay <= 20 && inputDay >= 1) {
        var first10DayHotelCost = 10 * 100;
        var remainingDayHotelCost = inputDay - 10;
        var second10DayHotelCost = remainingDayHotelCost * 80;
        totalHotelCost = first10DayHotelCost + second10DayHotelCost;

    }

    else if (inputDay<1 ){
        console.log("Please provide Right Day Information")
    }

    else {

        var first10DayHotelCost = 10 * 100;
        var second10DayHotelCost = 10 * 80;
        var remainingDayHotelCost = inputDay - 20;
        var after20dayHotelCost = remainingDayHotelCost * 50;
        var totalHotelCost = first10DayHotelCost + second10DayHotelCost + after20dayHotelCost;
    }

    return totalHotelCost;
}


// Problem-4 : Find out the large character Name: 

function megaFriend(friendList) {
    var longestfriendName = "";

    friendList.forEach(function (friendName) {
        if (friendName.length > longestfriendName.length) {
            longestfriendName = friendName;
        }
    });

    return longestfriendName;
}