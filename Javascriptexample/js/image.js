let num = 0;
window.onload = function () {
    let image = document.querySelectorAll('.imageChoice');
    image.forEach((target) => target.addEventListener("click", function () {
        // console.log(target);
        let image = document.getElementById("target");
        image.src = this.src;
    }));


    // 1초 간격으로 이미지가 변경되도록 코딩
    setInterval(() => {
        num = (num % 3) + 1;
        document.getElementById("imgView").src = "../images/" + num + ".jpg";
    }, 1000);
};