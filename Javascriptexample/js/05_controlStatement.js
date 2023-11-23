function result() {
    const kor = parseInt(document.getElementById("kor").value);
    const eng = parseInt(document.getElementById("eng").value);
    const math = parseInt(document.getElementById("math").value);

    let sum = kor + eng + math;
    let avg = (parseFloat(sum) / 3).toFixed(2);
    document.getElementById("sum").value = sum;
    document.getElementById("avg").value = avg;
    let grade;
    if (avg >= 90) {
        grade = 'A';
    } else if (avg >= 80) {
        grade = 'B';
    } else if (avg >= 70) {
        grade = 'C';
    } else {
        grade = 'D';
    }
    document.getElementById("grade").value = grade;
    console.log(avg);
}