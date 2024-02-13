function sum(){
    let num1=Number(document.getElementById("number1").value)
    let num2=Number(document.getElementById("number2").value)
    let s=document.getElementById("#sum")
    let sumof= num1+num2
    document.getElementById("result").innerText="Sum of the numbers: " + sumof
}

function colorchange(button){
    button.style.backgroundColor = button.style.backgroundColor == "brown" ? "burlywood":"brown";
}
function greeting(){
    let d = new Date()
    let time= d.getTime()
    if (time < 12){
        alert("Good morning")
    }
    else if(time < 18){
        alert("Good afternoon")
    }
    else{
        alert("Good night")
    }
}