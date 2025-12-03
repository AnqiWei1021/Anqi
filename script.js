const text = "I think therefore I am.";

const container = document.getElementById("text-container");

for (let char of text) {
    if (char === " ") {
        const space = document.createElement("div");
        space.style.width = "18px";
        container.appendChild(space);
    } else {
        // 容器
        const block = document.createElement("div");
        block.className = "char-block";

        // 竖线
        const line = document.createElement("div");
        line.className = "line";

        // 随机高度
        const h = 60 + Math.random() * 60;
        line.style.height = h + "px";

        // 随机动画延迟（柔和下落）
        const delay = Math.random() * 0.6;
        line.style.animationDelay = `${delay}s, 0s`;

        // 随机摆动速度
        const swaySpeed = 3 + Math.random() * 2;
        line.style.animationDuration = `0.8s, ${swaySpeed}s`;

        // 字母
        const letter = document.createElement("div");
        letter.className = "char";
        letter.textContent = char;

        block.appendChild(line);
        block.appendChild(letter);
        container.appendChild(block);
    }
}
