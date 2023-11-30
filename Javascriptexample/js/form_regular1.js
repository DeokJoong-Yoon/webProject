window.onload = function () {
    // const div1 = document.getElementById("div1");
    // div1.innerHTML = "";

    // const regExp1 = /a/;
    // div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr />";
    // div1.innerHTML += "/a/ , price : " + regExp1.test("price") + "<hr />";

    // let regExp2 = /[abcd]/;
    // div1.innerHTML += "/[abcd]/ , apple : " + regExp2.test("apple") + "<hr />";
    // div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr />";
    // div1.innerHTML += "/abcd]/ , qwert : " + regExp2.test("qwert") + "<hr />";
    // regExp2 = /[^abcd]/;
    // div1.innerHTML += "[^abcd]/ , html : " + regExp2.test("html") + "<hr />";

    // const regExp3 = /^group/;
    // div1.innerHTML += "group100 : " + regExp3.test("group100") + "<hr />";
    // div1.innerHTML += "100group : " + regExp3.test("100group") + "<hr />";

    // const regExp4 = /group$/;
    // div1.innerHTML += "group100 : " + regExp4.test("group100") + "<hr />";
    // div1.innerHTML += "100group : " + regExp4.test("100group") + "<hr />";


};

$(function () {
    $("#user_pwd").on("keyup", function() {
        const regExp = /^a${6,10}/;
    });
});