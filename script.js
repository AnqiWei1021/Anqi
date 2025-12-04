/* =======================
   文字竖线下落动画（你原来的）
   ======================= */
document.addEventListener("DOMContentLoaded", () => {
    const text = "I think therefore I am.";
    const container = document.getElementById("text-container");

    if (container) {
        text.split("").forEach((char, index) => {
            const block = document.createElement("div");
            block.className = "block";

            const line = document.createElement("div");
            line.className = "line";

            const length = 140 + Math.random() * 80;
            line.style.height = `${length}px`;
            line.style.animationDelay = `${index * 0.06}s`;

            const letter = document.createElement("span");
            letter.className = "letter";
            letter.textContent = char === " " ? "\u00A0" : char;

            letter.style.animationDelay = `${index * 0.06 + 0.4}s`;

            block.appendChild(line);
            block.appendChild(letter);
            container.appendChild(block);
        });
    }

    /* =======================
       翻页书本功能（新增）
       ======================= */
    const pages = document.querySelectorAll(".page");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((p, i) => {
            p.classList.remove("active", "prev");

            if (i === index) p.classList.add("active");
            if (i === index - 1) p.classList.add("prev");
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener("click", () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }

    if (leftBtn) {
        leftBtn.addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    }

    // 初始化第一页
    showPage(0);
});
