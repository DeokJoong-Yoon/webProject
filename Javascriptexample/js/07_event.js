function test1(button) {
    button.style.backgroundColor = "pink";
    button.style.color = "white";
}
function changeBg(color) {
    const result = document.querySelector('#result');
    result.style.backgroundColor = color;
}

function answerCheck(data) {
    const answer = document.getElementById("answer");
    answer.style.color = "#b90000";
    answer.style.fontSize = "36px";
    answer.innerHTML = data;
}

let cnt = 0; // 전역변수
function imageChange(){
    if (cnt == 0) {
        document.getElementById("quiz").src = "../images/1.jpg";
        cnt = 1;
    } else {
        document.getElementById("quiz").src = "../images/2.jpg";
        cnt = 0;
    }
}

// 고전 이벤트 모델 확인하기

/*** 주의사항 **
고전/표준 이벤트 모델은 랜더링된 HTML 요소에 이벤트 관련된 동작을 부여하는 코드
-> 랜더링이 되지 않은 요소에는 이벤트 관련 동작을 추가할 수 없다!!
   (문제 원인 : HTML 코드 해석 순서 (위 -> 아래) )
-> 해결 방법 : HTML 요소가 먼저 랜더링된 후 JS코드 수행. </body> 전에 명시. 
              window.onload()로 작성 시 <head> 태그에 명시가능. 
*/

// 방법 1 : 요소를 변수로 지정 & 미리 만든 함수 사용
// let btn = document.querySelector("#btn1");
// btn.onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#f00";
// }

// 방법 2: 요소를 따로 변수로 만들지 않고 사용
// document.querySelector("#btn1").onclick = changeColor;
// function changeColor() {
//     document.querySelector("p").style.color = "#00f0";
// };

// 방법 3 : 직접 함수를 선언  - 가장 많이 사용하는 방법
document.querySelector("#btn1").onclick = function() {
    document.querySelector("p").style.color = "#00f";
};

document.getElementById("test2-1").onclick = function() {
    alert("고전 이벤트 모델로 출력된 대화상자");
};

document.getElementById("test2-1").onclick = function() {
    alert("고전 이벤트 모델로 출력된 대화 상자");
}

// 이벤트 제거
document.getElementById("test2-2").onclick = function() {
    // test2-1 이벤트 제거
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거하였습니다.");
}

document.getElementById("test2-3").onclick = function(e) {

    // 버튼 색 바꾸기
    // 방법 1) 요소를 문서에서 찾아서 선택
    // document.getElementById("test2-3").style.backgroundColor = "pink";

    // 방법 2) 매개변수 e 또는 event 활용하기
    //  -> 이벤트 핸들러에 e 또는 event를 작성하는 경우
    //      해당 이벤트와 관련된 모든 정보가 담긴 이벤트 객체가 반환

    // event.target : 이벤트가 발생한 요소
    // e.target.style.backgroundColor = "pink";

    // 방법 3) this 활용하기 -> 이벤트가 발생한 요소 (e.target)
    // console.log(this);
    // this.style.backgroundColor = "pink";
};

document.getElementById("test2-3").onclick = function() {
    console.log(this);
    this.style.color = "green";
};

document.getElementById("test3").addEventListener("click", function() {
    // this : 이벤트가 발생한 요소
    console.log(this.clientWidth);  // 현재 요소의 너비(테두리 제외)
    // this.style.width = "300px";  // 현재 요소 너비 변경
    this.style.width = (this.clientWidth + 20) + "px";
});

// test3에 이미 click 이벤트에 대한 동작이 존재하는데
// 중복해서 적용(고전 이벤트 모델;에서는 적용되지 않음.)
document.getElementById("test3").addEventListener("click", function() {
    // 높이 증가
    this.style.height = (this.clientWidth + 20) + "px";
});

document.getElementById("jumin1").addEventListener("keyup", function() {
    const jumin1 = document.getElementById("jumin1").value;
    if(jumin1.length == 6) {
        document.getElementById("jumin2").focus();
    }
});

// 내답
// document.getElementById("changeBtn1").addEventListener("click", function() {
//     document.getElementById("div1").style.backgroundColor = document.getElementById("input1").value;
//     console.log(document.getElementById("input1").value);
// });

//강사님 답
// document.getElementById("changeBtn1").addEventListener("click", function() {
//     const div1 = document.getElementById("div1");
//     const input1 = document.getElementById("input1");

//     const bgColor = input1.value;

//     div1.style.background = bgColor;
// });

document.getElementById("input1").addEventListener("change", function() {
    
    // change 이벤트
    // - text 관련 input태그는
    // 입력이 완료된 후 포커스를 잃거나, 엔터를 입력하는 경우
    // 입력된 값이 이전과 다를 경우를 change 이벤트가 발생한 것으로 인식한다.

    console.log("change 이벤트 발생!");
    const div1 = document.getElementById("div1");

    // input1에 작성된 값 얻어오기
    const bgColor = this.value;

    // div1 배경색 변경
    div1.style.backgroundColor = bgColor;

    //input data 초기화
    this.value = "";
});

//a태그 기본 이벤트 제거
document.getElementById("goNaver").addEventListener("click", function(e) {
    // 매개변수 e 또는 evant == 이벤트 발생 객체
    //                          (이벤트와 관련된 정보가 담겨있는 객체)

    e.preventDefault(); // HTML 요소가 가지고 있는 기본 이벤트를 제거

    // Default : 기본 / 기본값
    // prevent : 막다, 방지하다, 예방하다
    alert("네이버 이동이 되지 않습니다.");
});