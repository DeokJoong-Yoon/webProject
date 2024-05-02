window.onload = function() {
    // 회사 정보를 표현하는 데이터 구조를 JSON으로 정의
    // 하나의 JSON 데이터 안에는 일반 변수와 배열 데이터가 공존할 수 있다.
    let company = {
        "name" : "(주)자바컴페니",
        "since" : 2013,
        "department" : ["기획팀", "영업팀", "디자인팀", "개발팀"],
        "biz" : ["소프트웨어개발", "통신판매업", "위치정보서비스"]        
    };

    // 회사이름 출력하기
    document.getElementById("name").innerHTML = company.name;

    // 설립년도 출력하기
    document.getElementById("since").innerHTML = company.since;

    //주요 사업 부서를 출력하기 위하여 배열의 반복문으로 읽는다.
    let dept_li = "";
    for (let i = 0; i < company.department.length; ++i) {
        dept_li += "<li>" + company.department[i] + "</li>";
    }
    document.getElementById("department").innerHTML = dept_li;

    // 주요 사업 분야를 출력하기 위하여 배열의 반복문으로 읽는다.
    let biz_li = "";
    for (let i = 0; i < company.biz.length; ++i) {
        biz_li += "<li>" + company.biz[i] + "</li>";
    }
    document.getElementById("biz").innerHTML = biz_li;
}