function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// 点击页面其他位置时收回菜单
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    // 如果点击的不是菜单栏或切换按钮，并且菜单栏是打开状态，则收回菜单
    if (!navbar.contains(event.target) && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
    }
});
