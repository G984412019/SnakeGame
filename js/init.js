document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let apple2X = apple2Y = 3;
let appleX = appleY = 15;
let bombX = bombY = 5;
let score = 0;
