const text = "I think therefore I am.";
const container = document.getElementById("text-container");

// 居中容器
container.style.position = "absolute";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.display = "flex";
container.style.gap = "18px"; // 字母间距

text.split("").forEach((char, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "char-wrapper";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.position = "relative";

    // 线条长度（你要的更长版本 150–300px）
    const length = 150 + Math.random() * 150;

    // 创建线条
    const line = document.createElement("div");
    line.className = "line";
    line.style.width = "0.6px";
    line.style.height = length + "px";
    line.style.backgroundColor = "black";
    line.style.opacity = "0"; // 初始不可见（用于动画）

    // 创建字母
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;
    letter.style.fontSize = "28px";
    letter.style.fontWeight = "700";

    // 动画：线条淡入，下落
    line.style.animation = `drop 1.2s ease-out forwards ${index * 0.05}s`;
    // 动画：字母轻轻摆动（可选）
    letter.style.animation = `float 2s ease-in-out infinite alternate ${index * 0.1}s`;

    wrapper.appendChild(line);
    wrapper.appendChild(letter);
    container.appendChild(wrapper);
});
