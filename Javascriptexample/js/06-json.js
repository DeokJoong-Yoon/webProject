window.onload = function() {
    let user = {
        name : "javauser",
        email : "javauser@naverm.com",
        phone : "02-506-3536"
    };

    /* 사용자에게 입력받은 값으로 설정시
    const data = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value
    };*/

    // stringify() : JSON 객체를 string으로 변환해 준다.
    let userString = JSON.stringify(user);
    console.log(typeof userString);
    document.getElementById("string").innerHTML = userString;

    let userJson = "";
    console.log(typeof JSON.parse(userString));

    // parse() : String 객체를 JSON으로 변환해 준다.
    JSON.parse(userString, function(key, value) {
        if(key != "") {
            userJson += key + " : " + value + "<br />";
        }
    });
    document.getElementById("json").innerHTML = userJson;
};