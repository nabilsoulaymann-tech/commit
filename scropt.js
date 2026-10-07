
input=document.getElementById('input');
output=document.getElementById('output');
function appendtodisplay(element){
input.value+=element
}
function clearDisplay(){
    input.value='';
    output.innerHTML=0;
}

function calculate(){
    try {
  output.innerHTML=eval(input.value)
} catch (error) {
 output.innerHTML='Syntax Error'
}
   

}
function deletedisplay(){
    input.value=input.value.substring(0,input.value.length-1)
}