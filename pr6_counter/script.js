window.onload=function(){
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");
    const resetBtn = document.getElementById("reset");
    const counterValue = document.getElementById("number");
    let count = 0 ;
    /* PLUS 1 */
    plusBtn.addEventListener('click', function(){
        count++;
        counterValue.innerHTML = count;
    })
    /* MINUS 1 */
    minusBtn.addEventListener('click', function(){
        count--;
        counterValue.innerHTML = count;
    })
    /*  RESET */
    resetBtn.addEventListener('click', reset);
    function reset(){
        count = 0;
        counterValue.innerHTML = count;
}
}
