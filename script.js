document.addEventListener("DOMContentLoaded", () => {
    const text = "I think therefore I am.";
    const container = document.getElementById("text-container");

    text.split("").forEach((char, index) => {
        const line = document.createElement("div");
        const letter = document.createElement("span");

        // 隨機高度
        const length = 250 + Math.random() * 350;

        line.className = "line";
        line.style.height = `${length}px`;
        line.style.animationDelay = `${index * 0.1}s`;

        letter.className = "letter";
        letter.textContent = char;
        letter.style.animationDelay = `${index * 0.1 + 0.5}s`;

        const block = document.createElement("div");
        block.className = "block";
        block.appendChild(line);
        block.appendChild(letter);

        container.appendChild(block);
    });
});
