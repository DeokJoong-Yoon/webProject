// JS 와 jQuery 차이점

/*
// Javascript
window.onload = function () {    // 문서 로딩이 완료된 후 수행
    // 버튼 자신의 배경색 : black, 글자색 : yellow, 글자 크기 : 20px
    document.querySelector("#jsBtn").addEventListener("click", function () {
        this.style.backgroundColor = "black";
        this.style.color = "yellow";
        this.style.fontSize = "20px";
    });

    document.getElementById("colorChange").addEventListener("click", function () {
        let wrapper = document.getElementById("wrapper"); // div 태그
        let ul = wrapper.getElementsByTagName("ul");    // div하위 ul 태그
        let li = ul[0].getElementsByTagName("li");

        for (i = 0; i < li.length; ++i) {
            let l = li[i];
            if (l.className == "three") {
                let txt = l.getElementsByTagName("span");
                txt[0].style.color = "red"; // span 태그의 글자색 변경
            }
        }
    });
};
*/

// jQuery
// 
$(function() {
    // $("#colorChange").on("click", function() {
    //     // $("#wrapper  ul  li.three  span").css("color", "blue");
    //     $("#wrapper > ul > li.three > span").css("color", "blue");
    // });

    // $("#jQueryBtn").on("click", function() {
    //     // $(this).css("background-color", "black").css("color", "yellow").css("font-size", "20px");
    //     $(this).css({
    //         "background-color" : "black",
    //         "color" : "yellow",
    //         "font-size" : "20px",
    //     })
    // });

    $("#btnChange").click(function() {
        // alert($("#hello").html());
        // $("#hello").html("오늘도 최선을 다해... ");
        $("#text").html($("#hello").html());
    });

    $("#img").hover(function() {
        // $("#img").attr("src", "../images/easys-2.jpg");
        $(this).attr("src", "../images/easys-2.jpg");
    }, function() {
        // $("#img").attr("src", "../images/easys-1.jpg");
        $(this).attr("src", "../images/easys-1.jpg");
    });

    let regExp = /^[a-z][a-zA-Z0-9]{7,19}$/;
    $("#input1").on("keyup", function() {
        // on() == addEventListener
        // -> 특정 이벤트 발생 시 동작(이벤트 핸들러) 지정
        // 특히 동적 요소에 이벤트 설정 시 사용.

        // 1) 작성된 값이 정규표현싱게 맞는 형식인지 검사
        if( regExp.test($("#input1").val())) {
            // $("#input1").val();
            // : 아이디가 input1인 요소에 작성도니 값(value)을 얻어옴
            // $("#input1").val("값");
            // : 아이디가 input1인 요소에 값을 설정함.

            // 2) 정규식 결과에 따라 내용 출력
            $("#span1").text("유효한 문자열 형식입니다.");
            $("#span1").css("color", "green");
        } else {
            $("#span1").text("유효하지 않는 문자열 형식입니다.").css("color", "red");
            // method chaining : 하나에 대상에 대하여 어러 메소드를 연달아 작성하는 기술
        }

        if ($("#input1").val().length == 0) {
            $("#span1").text("");
        }
    });

    $("#singleButton").click(function() {
        $(this).html("단순함이란 궁극의 정교함니다.");
    });

    $(".multiButton").on("click", function() {
        let index = $(this).index();
        let result = index + "번째 요소를 눌렀습니다.";
        $(this).html(result);
    });

    let index = 1;
    $("#treeImage").click(function() {
        index = (index%6) + 1;
        $(this).attr("src", "../images/tree-" + index + ".jpg").css("width", "400px");
    });
});