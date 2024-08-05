// 记录上一次显示的冷知识索引
let lastIndex = -1;

// 随机加载冷知识的函数
function loadRandomFact() {
    let randomIndex;
    // 保证每次刷新显示不同的冷知识
    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    // 显示冷知识
    document.getElementById('fact').innerHTML = "你知道吗？" + facts[randomIndex];
}

// 页面加载时默认显示一条冷知识
window.onload = loadRandomFact;
