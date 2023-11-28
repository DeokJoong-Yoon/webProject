window.onload = function () {
    // submit 버튼에 대한 제어
    const form = document.querySelector('#form1');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // sumit 기본의 기본이벤트(서버로 전송)를 해지 (return false 하는것과 같다)
        // doSubmit();
        //     const frm = document.form1;

        //     if (document.getElementById("user_name").value.replace(/\s/g, "") == "") {
        //         alert("이름을 입력해 주세요.");
        //         frm.user_name.value = "";
        //         frm.user_name.focus();
        //         return false;
        //     }
        // });
    });
    // 버튼 제어
    document.getElementById("sendBtn").addEventListener("click", function () {
        const frm = document.form1;

        if (document.getElementById("user_name").value.replace(/\s/g, "") == "") {
            alert("이름을 입력해 주세요.");
            frm.user_name.value = "";
            frm.user_name.focus();
            return;
        }

        // 아래 코드를 동일하게 사용한다.
        if (!frm.gender[0].checked && !frm.gender[1].checked) {
            alert("성별을 선택해 주세요.");
            return;
        }

        if (frm.job.selectedIndex < 1) {
            alert("직업을 선택해 주세요.");
            return false;
        }

        let chk = false;
        for (let i = 0; i < frm.hobby.length; ++i) {
            if (frm.hobby[i].checked) {
                chk = true;
                break;
            }
        }
        if (!chk) {
            alert("취미를 선택해 주세요.");
            return;
        }

        let str = inputData(frm);
        str += "\n\n입력하신 내용이 맞습니까?\n[취소를 누르면 모든 데이터가 사라집니다.]";
        // 입력확인하기
        if (confirm(str)) {
            //frm.submit(); // 서버에 데이터 전송
            return false;
        } else {
            frm.reset();    // 데이터 삭제
            return false;
        }
    });
}


function doSubmit() {
    // 폼 객체
    const frm = document.form1;
    // text 요소의 입력여부 검사    
    // if (document.getElementById("user_name").value.replace(/\s/g, "") == "") {
    //     alert("이름을 입력해 주세요.");
    //     frm.user_name.value="";
    //     frm.user_name.focus();
    //     return false;
    // }
    if (document.getElementById("user_name").value.replace(/\s/g, "") == "") {
        alert("이름을 입력해 주세요.");
        frm.user_name.value = "";
        frm.user_name.focus();
        return;
    }

    // 라디오 버튼의 입력 여부 검사, !(not) : 부정연산자. true->false / false->true
    if (!frm.gender[0].checked && !frm.gender[1].checked) {
        alert("성별을 선택해 주세요.");
        return false;
    }

    // select 요소에 대한 선택위치 검사
    //if (document.form1.job.selectedIndex < 1) {
    if (frm.job.selectedIndex < 1) {
        alert("직업을 선택해 주세요.");
        return false;
    }

    // 체크박스의 선택여부 검사
    let chk = false;
    for (let i = 0; i < frm.hobby.length; ++i) {
        if (frm.hobby[i].checked) {
            chk = true;
            break;
        }
    }
    if (!chk) {
        alert("취미를 선택해 주세요.");
        return false;
    }

    let str = inputData(frm);
    str += "\n\n입력하신 내용이 맞습니까?\n[취소를 누르면 모든 데이터가 사라집니다.]";
    // 입력확인하기
    if (confirm(str)) {
        //frm.submit(); // 서버에 데이터 전송
        return false;
    } else {
        frm.reset();    // 데이터 삭제
        return false;
    }
};

function inputData(form) {  // document.form1
    let result = "▶ 이름 : " + form.user_name.value;
    let sex;
    for (let i = 0; i < form.gender.length; ++i) {
        if (form.gender[i].checked) {
            sex = form.gender[i].value;
        }
    }
    result += "\n▶ 성별 : " + sex;
    result += "\n▶ 직업 : " + form.job.value;                           // select 요소의 값 접근 - 1
    // result += "\n▶ 직업 : " + form.job[form.job.selectedIndex].value;   // select 요소의 값 접근 - 2
    // result += "\n▶ 직업 : " + form.job.options[form.job.selectedIndex].value;   // select 요소의 값 접근 - 3
    let hby = "";
    for (let i = 0; i < form.hobby.length; ++i) {
        if (form.hobby[i].checked) {
            hby += form.hobby[i].value + " ";
        }
    }
    result += "\n▶ 취미 : " + hby;

    return result;
}
