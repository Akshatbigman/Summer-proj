document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen for 3 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = 0;
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
            document.querySelector('.landing-page').style.opacity = 1;
        }, 500); // Give time for the fade-out transition
    }, 3000);

    // Random quotes
    const quotes = [
        "Empower yourself, empower the world.",
        "Knowledge is power. Protect your rights.",
        "Informed consumers are powerful consumers.",
        "Consumer rights are human rights.",
        "Stay informed, stay protected."
    ];

    // Display a random quote on the loading screen
    document.getElementById('loading-quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Subject links transition
    const subjectLinks = document.querySelectorAll('.subject-link');
    subjectLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const target = this.getAttribute('href');
            const currentLocation = window.location.href;

            if (currentLocation !== target) {
                document.querySelector('.landing-page').style.opacity = 0;
                setTimeout(function() {
                    window.location.href = target;
                }, 500); // Adjust the delay (in milliseconds) to match your desired transition time
            }
        });
    });
});
