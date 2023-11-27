window.onload = function () {
    let now = new Date();
    let firstDay = new Date("2023-10-13");

    let toNow = now.getTime();
    let toFirstDay = firstDay.getTime();
    let passedTime = toNow - toFirstDay;
    console.log(passedTime);

    passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));
    document.querySelector('#result').innerText = passedTime;

    let theday = new Date("2023-10-13");
    let toDate = now.getTime() - theday.getTime();
    let day = Math.floor(toDate / (1000 * 60 * 60 * 24));
    document.getElementById("data").innerText = day;
};
