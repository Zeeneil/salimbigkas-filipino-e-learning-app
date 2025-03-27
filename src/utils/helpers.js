export const handleLogin = () => {
    const loginButton = document.querySelector('.login');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.style.display = 'block';
            }
        });
    }
};