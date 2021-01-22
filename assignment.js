// 1. kilometerToMeter

/**function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
var meter = kilometerToMeter(10);
console.log(meter); 

// 3. hotelCost

function hotelCost(days){
    var cost = 0;
    if(days <=10){
        cost = days * 100;
    } else if(days <=20){
        var firsttendays = 10 * 100;
        var remaining = days - 10;
        var secondtendays = remaining * 80;
        cost = firsttendays + secondtendays;
    }
    else{
        var firsttendays = 10 * 100;
        var secondtendays = 10 * 80;
        var remaining = days - 20;
        var thirdextradays = remaining * 50;
        cost = firsttendays + secondtendays + thirdextradays;
    }
    return cost;
    
}
var totalcost = hotelCost(60);
console.log(totalcost); 

// 3. megaFriends

String = ['farzana', 'shimul','urmi','samia','nishita barua'];

function megaFriend(arr){
    let result = '';
    for(i = 0; i < arr.length; i++){
        let recentitem = arr[i];
        if(recentitem.length > arr.length){
            result = arr[i];
        }
    }
    return result;
}
console.log(megaFriend(String)); */

// 4. 

function budgetCalculator(watch, phone, laptop){
    cost = 0;
    var watch =  50;

    var phone =  100;
    var laptop = 500;

    result = (watch*50 + phone*100 + laptop*500);
    
    return cost;
    
}
var cost = budgetCalculator(2,2,2);
console.log(budgetCalculator(result));