
var x = 0
var calthis = 0
function number(val){
    document.getElementById('text').value += val;
}


function equal(){
    x = document.getElementById('text').value
    calthis = x.replace(/x/g,"*")
    var y = eval(calthis);
    if(y == 123456){
        window.location.href = "images.html";
    }
    
    
    document.getElementById('text').value = y;
    
    
}

function disapear(){
    document.getElementById('text').value = "";
}