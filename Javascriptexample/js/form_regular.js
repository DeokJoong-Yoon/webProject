window.onload = function () {

    document.getElementById("btn1").addEventListener("click", function () {
        const div1 = document.getElementById("div1");
        div1.innerHTML = "";    // 내용 모두 삭제

        // a(일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
        const regExp1 = /a/;
        div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr />";
        div1.innerHTML += "/a/ , price : " + regExp1.test("price") + "<hr />";

        // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
        let regExp2 = /[abcd]/;
        div1.innerHTML += "/[abcd]/ , apple : " + regExp2.test("apple") + "<hr />";
        div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr />";
        div1.innerHTML += "/[abcd]/ , qwert : " + regExp2.test("qwert") + "<hr />";
        regExp2 = /[^abcd]/;
        div1.innerHTML += "/[^abcd]/ , html : " + regExp2.test("html") + "<hr />";

        // ^(캐럿) : 문자열의 시작을 의미
        const regExp3 = /^group/;   // 문자열의 시작이 "grounp"인지 확인
        div1.innerHTML += "/^group/ , group100 : " + regExp3.test("group100") + "<hr />";
        div1.innerHTML += "/^group/ , 100group : " + regExp3.test("100group") + "<hr />";

        // $ : 문자열의 끝을 의미
        const regExp4 = /group$/;   // 문자열의 끝이 "group"인지 확인
        div1.innerHTML += "/group$/ , group100 : " + regExp4.test("group100") + "<hr />";
        div1.innerHTML += "/group$/ , 100group : " + regExp4.test("100group") + "<hr />";
    });

    // 이름 유효성 검사
    document.getElementById("inputName").addEventListener("keyup", function () {
        // 결과 출력용 span
        const span = document.getElementById("inputNameResult");

        // 한글 2~5글자 겅규 표현식(정규식)
        // [가-힣] : 한글(단일 자음, 모음 제외)
        const regExp = /^[가-힣]{2,5}$/;

        //유효성 검사
        if (regExp.test(this.value)) {
            // #inputName에 작성된 값이 유효한 경우
            span.innerText = "유효현 이름 형식입니다.";
            span.style.color = "green";
            span.style.fontWeight = "bold";
        } else {
            span.innerText = "이름 형식이 유효하지 않습니다.";
            span.style.color = "red";
            span.style.fonWeigth = "bold";
        }

        // 빈칸인지 검사
        // 빈칸이라면 span에 작성된 내용 초기화(삭제)
        // (-> 이름을 쓰고 지웠을때 처음화면처럼 보여야함)
        if (this.value.length == 0) {
            span.innerText = "";
        }
    });

    // 아이디 유효성 검사
    document.getElementById("idCheck").addEventListener("click", function() {
        const id = document.getElementById("mid");
        const regExp1 = /^[a-zA-Z][0-9a-zA-Z]{4,7}$/;
        // const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");

        if (regExp1.test(id.value)) {
            alert("유효한ID");
        } else {
            alert("유효하지 않은 ID");
            document.getElementById("mid").value = "";
        }
    });

    // 공백 유효성 검사
    document.getElementById("nameCheck").addEventListener("click", () => {
        const name = document.getElementById("user_name");
        const span = document.getElementById("msg");

        if (name.value.replace(/\s/g, "") == "") {  // 모든(g) 공백(\s)을 "" 로 치환
            span.innerText = "값(이름)을 입력해주세요.";
            span.style.color = "white";
            span.fontWeight = "bold";
            span.style.backgroundColor = "red";
            name.value = "";
        } else {
            span.innerText = name.value;
            span.style.backgroundColor = "powderblue";
        }

    });

    document.getElementById("user_name").addEventListener("focus", function() {
        document.getElementById('msg').innerHTML = "";
    });

    document.getElementById("pwdCheck").addEventListener("click", () => {
        const pwd = document.getElementById("user_pwd");
        const regExp = /^$/;
    });
};