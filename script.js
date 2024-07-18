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