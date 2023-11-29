window.onload = function() {
    document.getElementById("number2").addEventListener("mouseout", ()=> {
        number1 = parseInt(document.getElementById("number1").value);
        number2 = parseInt(document.getElementById("number2").value);
        operator = document.getElementById("operator");
        operator = operator.options[operator.selectedIndex].value;
        
        let result1 = new Calc(number1, number2, operator);
        document.getElementById("result").innerHTML = result1.result();
    });
}