window.onload = function () {
    let small = document.querySelectorAll(".small");
    let cup = document.getElementById("cup");

    // for (let i = 0; i < small.length; ++i) {
    //     small[i].addEventListener("mouseover", function() {
    //         cup.src = this.src;
    //     });
    // }
    small.forEach((t) => {
        t.addEventListener("mouseover", function () {
            // cup.src = t.src;
            cup.setAttribute("src", this.src);
        });
    });

    document.getElementById("view").addEventListener("click", function() {
        let state = document.getElementById("detail").style.display;
        if (state != "block") {
            document.getElementById("detail").style.display = "block";
        } else {
            document.getElementById("detail").style.display = "none";
        }
        
    });

}