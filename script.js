const text = "I think therefore I am.";
const container = document.getElementById("text-container");

// 居中容器
container.style.position = "absolute";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.display = "flex";
container.style.gap = "18px";

text.split("").forEach((char, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "char-wrapper";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";

    // 线条长度（150–300px）
    const length = 250 + Math.random() * 200;

    // ⭐ 线条超细化：0.05px
    const line = document.createElement("div");
    line.className = "line";
    line.style.width = "0.05px";        // 👈 更细线条
    line.style.height = length + "px";
    line.style.backgroundColor = "black";
    line.style.opacity = "0";

    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;
    letter.style.fontSize = "25px";
    letter.style.fontWeight = "700";

    line.style.animation = `drop 1.2s ease-out forwards ${index * 0.05}s`;
    letter.style.animation = `float 2s ease-in-out infinite alternate ${index * 0.1}s`;

    wrapper.appendChild(line);
    wrapper.appendChild(letter);
    container.appendChild(wrapper);
});
