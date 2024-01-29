$(function () {
    let number = 1;
    $("button:eq(0)").on("click", function () {
        let li1 = $("<li>").css("color", "red").html("추가항목" + (number++));
        li1.addClass("liFirst");
        let li2 = $("<li>").css("color", "green").html("추가항목" + (number++));
        let li3 = $("<li>").css("color", "blue").html("추가항목" + (number++));

        // 새로 생성된 요소에 대한 이벤트 추가
        // li1.click(function() {
        //     $(this).remove();
        // });

        li2.click(function () {
            $(this).remove();
        });

        li3.click(function () {
            $(this).remove();   // 이벤트가 발생한 li 자체를 삭제
        });

        // li1.appendTo($("ul"));
        // $("ul").append(li1); // ul 태그에 동적요소로 추가한 li 태그 추가
        // $("ul").append(li2);
        // $("ul").append(li3);
        // 위와 동일한 표현

        $("ul").append(li1).append(li2).append(li3);


    });

    $(document).on("click", ".liFirst", function () {
        $(this).remove();
    });

    $("button:eq(1)").click(function () {
        $("ul").empty();    // ul 태그를 두고 하위 요소만 삭제
        // $("ul").remove();    // ul 태그를 포함하여 하위 요소 삭제
    });

    $("#print").click(function () {
        $("div#result").html("");
        let h3 = $("<h3>").html("상상할 수 있는 최고의 이상을... 그리고 차갑게 깨어있는 현실을...");
        let p = $("<p>").html("끊임없이 힘쓰고 노력하면, 마침내 이루리라.");

        let img = $("<img>");
        img.attr("src", "../images/doit.jpg");

        let btn = $("<button>");
        btn.attr({
            "type": "button",
            "class": "resetBtn"
        });
        btn.html("초기화");

        $("div#result").append(h3).append(p.append(img)).append(btn);

        /*  btn.click(function() {
            $("div#result").empty();
        });
        */

        $(".resetBtn").on("click", function() {
            $("div#result").empty();
        });
    });
    // $(document). : 현재 문서(document)에서
    // on("click", : click 이벤트가 발생 했을때
    // ".resetBtn", : .resetBtn 이 클래스가 있다면
    // function() { }  : 함수를 실행해라
    // $(document).on("click", ".resetBtn", function() {
    //     $("div#result").empty();
    // });

});