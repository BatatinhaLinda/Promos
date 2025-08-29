// Menu mobile toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('active');
    });
});