$(function () {
    $("p").on({
        mouseenter: function () {
            $(this).css({"background-color": "lightgray", "font-size" : "100px"});
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }

    });

});