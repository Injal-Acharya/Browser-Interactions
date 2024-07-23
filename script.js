//Chapter-6: JavaScript in the browser

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

//Practice Questions

//Problem-1: Use prompt function to take input of age as a value from the user and use alert to tell him if he can drive.

const CanDrive= (age) =>{
    return (age >= 18? true: false);
}

let runAgain = true;

while(runAgain) {
let age = prompt("Enter your age");
age = Number.parseInt(age);

if (age<0) {
    break;
}

if (CanDrive(age)) {
    alert("Yes you can drive");
}
else {
    alert("You cannot drive");
}

//Problem-2: In Problem-1 use confirm to ask user if s/he wants to see the prompt again.

runAgain = confirm("Do you want to see the prompt again?");
}

//Probelm-3: In same problem, modify to display error if the age is negative.
alert("Error!!")
console.error("Enter a valid age!!");

//Problem-4: Redirect to google.com if the entered age is greater than 4.

let Age = prompt("Enter your age");
Age = Number.parseInt(Age);

if (Age > 4) {
    location.href = "https://google.com";
}

//Problem-5: Change the background color according to user input.

let color = prompt("Enter the background color");
document.body.style.background = color;