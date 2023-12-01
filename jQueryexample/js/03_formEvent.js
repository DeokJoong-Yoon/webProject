window.onload = function() {

};

$(function() {
    $("#sendBtn").click(function() {
        // $(input요소).val() 함수는 사용자가 입력한 값 반환
        // $(input요소).val("설정할 값") 함수는 요소에 값 설정

        /** 아이디 입력 검사 */
        // let userid = $("input[name='id_user']").val();
        
        // let userid = $("input[name='user_id']").val();

        // if (userid.replace(/\s/g, "") == "") {
        //     // alert("아이디를 입력하세요.");
        //     // $("input[name='user_id']").val("");
        //     $("input[name='user_id']").focus();

        //     $("input[name='user_id']").attr("placeholder", "아이디를 입력해 주세요.");
        //     return;
        // }

        /* 첫글자 영문자로, 두번째부터 영문자와 숫자로 6글자이상 12글자이하. */
        // const idPattern = /(^[a-zA-Z][a-zA-Z0-9]{5,11}$)/g;
        // // const idPattern = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/;
        // if(!idPattern.test(userid)) {
        //     alert("아이디 다시 입력");
        //     // $("#user_id").val("");
        //     $("#user_id").focus();
        // }


        // // 비밀번호 유효성 검사
        // let pwPattern = /^[A-Z][a-zA-Z0-9]{3,13}$/g;

        // let password = $("#user_pw").val();
        // let password2 = $("#user_pw2").val();

        // if(!pwPattern.test(password)) {
        //     alert("패턴 틀림");
        // }

        // if((password.replace(/\s/g, "") == "") || (password2.replace(/\s/g, "") == "")) {
        //     alert("빈공간 없이 비밀번호 입력");
        //     return;
        // }

        // let compared = (password == password2);
        // if (!compared) {
        //     alert("비밀번호가 맞지 않습니다.");
        //     $("#user_pw2").val("");
        //     $("#user_pw2").focus();
        //     return;
        // }

        /**라디오버튼 선택 여부 검사 */
        // $("라디오버튼CSS 선택자").is("checked");
        if (!$("input[name='gender']").is(":checked")) {
            alert("성별 선택해");
            return;
        }

        // if ($("#emailAddress").val().replace(/\s/g, "") == "") {
        //     alert("이메일 주소 입력해");
        //     $("#emailAddress").val("");
        //     $("#emailAddress").focus();
        //     return;
        // }

        /**체크박스 선택여부 검사 */

        /** selectbox 선택여부 검사
            - $("select의 셀렉터 > option:selected").index() : 선택된 항목의 index 벅호
            - $("select의 셀렉터 > option:selected").val() : 선택된 항목의 값
            - $("select의 설렉터").val() : 선택된 항목의 값을 반환

         */

        let result = "<h3>회원가입 입력 데이터</h3><ul>";

        result += "<li>" + $("#user_id").val() + "</li>";
        result += "<li>이름 : "+ $("#user_name").val() + "</li>";
        result += "<li>생년월일 : "+$("input[name='birth']").val() + "</li>";
        result += "<li>성별 : "+ $("input[name='gender']:checked").val() + "</li>";

        result += "</ul>";

        let hobby = $(".hobby_check:checked");
        let select_hobby = "";

        // // each() 함수에 hobby의 개체 수 만큼 반복적으로 function()이 실행된다.
        // hobby.each(function() {
        //     select_hobby += $(this).val() + " ";
        // });


        console.log(result);
        $("#formResult").html(result);
    });

    $("#emailAddress").on("change", function() {
        let emailAddress = $("select[name='emailAddress']").val();

        if($("#emailAddress > option:selected").index() == 5) {
            $("#emailDomain").removeAttr("readonly");
            $("#emailDomain").val("");
            $("#emailDomain").focus();
        } else {
            // attr("속성","값") : 속성에 값을 설정할 때 사용(attribute).
            //                    값이 반드시 필요한 속성
            // prop("속성", "값") : 속성에 값을 설정할 때 사용(property).
            //                     값이 있을 수도 없을 수도 있는 속성
            //                     readonly or readonly="readonly", checked, selected
            // prop("속성명") : 해당 속성이 요소에 존재하면 true, 아니면 false
            // prop("속성명", true | false) : 해당 속성을 checked 또는 selected 상태로 변경(true)/해제(false)

            $("#emailDomain").prop("readonly", true);
            $("#emailDomain").val(emailAddress);
        }
    });


});