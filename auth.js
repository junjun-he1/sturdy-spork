// 登录状态检测 - 在所有页面引入
document.addEventListener('DOMContentLoaded', function() {
    // 在导航栏添加用户信息或登录链接
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    const loggedUser = localStorage.getItem('python_center_logged_in');

    if (loggedUser) {
        // 已登录：显示用户名和头像
        const userItem = document.createElement('li');
        userItem.innerHTML = `
            <a href="/profile.html" class="nav-user">
                <span class="nav-avatar">${loggedUser.charAt(0).toUpperCase()}</span>
                <span class="nav-username">${loggedUser}</span>
            </a>
        `;
        navLinks.appendChild(userItem);
    }
});
