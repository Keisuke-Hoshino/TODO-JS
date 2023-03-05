const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liを生成
    const li = document.createElement("li");
    li.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグ(li)を未完了リストから削除
        deleteFromincompleteList(completeButton.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        // li以下を初期化
        addTarget.textContent = null;

        // pタグ生成
        const p = document.createElement('p')
        p.innerText = text

        // button(戻る)タグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        // liタグの子要素に各要素を設定
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);
        document.getElementById("complete-list").appendChild(addTarget);
    });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        deleteFromincompleteList(deleteButton.parentNode);
    });

    // liタグの子要素に各要素を設定
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromincompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
