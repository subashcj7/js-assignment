//1)Write a function which checks whether the number is even or odd

let val=function(n=23){
if (val % 2==0){
    console.log(`The number entered is ${val} and number is even `);
}
else{
    console.log(`The number entered is ${val} and number is odd `);

}
}
val()


//2)Write a program which will take OS name and version from the user seperated by a space.Then log th OS name and version on the console

let strng={OSname:'Android', version:9}
console.log(`The OS name is ${strng.OSname} and version is ${strng.version}`);



//3)program to take marks as input from the user and grade based on the mark

let marks=function(){
    if (marks >= 70 ){
        console.log(`Marks are ${marks} and grade is A `)
    }
    else if (marks >= 50 ){
        console.log(`Marks are ${marks} and grade is B `)
    }
    else if (marks >= 40 ){
        console.log(`Marks are ${marks} and grade is C `)
    }
    else if (marks >= 30 ){
        console.log(`Marks are ${marks} and grade is D `)
    }
    else{
        console.log(`Marks are ${marks} and grade is E `)
    }

}
marks(50)