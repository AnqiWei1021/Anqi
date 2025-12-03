document.addEventListener("DOMContentLoaded", () => {
    const text = "I think therefore I am.";
    const container = document.getElementById("text-container");

    text.split("").forEach((char, index) => {
        const block = document.createElement("div");
        block.className = "block";

        const line = document.createElement("div");
        line.className = "line";

        // 线条长度（较短 & 差异不大）
        const length = 120 + Math.random() * 30;
        line.style.height = `${length}px`;

        // 动画延迟
        line.style.animationDelay = `${index * 0.10}s`;

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = char;
        letter.style.animationDelay = `${index * 0.12 + 0.4}s`;

        block.appendChild(line);
        block.appendChild(letter);
        container.appendChild(block);
    });
});
