// Task 1  Accept 5 subject marks and find result was pass or not
let m1=98; 
let m2=98; 
let m3=98; 
let m4=98; 
let m5=8; 

if(m1>33 && m2>33 && m3>33 && m4>33 && m5>33){
    let result=(m1+m2+m3+m4+m5)/5;
    console.log(result+"%");
}
else {
    console.log("Sorry You are Failed");

}

//Task 2. reverse number (palindrom number or not check it)
let n=121,rev=0;
s=n;
do{
    rem=n%10
    rev=rev*10+rem
    n=n/10
}while(n);

if (s=rev) {
        console.log("yess this number is palindrom")
}
else{
    console.log("nooo palindrom number")
}


// Task 3.Find max of five numbers using Ternary Operator

let n1=10;
let n2=10;
let n3=10;
let n4=10;
let n5=10;

console.log((a1 > a2 && a1 > a3 && a1 > a4 && a1>a5) ? 
a1 : ((a2 > a3 && a2 > a4 && a2>a5) ? 
a2 : ((a3>a4 && a3>a5)? a3 : ( a4 > a5 ? a4 : a5))))

// Task 4: Prime Number

let cnt=0,no=11,m;
m=no/2;
for(let i=2;i<=m;i++){
    if(no%i==0){
        cnt++;
        }
}
if(cnt==1){
    console.log("not prime number")
}
else{
    console.log("yes this is prime")
}


// Unique Digits pattern

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(j)
    }
    // console.log("<br/>")
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(i)

    }
    // console.log("<br/>")
}
let counter=0;
for(let i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        counter++;
        console.log(counter);
    }

}

// Armstrong Number


// if a>b so print a only odd numbers and b>a so print even numbers

let a=10,b=5;
if(a>b){
    for(i=a;i>=b;i--){
        if(i%2===0){
            console.log(i);
        }
    }
}
else{
    for(i=b;i>=a;i--){
        if(i%2===0){
            console.log(i);
        }
    }
}

// Fahrenheit to Celsius  using switch case statement
console.log("1.Fahrenheit to Celsius")
console.log("2.Celsius to Fahrenheit")
let choice=2;
switch (choice) {
    case 1:
        let F=10;
        C = (F - 32) * 5/9;
        console.log("Celsius "+C)
        break;
    case 2:
        C=10;
        F=(C * 9/5) + 32.
        console.log("Fahrenheit "+F);
        break;

    default:
        console.log("invalid options")
        break;
}


// Password Authentication System
let pwd=123456789;
let cpwd=123456789;
if(pwd===cpwd){
    console.log("login successfully")
}
else{
    console.log(" *Please enter same password into conform pwd")
}