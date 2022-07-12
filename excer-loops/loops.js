console.clear;
let a=0,c=0;
for (b=1;b<=15;b++){


    a=b%3;
    c=b%5;

    if(a==0){
        console.log('Fizz'+"  "+b)
    }
    
    if(c==0){
        console.log('Buzz'+"   "+b);
    }
    if((a==0)&&(c==0)){
        console.log('FizzBuzz'+"   "+b);
    }

    /*console.log( b/3+"   "+b);
    console.log(b%3);*/
}

//Switch / if

let color='red';
switch(color)
{
 case 'red':
    console.log('Red is a great color');
    break;
    case 'blue':
        console.log('blue Great Choice');
        break;
        case 'green':
            console.log('ok Greet it is');
            break;
            case 'yellow':
                console.log('not what i would have picked');
                break;
                default:
                    console.log('The aim of the game is to pick color');
                    break;

}

//Grade

let vgrade='D';
switch(vgrade)
{
 case 'A':
    console.log('Well done');
    break;
    case 'B':
        console.log('Good on you');
        break;
        case 'C':
            console.log('Good effort');
            break;
            case 'D':
                console.log('Try next time');
                break;
                default:
                    console.log('yikes');
                    break;

}
//Fruits


let fruits='strawberry';
switch(fruits)
{
 case 'apple':
    console.log('An apple a day keeps the doctor away');
    break;
    case 'banana':
        console.log('Bnanas are full of potassium');
        break;
        case 'orange':
            console.log('yep, oranges, Great choice');
            break;
            case 'strawberry':
                console.log('nothing better than a strawberry');
                break;
                default:
                    console.log('Pick a fruit');
                    break;

}

console.log('---------------------------');

let percentagecomplete=95;

if(percentagecomplete<30){
    console.log('Still a long way to go');
   
}
else if
    (percentagecomplete>=30 && percentagecomplete<=50){
        console.log('slowly getting there');
    }
    else if(percentagecomplete>51 && percentagecomplete<80){
        console.log('you can do it');
    }
else if(percentagecomplete>81 && percentagecomplete<=99){
    console.log('This is the last push');
}
else if(percentagecomplete=100){
    console.log('You are there , well done');
}

//while loop
console.log('*********************');
let ac=0;
while(ac<15){
    console.log('The value of ac'+"  "+ac);
    ac++;
}

let bc=1;
let dc=0;
while(bc<=20){
dc+=bc;
console.log('The value of dc'+"   "+"   "+ dc+"   "+ 'The vale of bc'+"   "+bc);

bc++;

}

//do while loop

console.log('------------------------');
let dv=0;

do {
dv++
console.log('The vlaue of dv'+"   "+dv)
}while(dv<20-1)

//For loops

console.log('///////////////////////');

let vsum=0;
for(let a=0;a<=20;a++){
    vsum+=a;
}
console.log('The total is '+"  "+vsum);

//bottles on the table

console.log('*********************');

for (let h=0;h<=15;h++){
    if(h==5){break;}
    console.log('The bottles on the tables are'+"   "+h);
}

//even odd

console.log('**********************');

for(a=1;a<=20;a++){
    let b=a%2;
    if(b==0){
        console.log(a+"    "+'is even')
    }
    else
    console.log(a+"    "+' is odd');
}

//table of 2
for(a=1;a<=10;a++){

    let b=2*a;

    console.log('2'+" *  "+a+"  = "+ "  "+b)
}

//Fizz Buzz

for (a=1;a<=100;a++){
    let b=a%3;
    let c=a%5;
    if (b==0){
        console.log(a+"   "+'Divisible by 3 Fizz');
    }
    else if(c==0) {
        console.log(a+"   "+'Divisible by 5 Buzz');

    }

     if(b==0 && c==0){
        console.log('FizzBuzz'+"   "+a);
    }
}

//multiple of 3 and 5


    let sum1=0;
    let sum2=0;

for(a=1;a<=10;a++){
    let b=a%3;
    let c=a%5;
    
    
    if(b==0){
        sum1+=a;
    }
    
    if(c==0){
        sum2+=a;
    }
    
}
console.log('sum of 3'+"   "+sum1);
console.log('sum of 5'+"   "+sum2);
//.7

let arr=[100,200,300,400,500,600,700,800,900,1000];

console.log(arr.toString());

//**************
console.log('*********************');

let d='';
for(a=1;a<=10;a++){


   // console.log(a*2);
    let c=a*2;
    
    if(a==5){
        break;
    }else
     d=d+" "+ c;

    console.log(c.toString());
}
console.log(d);