const text = "I think therefore I am.";

const container = document.getElementById("text-container");

for (let char of text) {
    if (char === " ") {
        // 空格直接渲染空白，不产生线条
        const space = document.createElement("div");
        space.style.width = "18px";
        container.appendChild(space);
    } else {
        // 创建字母 + 竖线的容器
        const block = document.createElement("div");
        block.className = "char-block";

        // 创建竖线（高度随机）
        const line = document.createElement("div");
        line.className = "line";
        line.style.height = (60 + Math.random() * 60) + "px";

        // 创建字母
        const letter = document.createElement("div");
        letter.className = "char";
        letter.textContent = char;

        // 组合
        block.appendChild(line);
        block.appendChild(letter);
        container.appendChild(block);
    }
}
