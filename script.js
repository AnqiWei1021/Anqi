const text = "I think therefore I am.";
const container = document.getElementById("text-container");

text.split("").forEach((char, index) => {

    if (char === " ") {
        const space = document.createElement("div");
        space.style.width = "20px";
        container.appendChild(space);
        return;
    }

    const block = document.createElement("div");
    block.className = "letter-block";

    const line = document.createElement("div");
    line.className = "line";

    /* ⭐ 线条长短不一（但差距不会太大） */
    const length = 40 + Math.random() * 80;   // 40–120px
    line.style.height = length + "px";

    /* ⭐ 每条线稍微延迟掉落，让动画更自然 */
    line.style.animationDelay = `${index * 0.1}s`;

    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;

    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
