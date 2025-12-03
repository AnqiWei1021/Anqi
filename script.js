const text = "I think therefore I am.";
const container = document.getElementById("text-container");

[...text].forEach((char, i) => {
    // 随机线条高度（80–160px）
    const lineHeight = Math.floor(Math.random() * 80) + 80;

    // 外层 letter block
    const block = document.createElement("div");
    block.className = "letter-block";

    // 生成线条
    const line = document.createElement("div");
    line.className = "line";
    line.style.setProperty("--h", lineHeight + "px");

    // 生成字母
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;

    // 放进容器
    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
