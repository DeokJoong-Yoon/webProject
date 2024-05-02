$(function () {
    const regExp = /^[a-z][a-zA-Z0-9]{7,19}$/;

    $("#input1").on("keyup", function () {
        input = $("#input1").val();
        console.log(input);
        if (regExp.test(input)) {
            $("#span1").html("성공");
        } else {
            $("#span1").html("다시해");
        }
    });
});