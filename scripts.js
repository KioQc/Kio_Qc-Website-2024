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





document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            
            "color": {
                "value": ["#ffffff", "#B03EC3"] 
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9b59b6",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "grab"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
