window.onload = function () {
    const div = document.getElementById("area");

    // Date 객체의 생성
    let mydate = new Date();

    // 년,월,일.시간,분,초를 리턴받기
    let yy = mydate.getFullYear();
    let mm = mydate.getMonth() + 1;
    //mydqte.setDate(1);
    let dd = mydate.getDate();

    // 요일의 이름을 저장하고 있는 배열의 생성
    let days = ["일", "월", "화", "수", "목", "금", "토"];
    // 0 = 일요일 ~ 6 = 토요일의 값이 리턴된다.
    let i = mydate.getDay();
    let day = days[i];

    let hh = mydate.getHours();
    let mi = mydate.getMinutes();
    let ss = mydate.getSeconds();

    // let result = yy + "-" + mm + "-" + dd + " " + day + "요일" + hh + " : " + mi + " : " + ss;
    let result = "오늘은 " + yy + "년 " + mm + "월 " + dd + "일 " + day + "요일 입니다. <br />";
    result += "현재 시간은 " + hh + "시 " + mi + "분 " + ss + "초 입니다.";
    div.innerHTML = "<h1>현재 날짜와 시간 출력 </h1>";
    div.innerHTML += "<h3>" + result + "</h3>";

    div.innerHTML += "<h1>toXXXString() 메서드 예제</h1>";
    // toLocalDateSTring() 함수는 "년 월 일"을 문자열로 반환하는 함수
    div.innerHTML += "<h3>" + mydate.toLocaleDateString() + "</h3>";
    // tolocaleTimeString() 함수는 "오전/오후 시:분:초"를 문자열로 반환하는 함수
    div.innerHTML += "<h3>" + mydate.toLocaleTimeString() + "</h3>";
    // tolocaleString() 함수는 "년월일 오전/오후 시:분:초"를 문자열로 반환하는 함수
    div.innerHTML += "<h3>" + mydate.toLocaleString() + "</h3>";

    document.querySelector("#btn").addEventListener("click", () => {
        startTime();
    });
};

function startTime() {
    let now = new Date();
    let result = now.toLocaleString() + ":" + now.getMilliseconds();
    document.getElementById('timeArea').innerHTML = result;
    window.setTimeout(startTime, 1); // setTimeout("호출함수", 지연시간(1/1000))
    // 1초 간격으로 값을 출력
}