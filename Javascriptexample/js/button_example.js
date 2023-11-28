window.onload = function() {
    document.getElementById("confirm").addEventListener("click", () => {
        document.getElementById("output").innerText = document.getElementById("java").value;
    });
};