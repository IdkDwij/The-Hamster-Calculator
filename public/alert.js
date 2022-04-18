var x = ""
function enter(){
    x = document.getElementById('textarea').value
    if (x == "TEST"){
        window.location.href = "games.html";
    }
    else{
        alert(x)
    }
}
function c(){
    document.getElementById('textarea').value = ""
}
