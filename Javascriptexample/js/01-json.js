window.onload = function() {
    let person = {
        "name" : "HongGilDong",
        "age" : 25,
        "address" : {
            "nation" : "Korea",
            "city" : " Seoul",
            "postalCode" : 12345
        },
        "hobby" : ["영화", "여행"],
        "phone" : "010-1234-0987"
    };

    // 다음과 같이 출력되도록 코딩해 주세요
    let tag = "<label>이름 </label><span>" + person.name + "</span><br />";
    tag += "<label>나이 </label><span>" + person.age + "</span><br />";
    tag += "<label>주소 </label>";
    tag += "<span>" + person.address.nation + ", " + person.address.city;
    tag += ", " + person.address.postalCode + "</span><br />";
    let hData = "";
    for (i = 0; i < person.hobby.length; ++i) {
        hData += person.hobby[i] + " ";
    }
    tag += "<label>취미 </label><span>" + hData + "</span><br />";
    tag += "<label>번호 </label><span>" + person.phone + "</span>";


    document.getElementById("view").innerHTML = tag;
};