/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votionAge=19;

if(votionAge >=18 ){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let age = 11;

if(age < 10){
    age="boys"
}else{
    age="teenagers"
}
console.log(age);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let number="1999";
let convertnumber=parseInt(number);
console.log(convertnumber);



//Task d: Write a function to multiply a*b 
function multiply (a,b){
    return a * b;
}

console.log(multiply(10,4));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let age2 = 25;
let dogy=7;
function dogyears(age2,dogy){

    return age2 * dogy;
}

console.log(dogyears(age2,dogy));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
const weight= 15;
const doga=12;


function dgfeederw(weight){
    if (weight <= 5){
        let raw= weight * 0.05;
        return Math.ceil(raw);
    }else if(weight >= 6 && weight <= 10){
            raw= weight * 0.04;
            return raw;
        
    }else if(weight >= 11 && weight < 15){
        raw= weight * 0.03;
        return raw;
    }else if(weight >= 15){
        raw= weight * 0.02;
        return raw;
}
}

function dgfeedery(weight,doga){
    if(doga >= 2 && doga <= 4){
        let rfood= weight * 0.1;
        return rfood; 
    }else if(doga >= 4 && doga < 7 ){
        rfood= weight * 0.05;
        return rfood; 

    }else if(doga >= 7 && doga < 12){
        rfood= weight * 0.04;
        return rfood; 

    }else if(doga == 12){
        rfood =weight * 0.03;
        return rfood;
    }


}
//console.log(dgfeederw(weight));
console.log(dgfeedery(weight,doga));






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



const choice="paper";
const rock="rock";
const paper="paper";
const sissors="sissors";
let pcchoice=Math.ceil(Math.random() * 3);

  function result(){
    if(pcchoice == 1){
            return rock;
        }
        else if(pcchoice == 2){
            return paper;
        }
        else if(pcchoice == 3){
            return sissors;
        }
    };


     function pick (result,choice){
        if( result==rock && choice==paper){
            return "You Won";
        }
        else if(result==paper && choice==rock){
            return "You Lose";
        }
        else if(result==rock && choice==sissors){
            return "You Lose";
        }
        else if(result==paper && choice==sissors){
            return "You Won";
        }
        else if(result==sissors && choice==paper){
            return "You Lose";
        }
        else if(result==paper && choice==paper){
            return "TIE";
        }
        else if(result==rock && choice==rock){
            return "TIE";
        }
        else if(result==sissors && choice==sissors){
            return "TIE";
        }
    };
    console.log(result());
    console.log(pick());













  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





