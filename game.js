const canvas = document.getElementById("canvas");
canvas.style.imageRendering = "pixelated"
const ctx = canvas.getContext("2d");

let duckImage = new Image();
duckImage.src = "duck.png";

class GameObject {
  constructor(x = 0, y = 0) {
    this.image = null;
    this.pos = {
      x: x,
      y: y
    };

    this.speed = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (this.pos.y > canvas.height - 34) {
      this.pos.y = canvas.height - 34;
    }

    this.speed.y += 1;
  }

  jump() {
    if (this.pos.y === canvas.height - 34) {
      this.speed.y = -20;
    }
  }
}

let duck = new GameObject(200, 0);
duck.image = duckImage;

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    duck.jump();
  }
});

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  duck.move()
  duck.draw()
}, 30);
