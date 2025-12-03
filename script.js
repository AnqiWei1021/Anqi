// 你的标题
const title = "I think therefore I am.";

// 竖线容器
const linesContainer = document.querySelector(".lines");

// 遍历每个字母
title.split("").forEach(char => {
    if (char !== " ") {
        // 生成一条竖线
        const line = document.createElement("div");
        line.classList.add("line");

        // 设置随机高度（变化小，保持美感）
        const min = 60;
        const max = 140;
        line.style.height = (Math.random() * (max - min) + min) + "px";

        linesContainer.appendChild(line);
    } else {
        // 如果是空格，补一个占位（使字母和线条对齐）
        const spacer = document.createElement("div");
        spacer.style.width = "30px";
        linesContainer.appendChild(spacer);
    }
});
