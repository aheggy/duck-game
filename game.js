const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let duckImage = new Image();
duckImage.src = "duck.png";

class GameObject {
  constructor(x = 0, y = 0) {
    this.image = null;
    this.pos = {
      x: x,
      y: y,
    };
  }
}

let duck = new GameObject();
duck.image = duckImage;

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(duck.image, duck.pos.x, duck.pos.y);
    duck.pos.x += 2;
    duck.pos.y += 1;
}, 30);
