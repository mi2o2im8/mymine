// 캔버스
var canvas = document.getElementById("body_box");
var ctx = canvas.getContext("2d");

// 이미지 저장소
var images = {};

// 이미지 로더
function loadImage(name, src, callback) {
    var img = new Image();

    img.onload = function () {
        images[name] = img;

        if (callback) callback();
    };

    img.src = src;
}

// 모든 이미지 로딩 후 실행
var loadedCount = 0;
var totalImages = 5;

function checkLoaded() {
    loadedCount++;
    if (loadedCount === totalImages) {
        start();
    }
}

// 이미지 로딩
loadImage("bg1", "./image/background.png", checkLoaded);
loadImage("bg2", "./image/background2.png", checkLoaded);
loadImage("foot","./image/foot.png", checkLoaded);
loadImage("front1","./image/front1.png", checkLoaded);
loadImage("front2","./image/front2.png", checkLoaded);


// 시작 함수
function start() {
    draw();
}

// 그리기
function draw() {
    ctx.drawImage(images.bg1, 0, 0);
    ctx.drawImage(images.bg2, 0, 0);
    ctx.drawImage(images.foot, 0, 0);
    ctx.drawImage(images.front1, 0, 0);
    ctx.drawImage(images.front2, 0, 0);
}





// // 플레이어
// var player = {
//     x: 300,
//     y: 400,
//     size: 30,
//     speed: 5
// };

// // 키 입력
// var keys = {};

// // 별 공격
// var stars = [];