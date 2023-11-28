window.onload = function() {
    document.getElementById("sumCal").addEventListener("click", function() {
        // 개무식한 방법
        // let price1 = parseInt(document.getElementById("multimediaprice").innerText.replace(/\,/g, ""));
        // let count1 = parseInt(document.getElementById("multimediaCount").value);
        // document.getElementById("multimediaTotal").value = price1 * count1;

        // let price2 = parseInt(document.getElementById("mobileprice").innerText.replace(/\,/g, ""));
        // let count2 = parseInt(document.getElementById("mobileCount").value);
        // document.getElementById("mobileTotal").value = price2 * count2;

        // let price3 = parseInt(document.getElementById("javaprice").innerText.replace(/\,/g, ""));
        // let count3 = parseInt(document.getElementById("javaCount").value);
        // document.getElementById("javaTotal").value = price3 * count3;

        // document.getElementById("totalCount").value = count1 + count2 + count3;
        // document.getElementById("javaTotal").value = price3 * count3;



        // querySelectorAll 사용 방법
        let prices = document.querySelectorAll(".cPrice");
        let counts = document.querySelectorAll(".cCount");
        let totals = document.querySelectorAll(".cSum");
    
        let totalCount = 0;
        let totalPrice = 0;
    
        prices.forEach((price, index) => {
            let numericPrice = parseInt(price.innerText.replace(/\,/g, ""));
            let count = parseInt(counts[index].value);
    
            totals[index].value = numericPrice * count;
    
            totalCount += count;
            totalPrice += numericPrice * count;
        });
    
        document.querySelector("#totalCount").value = totalCount;
        document.querySelector("#total").value = totalPrice + "원";

    });

}