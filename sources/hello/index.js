
function message() {
    alert("hello world");
}

function caculatePlusNumber(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}