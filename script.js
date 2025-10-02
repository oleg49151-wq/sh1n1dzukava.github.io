// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Проверяем при загрузке
    fadeInOnScroll();
    
    // И при скролле
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Обработка формы регистрации
    const registerForm = document.querySelector('.form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить отправку данных на сервер
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            
            alert(`Спасибо за регистрацию, ${username}! На email ${email} отправлено подтверждение. СОСО МАБОЙ`);
            
            // Очистка формы
            registerForm.reset();
        });
    }
});