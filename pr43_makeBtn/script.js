function formBtn(){
    let rectangleBtn = document.getElementById('rectangle');
    let circle = document.getElementById('circle');
    var mainBtn = document.getElementById('btn');
    circle.addEventListener('click' , () => {
        rectangleBtn.style.display = 'none';
        mainBtn.style.borderRadius = "100%";
    });
    rectangleBtn.addEventListener('click' , () => {
        circle.style.display = 'none';
        mainBtn.style.height = mainBtn.style.width;
    });
}   
function nameTxt(){
    let name = document.getElementById("name").value;
    document.getElementById('btn').innerHTML = name;
}
function widthTxt(){
    let widthArea = document.getElementById('width').value;
    let mainBtn = document.getElementById('btn');
    mainBtn.style.width = widthArea+"px";
}
function heightTxt(){
    let heightArea = document.getElementById('height').value;
    let mainBtn = document.getElementById('btn');
    mainBtn.style.height = heightArea+"px";
}
function alertTxt(){
    let alertArea = document.getElementById('functuonality').value;
    let mainBtn = document.getElementById('btn');
    alert(alertArea);
}
function borderCheck(){
    let borderBtn = document.getElementById("border").value;
    let mainBtn = document.getElementById('btn');
    mainBtn.style.border = '3px solid black';
}
function colorChange(){
    let colorArea = document.getElementById("color").value;
    let mainBtn = document.getElementById('btn');
    mainBtn.style.backgroundColor = colorArea;
}