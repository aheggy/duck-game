const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let duckImage = new Image();
duckImage.src = "duck.png";

setTimeout(() => {
    console.log(ctx)
    console.log(canvas)
  ctx.drawImage(duckImage, 0, 0);
}, 1000);
