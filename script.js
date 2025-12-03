const text = "I think therefore I am.";
const container = document.getElementById("text-container");

text.split("").forEach((char, index) => {
    const block = document.createElement("span");
    block.className = "letter-block";

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = char;

    const line = document.createElement("div");
    line.className = "line";

    // ⭐ 让线条更明显长短不一（80px - 260px）
    let height = Math.floor(Math.random() * 180) + 80;
    line.style.height = height + "px";

    // 落下动画延迟
    line.style.animationDelay = `${index * 0.12}s`;

    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
