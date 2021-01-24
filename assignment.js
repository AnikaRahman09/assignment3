
//https://github.com/AnikaRahman09/assignment3



// kilometerToMeter
function kilometerToMeter(num){
    var meter = num * 1000;
    return meter;
}

var result = kilometerToMeter(9);
console.log(result);
// kilometerToMeter




// budgetCalculator
function budgetCalculator(watchAmount,phoneAmount,LaptopAmount){

    var totalCost = watchAmount * 50 + phoneAmount * 100 + LaptopAmount * 500 ;

    return totalCost;
}

var budget = budgetCalculator(2,1,0);
console.log(budget);
// budgetCalculator




 // hotelCost 
function hotelCost(days){
    var price = 0;

    if(days<=10){
         price = days * 100;
    }
    else if(days<=20){
        var firstSection = 10 * 100;
        var remainDays = days - 10;
        var secondSection = remainDays * 80;
        price = firstSection + secondSection;
    }
    else{
        var firstSection = 10 * 100;
        var secondSection = 10 * 80;
        var remainDays = days - 20;
        var thirdSection = remainDays * 50;
        price = firstSection + secondSection + thirdSection;
    }
    return price;
}
var totalCost = hotelCost(21);
console.log(totalCost);
// hotelCost
 



// megaFriend
function megaFriend(friends){

    var nameLength = 0;
    var name = "";
  
    for(var i = 0; i<friends.length; i++){
  
        var newNameLength = friends[i].length;
  
        if(newNameLength > nameLength){
            nameLength = newNameLength;
            name = friends[i];
        }
        
        else if(newNameLength == nameLength){
           break;
        }
    }
    return name;
  }
  
  console.log(megaFriend(["anikaaa","rizwan","mizan","fahim"]));
  // megaFriend

    