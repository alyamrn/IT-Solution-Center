// dark-mode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode');

    // Check if dark mode preference is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state
    if (isDarkMode) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode-variables')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode-variables');
        darkModeToggle.querySelector('span:nth-child(1)').classList.remove('active');
        darkModeToggle.querySelector('span:nth-child(2)').classList.add('active');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode-variables');
        darkModeToggle.querySelector('span:nth-child(1)').classList.add('active');
        darkModeToggle.querySelector('span:nth-child(2)').classList.remove('active');
        localStorage.setItem('darkMode', null);
    }
});
