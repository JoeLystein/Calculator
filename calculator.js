function cal(val){
    let a = document.getElementById("space").value+= val; 
}
function result(){
    let x = document.getElementById("space").value;
    let y = eval(x); 
    document.getElementById("space").value = y; 
}
function clc(){
    let c= document.getElementById("space").value='';
}
function def(){
    document.getElementById("space").value=0; 
}

function del(){
    document.getElementById("space").value-=document.getElementById("space").value; 
}

function sqrt(){
    let x = document.getElementById("space").value; 
    x =Math.sqrt(x); 
    document.getElementById("space").value = x;  
}