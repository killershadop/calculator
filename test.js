let display =document.getElementById("display");
function addvalue(value){
     display.value= display.value+value
}
function calculate(){
   display.value= eval(display.value)
}
function cleardisp(){
     display.value = "";
}