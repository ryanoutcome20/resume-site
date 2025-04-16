document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dmToggle');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.innerText = body.classList.contains("dark-mode") ? "☀️" : "🌙";

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
        toggleButton.innerText = isDarkMode ? "☀️" : "🌙";
    });
})