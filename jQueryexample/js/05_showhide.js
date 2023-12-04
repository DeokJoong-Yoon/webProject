$(function() {
    /** show() / hide() / toggle() */
    $("#sh > input:eq(0)").click(function() {
        $("#sh > div").show();
    });

    $("#sh > input:eq(1)").click(function() {
        $("#sh > div").hide();
    });

    $("#sh >input:eq(2)").on("click", function() {
        $("#sh > div").toggle();
    });
    /* $("#sh > input:eq(2)"). click(function() {
        $("#sh > div").toggole(2000);
    });
    */

    /** fadeIn() / fadeOut() / fadeToggle() */
    $("#fade > input:eq(0)").on("click", function() {
        $("#fade > div").fadeIn(3000);
    });

    $("#fade > input:eq(1)").on("click", function() {
        $("#fade > div").fadeOut(4000);
    });

    $("#fade >input:eq(2)").on("click", function() {
        $("#fade > div").fadeToggle(4000);
    });

    /** slideDown() / slieUp() / slideTOggle() */
    $("#slide > input:eq(0)").on("click", function() {
        $("#slide > div").slideDown(2000);
    });

    $("#slide > input:eq(1)").on("click", function() {
        $("#slide > div").slideUp(2000);
    });

    $("#slide > input:eq(2)").on("click", function() {
        $("#slide > div").slideToggle(2000);
    });
    
});

/* [자바스크립트 이벤트 참고]
// 자바스크립트 이벤트 처리-1(예: 클릭시)
document.getElementById("아이디명").onclick = function() {

};
// 자바스크립트 이벤트 처리-2(예: 클릭시)
document.getElemntById("아이디명").addEventListener("click", function() {
    // 로직처리
});
*/

/* [jQuery 이벤트 참고]
// jquery 이벤트 처리 -1
$("선택자").click(function() {
    // 로직 처리
});

// jquery 이벤트 처리 -1
$("선택자").on("click", function() {
    // 로직처리
});
*/