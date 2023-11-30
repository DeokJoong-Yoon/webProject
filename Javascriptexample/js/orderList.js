
window.onload = function() {
    let prices = document.querySelectorAll(".cPrice");
    let counts = document.querySelectorAll(".cCount");
    let totals = document.querySelectorAll(".cSum");
    let totalCount = 0;
    let totalPrice = 0;

    counts.forEach((t, i) => {
        t.addEventListener("blur", () => {
            let numericPrice = parseInt(prices[i].innerText.replace(/\,/g, ""));
            let count = parseInt(counts[i].value);
            totals[i].value = numericPrice * count;
            totalCount += count;
            totalPrice += parseInt(totals[i].value);
        });
    });

    document.getElementById("sumCal").addEventListener("click", function() {
        document.querySelector("#totalCount").value = totalCount;
        document.querySelector("#total").value = totalPrice + "원";

    });

}