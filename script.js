/*
alert("Enter the value of I")
let I = prompt("Enter here:")
I = Number.parseInt(I)
alert("You entered value of type " + typeof(I))
let rit = confirm("Do you want to write the value to the page")
if(rit) {
    document.write(I)
}
else {
    document.write(" Please Allow Me To Write!!")
}


//DOM

//document.createElement
let div = document.createElememt("div");

// .textContent
div.textContent = 'Hello World';

console.log(div);
*/
//Practice Questions

//Problem-1:
let age = prompt("Age");
age = Number.parseInt(Age);
const CanDrive= (age) =>{
    return (age >= 18? true: false);
}

if (CanDrive(age)) {
    alert("Yes you can drive");
}
else {
    alert("You cannot drive");
}