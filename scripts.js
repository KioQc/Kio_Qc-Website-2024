document.addEventListener('DOMContentLoaded', function() {
    var enButton = document.getElementById('enbutton');
    var frButton = document.getElementById('frbutton');
    var enElements = document.querySelectorAll('.lang.en');
    var frElements = document.querySelectorAll('.lang.fr');

    enButton.addEventListener('click', function() {
        enElements.forEach(function(element) {
            element.style.display = 'block';
        });
        frElements.forEach(function(element) {
            element.style.display = 'none';
        });
    });

    frButton.addEventListener('click', function() {
        enElements.forEach(function(element) {
            element.style.display = 'none';
        });
        frElements.forEach(function(element) {
            element.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('.content-section');
    var closeButtons = document.querySelectorAll('.close-btn');
    var subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    var photoCategories = document.querySelectorAll('.photo-category');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (link.classList.contains('active')) {
                sections.forEach(function(section) {
                    section.classList.remove('active');
                });
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                return;
            }

            links.forEach(function(link) {
                link.classList.remove('active');
            });

            link.classList.add('active');

            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            var target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
    

    subcategoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            subcategoryButtons.forEach(function(button) {
                button.classList.remove('active');
            });

            button.classList.add('active');

            var target = button.getAttribute('data-target');
            photoCategories.forEach(function(category) {
                if (category.id === target) {
                    category.classList.add('active');
                } else {
                    category.classList.remove('active');
                }
            });
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            links.forEach(function(link) {
                link.classList.remove('active');
            });
        });
    });
});
