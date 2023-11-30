$(function () {
    $("#number2").on("blur", function () {
        let result = 0;
        console.log($("#operator").val());
        if ($("#operator").val()=="plus") {
            result = parseInt($("#number1").val()) + parseInt($("#number2").val());
        } else {
            result = parseInt($("#number1").val()) - parseInt($("#number2").val());
        }
        $("#result").css("color", "red").html(result);
    });
});