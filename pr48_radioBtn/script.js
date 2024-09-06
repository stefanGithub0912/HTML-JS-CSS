function show1(){
    let bodys = document.getElementById('body');
    bodys.style.backgroundColor = "lightblue"
}
function show2(){
    var buttonNew = document.createElement('button');
    buttonNew.innerHTML = '2';
    buttonNew.id = '2.2';
    document.body.appendChild(buttonNew);
    styleBtn = document.getElementById('2.2');
   
}
function show3(){
    var buttonNew = document.createElement('button');
    buttonNew.innerHTML = '2';
    buttonNew.id = '2.2';
    styleBtn = document.getElementById('2.2');
    //styling
    styleBtn.style.border = '3px solid black';
    styleBtn.style.borderRadius = '7px';
    styleBtn.style.width = '50px';
    styleBtn.style.height = '50px';
    styleBtn.style.fontSize = '30px';
    styleBtn.style.fontWeight = '600';
    styleBtn.style.backgroundColor = 'lightgreen';
}
function show4(){
    alert("1.Click radio button №5 | 2.Click the newly created button");
}
function show5(){
    styleBtn = document.getElementById('2.2');
    let bodys = document.getElementById('body');
    styleBtn.addEventListener('click' , () => {
        bodys.style.display = 'none';
        alert("Trolled 😂😂😂");
    });

}
function show6(){
    let check6 = document.getElementById('6.1');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = Math.ceil(Math.random() * 10);
    paragraph.id = 'paragraphStyle';
    document.body.appendChild(paragraph);
    document.getElementById('paragraphStyle').style.fontSize = '40px';
    document.getElementById('paragraphStyle').style.fontWeight = '700';
    check6.addEventListener('click' , () => {
        paragraph.remove();
    });

}
function show7(){
    window.close();
}