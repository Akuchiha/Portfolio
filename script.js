document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

   
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        header.classList.add('dark');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark');
            header.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            header.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    
    const slides = document.querySelector('.projects .slides');
    let isPaused = false;

    const autoScroll = () => {
        if (isPaused) return;
        const firstSlide = slides.firstElementChild;
        slides.appendChild(firstSlide.cloneNode(true));
        slides.removeChild(firstSlide);
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
        }, 500);
    };

    setInterval(autoScroll, 3000);

    slides.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    slides.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});
