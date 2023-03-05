const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const imputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liを生成
    const li = document.createElement("li");
    li.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = imputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // liタグの子要素に各要素を設定
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
