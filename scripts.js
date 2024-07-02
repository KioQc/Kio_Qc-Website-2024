document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('data-target');
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.closest('.content-section').classList.remove('active');
    });
});
