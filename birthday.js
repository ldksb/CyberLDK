document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const celebrationKey = 'celebrationShown'; // 会话存储的键名
    const isCelebrationDay = today.getMonth() === 10 && today.getDate() === 26; // 检查是否是11月26日
    const hasShown = sessionStorage.getItem(celebrationKey); // 检查是否已经显示过动画

    if (isCelebrationDay && !hasShown) {
        const animation = document.getElementById('celebration-animation');
        animation.style.display = 'flex'; // 显示动画

        // 记录动画已展示的状态到会话存储
        sessionStorage.setItem(celebrationKey, 'true');

        // 设置动画5秒后开始淡出
        setTimeout(() => {
            animation.style.transition = 'opacity 1s'; // 设置淡出效果
            animation.style.opacity = '0'; // 开始淡出

            // 等待淡出完成后彻底隐藏
            setTimeout(() => {
                animation.style.display = 'none'; // 完全隐藏
            }, 1000); // 等待1秒淡出动画完成
        }, 5000); // 5秒后触发淡出
    }
});
