function insert(num){
    document.querySelector("#input").value+=num;
    return num;
}

function solve(){
    let x = document.querySelector("#input").value;
    let y=eval(x);
    document.querySelector("#input").value=y;
    return y;
}

function clearScreen(){
    document.querySelector("#input").value='';
}
