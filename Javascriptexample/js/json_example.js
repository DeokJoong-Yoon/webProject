window.onload = function () {
    let jsonExam = {
        "title": "Javascript / jQuery / Ajax",
        "text": "클라이언트 프로그래밍 과목을 정리해 놓은 게시판입니다.",
        "subject": [
            { "number": "공지", "subjectTitle": "클라이언트 프로그래밍", "hits": "3", "regDate": "2017.01.29" },
            { "number": 3, "subjectTitle": "Ajax", "hits": 6, "regDate": "2018.04.08" },
            { "number": 2, "subjectTitle": "jQuery", "hits": 15, "regDate": "2017.11.07" },
            { "number": 1, "subjectTitle": "Javascript", "hits": 19, "regDate": "2017.06.05" }
        ]
    };

    document.getElementById("title").innerHTML = jsonExam.title;
    document.getElementById("description").innerHTML = jsonExam.text;
    document.getElementById("total").innerHTML = "총 게시물의 수 : " + jsonExam.subject.length + "개";
    let html = "";
    for (let i = 0; i < jsonExam.subject.length; ++i) {
        let item = jsonExam.subject[i];
        html += "<tr><td>" + item.number + "</td>";
        html += "<td class='text-left'>" + item.subjectTitle + "</td>";
        html += "<td>" + item.hits + "</td>";
        html += "<td>" + item.regDate + "</td></tr>";
    }

    document.getElementById("item").innerHTML = html;
};