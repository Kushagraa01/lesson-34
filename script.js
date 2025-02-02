function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getformattednumber(num);
    }
}
function getformattednumber(num){
    if(num=="-"){
        return " ";
    }
    var n= Number(num);
    var value= n.toLocaleString("eng");
    return value;
}