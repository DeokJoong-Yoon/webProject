
// alert 확인
function fnAlert() {
    window.alert("alert 버튼 클릭됨"); // 알림창으로 나옴

    // window는 브라우저 자체를 나타내는 객체 또는 브라우저를 제어하는 내장 객체.
    // -> JS 코드는 브라우저(window) 내부에서 실행되는 코드이다보니 window를 생략할 수 있다.
}

// write 확인
function documentWrite() {
    document.write("자바스크립트<br />"); // 문서 전체 맨 위에 덮어쓰기 해서 출력됨, 새로고침 하면 다시 돌아옴
    document.write("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}

// innerText 읽어오기
function getInnerText() {
    //      변수 = 읽어들인 값;
    const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    console.log(test1.innerText);
}

// innerText로 변경하기
function setInnerText() {
    //const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에 새로운 내용을 작성
    //  출력대상    = 출력값;
    //test1.innerText = "innerText로 <br /> 변경된 내용입니다.";
    document.getElementById("test1").innerText = "innerText로 <br /> 변경된 내용입니다.";
}

// innerHTML로 읽어오기
function getInnerHTML1() {
    const test2 = document.getElementById("test2");
    // test2 요소 내부에 내용(태그+ 속성 + 내용)을 읽어 출력
    console.log(test2.innerHTML);
}

// innerHTML로 변경하기
function setInnerHTML1() {
    //document.getElementById("test2").innerHTML = "innerHTML로 <br /> 변경된 내용입니다.";
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br /> 반갑습니다.";
}

// innerHTML 예제
function print() {
    const title = document.getElementById("title");
    title.innerHTML = "Hello Javascript~~!!";
    title.style.color = "orange";
    title.style.borderRadius = "10px";
    title.style.border = "1px solid #000";
    title.style.backgroundColor = "grey";
    title.style.padding = "10px";
    title.style.width = "400px";
    // title.className = "box1";
}

// confirm 확인하기
function fnConfirm() {
    const confirmBtn = document.getElementById("confirmBtn");

    if (confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")) {
        confirmBtn.style.backgroundColor = "orange";
    } else {
        confirmBtn.style.backgroundColor = "green";
    }

}


// prompt 확인하기
function fnPrompt1() {
    const name = prompt("당신의 이름은 무엇입니까?", "홍길동");
    const age = prompt("당신의 나이는 몇살입니까?", "30");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");
    divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살 " + name + "님이군요..!</b>";
}
function fnPrompt2() {
    const input = prompt("이름을 입력해주세요.", "");
    const promptResult = document.getElementById("area3");

    if (input != "") {
        promptResult.innerText = input + "님 환영합니다.";
    } else {
        promptResult.innerText = "이름을 입력해주세요.";
    }
}

function fnInput() {
    //      변수 = input 요소의 값
    const input1 = document.getElementById("userId");
    const input2 = document.getElementById("userPwd");

    const id = input1.value;
    const pwd = input2.value;

    //const id = document.getElementById("userId").value;
    //const pwd = document.getElementById("userPwd").value;

    const result = document.getElementById("result");
    if (id != "" && pwd != "") {
        result.value = id + " ," + pwd;
    } else {
        result.value = "다시 확인해 주세요";
    }

    //id = "";
    input1.value = "";
    input2.value = "";
}

function fnChange() {
    input1 = document.getElementById("number1");
    input2 = document.getElementById("number2");

    let tempNumber = input1.value;
    input1.value = input2.value;
    input2.value = tempNumber;

}
