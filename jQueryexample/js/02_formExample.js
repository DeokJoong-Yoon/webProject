$(function () {
    $("#operation").on("click", function () {
        let number1 = $("#number1").val();
        if(number1.replace(/\s/g, "") == "" || isNaN(number1)) {
            alert(" 1 숫자 입력!!!");
            $("#number1").val("");
            $("#number1").focus();
            return;
        }

        let number2 = $("#number2").val();
        if(number2.replace(/\s/g, "") == "" || isNaN(number2)) {
            alert(" 2 숫자 입력2");
            $("#number2").val("");
            $("#number2").focus();
            return;
        }

        let result = 0;
        let operator = $("#operator > option:selected").val();
        if (operator =="+") {
            result = parseInt(number1) + parseInt(number2);
        } else if (operator == "-") {
            result = parseInt(number1) - parseInt(number2);
        } else if (operator == "*") {
            result = parseInt(number1) * parseInt(number2);
        } else {
            result = parseInt(number1) / parseInt(number2);
            // isFinite(123.123) 123.123은 유한한 숫자이므로 true를 반환
            // isFinite(5/0) Infinity는 무한한 숫자이므로 false;
            if(!isFinite(result)) {
                $("#result").html("0으로 나눌수 없습니다.");
                return;
            }
        }
        $("#result").css("color", "red").html(result);
    });

    $("#plusBtn").click(function() {
        let number3 = $("#number3").val();
        let pattern = /[^\d]+/g; // 숫자가 아닌 값중 하나라도 있으면
        // number 유효성 검증

        let pattern1 = /[^\d]+/g;
        if(number3.replace(/\s/g, "") == "" || pattern.test(number3)) {
            alert("1 숫자만 입력");
            $("#number3").val("");
            $("#number3").focus();
            return;
        }

        let number4 = $("#number4").val();
        if(number4.replace(/\s/g, "") == "" || pattern.test(number4)) {
            alert("2 숫자만 입력");
            $("#number4").val("");
            $("#number4").focus();
            return;
        }
        number3 = parseInt(number3);
        number4 = parseInt(number4);
        let result = 0;
        if (number3 > number4) {
            for (i = 0; i < number4; ++i) {
                result += number3;
            }
            $("#area").val(result + " 앞에수가 더 큼");
        } else {
            for (i = 0; i < number3; ++i) {
                result += number4;
            }
            $("#area").val(result + " 뒤에수가 더 큼");
        }
    });
});

window.onload = function() {
    document.getElementById("id").addEventListener("click", function() {

    });
};

$(function() {
    $("#id").click(function() {

    });
});