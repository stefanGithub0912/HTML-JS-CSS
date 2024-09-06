function calculate(){
    firstNum = document.getElementById("min").value;
    secondNum = document.getElementById("max").value;
    a = secondNum - firstNum;
    const RandomNum = document.getElementById("rndm");
    console.log(Math.ceil(Math.random() * a));
}
