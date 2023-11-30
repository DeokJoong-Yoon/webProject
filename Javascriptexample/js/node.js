window.onload = function () {
    // document.getElementById("createBtn").addEventListener("click", createNode);

    document.getElementById("subject").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            // form 밑에 text 가 하나 인것을 전제로, button은 submit이 기본.
            // "Enter" (=button clieck?) 가 입력되면 Default가 'submit' 이다.
            // 여기서는 'submit'을 실행하지 않기에 prevenetDefault() 메서드를 사용하여
            // 'submit'을 지우고 우리가 통제하기 위한 메서드를 입력한다.
            e.preventDefault();
            createNode();
        }
    });
};

function createNode() {
    // 요소 노드 추가
    let newItem = document.createElement("li");

    // 폼의 텍스트 필드 요소 접근
    let subject = document.querySelector("#subject");

    // 텍스트 필드의 값을 텍스트 노드로 만들기
    let newText = document.createTextNode(subject.value);

    // 텍스트 노드를 요소 노드의 자식 노드로 추가
    newItem.appendChild(newText);

    // 웹 문서에서 부모 노드 가져오기 (ul)
    let itemList = document.querySelector("#itemList");
    itemList.appendChild(newItem);

    subject.value = "";

    let items = document.querySelectorAll("li");
    // for (i = 0; i < items.length; ++i) {
    //     items[i].addEventListener("click", function() {
    //         if (this.parentNode) {
    //             this.parentNode.removeChild(this);
    //         }
    //     });
    // }
    items.forEach((t) => {
        t.addEventListener("click", function () {
            if (t.parentNode) {
                t.parentNode.removeChild(t);
            }
        });
    });
}

// 내가 작성한 것
// function myFunction() {
//     let subject = document.getElementById("subject").value;
//     let li = document.createElement("li");
//     let textNode = document.createTextNode(subject);

//     li.appendChild(textNode);

//     document.getElementById("itemList").appendChild(li);
// };