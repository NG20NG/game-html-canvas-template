//
//
//
//
//
const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
//
//
//
//
//
//
//
//
//
//
const gameLoop = () => {
  requestAnimationFrame(gameLoop);
};
requestAnimationFrame(gameLoop);
