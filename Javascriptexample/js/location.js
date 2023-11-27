window.onload = function () {
    document.getElementById("btn1").addEventListener("click", () => {
        if (confirm("정말 네이버로 이동하시겠습니까?"))
            location.href = "http://www.naver.com";
        // location.replace("https://www.naver.com/");
        open("http://www.google.com/",)
    });
    document.getElementById("btn2").addEventListener("click", () => {
        location.href = "window.html";
    });


    /** 5자리의 인증번호를 id값이 result 요소에게 출력하도록 명시. */

    let value = "";             // String Builder로 응용할것
    for (let i = 0; i < 5; ++i) {
        value += Math.floor(Math.random() * 10);
    }
    document.getElementById("result").innerHTML = value;
    document.getElementById("result").style.backgroundColor = "powderblue";

    document.getElementById("btn3").addEventListener("click", () => {
        location.reload();
    });
};