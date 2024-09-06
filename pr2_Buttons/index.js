//! Look at html
function myFunction() {
   // Get the checkbox
  var checkBox = document.getElementById("myCheck");
   // Get the output text
   var text = document.getElementById("text");
 
   // If the checkbox is checked, display the output text
   if (checkBox.checked == true){
     text.style.display = "block";
   } else {
     text.style.display = "none";
   }
 }
function Reseter(){
  let s1 = document.getElementById("screen1").style.display;
  let s2 = document.getElementById("screen2").style.display;
  if(s1 == "none"){
    document.getElementById("screen1").style.display="block";
  }else{
    document.getElementById("screen1").style.display="none";
  }

  if(s2 == "none" || s2 == ""){
    document.getElementById("screen2").style.display="block";
  }else{
    document.getElementById("screen2").style.display="none";
  }
}

