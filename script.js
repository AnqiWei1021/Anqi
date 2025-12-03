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

    let height = Math.floor(Math.random() * 180) + 120;
    line.style.height = height + "px";

    line.style.animationDelay = `${index * 0.12}s`;

    block.appendChild(line);
    block.appendChild(letter);
    container.appendChild(block);
});
