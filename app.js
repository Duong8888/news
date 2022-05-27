
function auto() {
    var autoPlay = Math.round(Math.random() * 3);
    if (autoPlay == 1) {
        document.getElementById('autoplay').src = "src/Xo-So-Mien-Bac-Nhac-Chuong.mp3";
    } else if (autoPlay == 2) {
        document.getElementById('autoplay').src = "src/phu-le-nhac-phim-cham-mat-giang-ho-official-music-video.mp3";
    } else {
        document.getElementById('autoplay').src = "src/ban-va-toi-khong-giong-nhau-con-duong-toi-buoc-di-st-hoang-van-sang.mp3";
    }
    document.getElementById('autoplay').play();
}
var h1 = document.getElementById('todayNumber');
var result = 0;
function randomNumber() {
    result = Math.round(Math.random() * 100);
    h1.innerText = result;
}
let count = 0
function animation() {
    if (count % 2 == 0) {
        h1.style.transform = "scale(1.5)";
    } else {
        h1.style.transform = "scale(0.5)";
    }
    var color = Math.round(Math.random() * 5);
    if(color==1){
        h1.style.color = "#00FF00";
    } else if(color==2){
        h1.style.color = "#A52A2A";
    } else if(color==3){
        h1.style.color = "#EE1289";
    } else if(color==4){
        h1.style.color = "#FF3333"
    } else if(color==5){
        h1.style.color = "#BB0000"
    } else {
    }
    count++;
} setInterval(animation, 500);

