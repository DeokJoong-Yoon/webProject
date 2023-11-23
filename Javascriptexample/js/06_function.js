// function clickCount() {
//     const btn = document.getElementById("btn1");
//     btn.innerText = parseInt(btn.innerText) + 1;
// }
function clickCount(btn) {
    btn.innerText = parseInt(btn.innerText) + 1;
}

function add() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        window.alert("숫자만 입력해 주셔야합니다.");
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        return;
    }
    document.getElementById("result").value = sum(number1, number2);
}

function sum(num1, num2) {
    return num1 + num2;
}

// =============================
// 함수 선언과 호출
function test1(name) {
    console.log(name + " 매개변수를 가진 기본 함수");
}
test1("홍길동");