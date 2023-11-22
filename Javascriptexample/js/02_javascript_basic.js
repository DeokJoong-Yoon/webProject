
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