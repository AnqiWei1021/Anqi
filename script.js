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

    let randomHeight = Math.floor(Math.random() * 180) + 120; // 120–300px
    line.style.height = randomHeight + "px";

    // 逐个延迟下落动画
    line.style.animationDelay = `${index * 0.12}s`;
    letter.style.animationDelay = `${index * 0.12}s`;

    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
