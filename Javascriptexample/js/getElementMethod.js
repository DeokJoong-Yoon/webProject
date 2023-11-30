window.onload = function () {
    document.getElementById("btn").addEventListener("click", () => {
        let exam = document.getElementById("title");
        exam.className = "titleStyle";
        exam.innerHTML = "곰그림";
        exam.style.width = "300px";
    });

    document.getElementById("cover").addEventListener("mouseover", function () {
        this.setAttribute("src", "../images/1.jpg");
    });

    document.getElementById("cover").addEventListener("mouseout", function () {
        // this.setAttribute("src", "../images/2.jpg");
        this.src = "../images/bear.jpg";
    });

    document.getElementById("colorBtn").addEventListener("click", function() {
        // let li = document.getElementsByClassName("changeColor");
        // for (let i = 0; i < li.length; ++i) {
        //     li[i].style.color = "pink";
        //     li[i].style.backgroundColor = "red";
        // }

        let li = document.querySelectorAll(".changeColor");
        for (let i = 0; i < li.length; ++i) {
            li[i].style.color = "green";
            li[i].style.backgroundColor = "orange";
        }
        li.forEach(element => {
          element.style.color = "powderblue";
          element.style.backgroundColor = "red";  
        });
    });

    let check = document.querySelectorAll(".check");
    // for (let i = 0; i < check.length; ++i) {
    //     check[i].addEventListener("click", function() {
    //         this.style.color = "#ccc";
    //         this.parentNode.style.color = "red";
    //         this.parentNode.style.textDecoration = "line-through";
    //     });
    // }
    check.forEach(e => {
        e.addEventListener("click", () => {
            e.style.color = "powderblue";
            e.parentNode.style.color = "purple";
            e.parentNode.style.textDecoration = "line-through";
        });
    });

    document.getElementById("choice").addEventListener("click", function () {
        let ul = document.getElementsByTagName("ul"); // 요소명
        let text = "";
        let li = ul[2].getElementsByTagName("li");
        for (i = 0; i < li.length; ++i) {
            text += li[i].innerHTML;
            text += "&nbsp;&nbsp;"
        }
        document.getElementById("area").innerHTML = text;
    });
}