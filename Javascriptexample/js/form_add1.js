$(function() {
   $("#sendBtn").on("click", function() {
    let userName = $("#user_name").val();
    let result = "<h1>입력결과</h1><ul>";
    if(userName.replace(/\s/g, "") == "") {
        alert("이름 입력해");
        $("#user_name").val("");
        $("#user_name").focus();
        return;
    }
    result += "이름 : " + $("#user_name").val() + "<br />";

    if(!$("input[name='gender']").is(":checked")) {
        alert("성별 선택해");
    }
    result += "성별 : " + $("input[name='gender']:checked").val(); + "<br />";

    if($("#job"))

    $("#resultPrint").html(result);
   }) ;
});