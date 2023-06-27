
function message() {
    alert("hello world");
}

function callCanvas(){
    console.log("call canvas");

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
}

function fillImageToCanvas(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("img");
    ctx.drawImage(img, 10, 0);
}