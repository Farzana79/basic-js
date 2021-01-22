// https://github.com/Farzana79/basic-js

// 1. kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
var meter = kilometerToMeter(10);
console.log(meter);  

 //2. hotelCost

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

// 4. megaFriend

String = ['farzana', 'shimul','urmi','samia','moushumi'];

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
console.log(megaFriend(String)); 

