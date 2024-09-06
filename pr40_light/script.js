function color(){
    let point = document.getElementById("score").value;
    let bodyMain = document.getElementById("body").value;
    if(point == 10){
        bodyMain.style = "black"; 
    }
    if(point == 9){
        bodyMain.style.color = "purple"; 
    }
    if(point == 8){
        bodyMain.style.color = "blue"; 
    }
    if(point == 7){
        bodyMain.style.color = "lightblue"; 
    }
    if(point == 6){
        bodyMain.style.color = "green"; 
    }
    if(point == 5){
        bodyMain.style.color = "lightgreen"; 
    }
    if(point == 4){
        bodyMain.style.color = "red"; 
    }
    if(point == 3){
        bodyMain.style.color = "orange"; 
    }
    if(point == 2){
        bodyMain.style.color = "yellow"; 
    }
    if(point == 1){
        bodyMain.style.color = "bisque"; 
    }
    if(point == 0){
        bodyMain.style.color = "white"; 
    }
}