const text = "I think therefore I am.";
const container = document.getElementById("text-container");

text.split("").forEach(char => {

    if (char === " ") {
        // 空格部分给一个水平间隔
        const space = document.createElement("div");
        space.style.width = "20px";
        container.appendChild(space);
        return;
    }

    const block = document.createElement("div");
    block.className = "letter-block";

    const line = document.createElement("div");
    line.className = "line";

    // 线条长短不一（但差别不会太夸张）
    const randomLength = 60 + Math.random() * 120; 
    line.style.height = randomLength + "px";

    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;

    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
