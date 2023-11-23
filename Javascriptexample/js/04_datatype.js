var str = "JS 코드를 함수 내부가 아닌";
str += " JS파일 또는 script 태그 밑에 바로 작성하면";
str += " HTML 랜더링 시 바로 수행 된다."
console.log(str);

// 변수 선언 위치에 따른 구분
var num1 = 10;  // 전역 변수
num2 = 20;      // 전역 변수

var num1 = "자바스크립트";

console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test() {
    var num3 = 3;
    num4 = 4;

    if (true) {
        var num5 = 5;
        num6 = 6;
    }

    console.log("num5 : " + num5);
}
test(); // 함수 호출

// console.log("num3 : " + num3);
console.log("num4 : " + num4);

// console.log("log5 : " + num5);
console.log("num6 : " + num6);

//자료형 확인
function typeTest() {
    const typeBox = document.getElementById("typeBox");
    let temp; // 선언 후 값을 초기화 하지 않음 == undefined
    typeBox.innerHTML = "temp : " + temp;

    // string
    const name = "홍길동";

    // typeof 변수명 : 해당 변수의 자료형을 검사하는 연산자
    typeBox.innerHTML += "<br />name : " + name + " / " + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br />gender : " + gender + " / " + typeof gender;
    // 자바스크립트는 char 자료형이 존재하지 않는다!
    // "", '' 모두 string 리터럴 표기법

    //number
    const age = 20;
    const height = 178.3;

    typeBox.innerHTML += "<br />age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br />age : " + height + " / " + typeof height;

    // boolean
    const isTrue = true;
    typeBox.innerHTML += "<br />isTrue : " + isTrue + " / " + typeof isTrue;

    // object 타입

    // javascrtip([] 사용) : 배열
    const array = [10, 30, 70, 50];
    typeBox.innerHTML += "<br />array : " + array + " / " + typeof array;

    for (let i = 0; i < array.length; ++i) {
        typeBox.innerHTML += "<br /> array[" + i + "] : " + array[i];
    }

    // 자바스크립트 객체는 K:V (Map 형식)로 작성
    const user = {
        "id": "javauser",
        "pwd": "java1234",
        "name": "홍길동"
    };

    typeBox.innerHTML += "<br />user : " + user + " / " + typeof user;

    // 객체 내용 출력 방법 1
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pwd : " + user.pwd;
    typeBox.innerHTML += "<br>user.name : " + user.name;

    // 객체 내용 출력 방법 2 (객체 전영 for문 for ... in )
    for (let key in user) {
        // user 객체의 키(id, pwd, name)를 반복할 때 마다 하나씩 얻어와 key 변수에 저장
        typeBox.innerHTML += "<br />user[" + key + "] : " + user[key];
    }

    console.log(user); // 콘솔 출력 시 보기 더 좋음

    // function
    // 1) 변수명 == 함수명
    const sumFn = function(n1, n2) {
        return n1 + n2;
    }

    typeBox.innerHTML += "<br />sumFn : " + sumFn + " / " + typeof sumFn;

    // 함수명() 괄호를 포함해서 작성하는 경우 -> 함수 호출(수행)
    typeBox.innerHTML += "<br />sumFn(10, 20) : " + sumFn(10, 20);

    typeBox.innerHTML += "<br />tempFn(30, sumFn) : " + tempFn(30, sumFn);
}

function tempFn(n3, fn) { //fn = function(n1, n2) { return n1 + n2; }
return n3 + fn(10, 20);
}

