var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloud Service<br>2108-1';
function getIdPW() {
    var id = prompt('ID입력', '');
    alert(id + '가 로그인함.');
    var passwordSystem = '12345';
    var password = prompt('pw 입력', '');
    if (password === passwordSystem) alert('정상 로그인!');
    else alert('비밀번호 오류');

}
document.querySelector('html').onclick = function () {
    getIdPW();

}
var myImg = document.querySelector('img');
myImg.onclick = function () {
    var src = myImg.getAttribute('src');
    if (src == 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/Mokwon.png');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}

