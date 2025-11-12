// Toggle visibility of text
function toggleText() {
    var textBox = document.getElementById("text-box");
    if (textBox.innerText === "Click the button below to toggle the secret message!") {
        textBox.innerText = "The secret is: Sly Cooper is the best thief!";
    } else {
        textBox.innerText = "Click the button below to toggle the secret message!";
    }
}

// Example of a button action: Change image on button click
function changeImage() {
    var gameplayImage = document.querySelector(".gameplay img");
    if (gameplayImage) {
        gameplayImage.src = "Photos/Sly_and_the_gang_in_Goodbye_My_Sweet.webp"; // Change to a Sly Cooper-themed image
    }
}

// Show or hide the chat box using class toggles for accessibility
function showChat() {
    var chat = document.getElementById("chat");
    if (!chat) return;
    chat.classList.remove('hidden');
    chat.setAttribute('aria-hidden', 'false');
}

function hideChat() {
    var chat = document.getElementById("chat");
    if (!chat) return;
    chat.classList.add('hidden');
    chat.setAttribute('aria-hidden', 'true');
}

// Back button (example of page navigation)
function goBack() {
    window.history.back();
}

// Simulate playing a video (you could link to an actual video)
function playVideo() {
    alert("Playing Sly Cooper Trailer!");
    // You can add actual video player functionality here if needed
}

// Add functionality to play an embedded video
function playEmbeddedVideo() {
    var videoContainer = document.createElement("div");
    videoContainer.innerHTML = `
        <div class="video-overlay">
            <video controls autoplay>
                <source src="Videos/slyshortfilm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <button onclick="closeVideo()">Close</button>
        </div>
    `;
    document.body.appendChild(videoContainer);
}

function closeVideo() {
    var videoOverlay = document.querySelector(".video-overlay");
    if (videoOverlay) {
        videoOverlay.remove();
    }
}

// DOM-ready handlers for mobile nav toggle and initial ARIA states
document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle button
    var navToggle = document.querySelector('.nav-toggle');
    var mainNav = document.getElementById('main-nav');
    var navElem = document.querySelector('nav[role="navigation"]');
    if (navToggle && mainNav) {
        // ensure initial ARIA state for accessibility
        if (!navToggle.hasAttribute('aria-expanded')) navToggle.setAttribute('aria-expanded', 'false');
        if (!mainNav.hasAttribute('aria-open')) mainNav.setAttribute('aria-open', 'false');
        if (navElem && !navElem.hasAttribute('aria-open')) navElem.setAttribute('aria-open', 'false');

        navToggle.addEventListener('click', function() {
            var expanded = navToggle.getAttribute('aria-expanded') === 'true';
            var next = (!expanded).toString();
            navToggle.setAttribute('aria-expanded', next);
            mainNav.setAttribute('aria-open', next); // useful if CSS targets the ul
            if (navElem) navElem.setAttribute('aria-open', next); // keep CSS selector in sync with nav
            mainNav.classList.toggle('show');
        });

        // Close nav when clicking outside (mobile)
        document.addEventListener('click', function (e) {
            var target = e.target;
            if (!navElem) return;
            var isInside = navElem.contains(target) || navToggle.contains(target);
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            if (!isInside && isOpen) {
                navToggle.setAttribute('aria-expanded', 'false');
                mainNav.setAttribute('aria-open', 'false');
                navElem.setAttribute('aria-open', 'false');
                mainNav.classList.remove('show');
            }
        });

        // Close mobile menu if viewport becomes wide (user rotates device or resizes)
        window.addEventListener('resize', function() {
            try {
                if (window.innerWidth > 900) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    mainNav.setAttribute('aria-open', 'false');
                    if (navElem) navElem.setAttribute('aria-open', 'false');
                    mainNav.classList.remove('show');
                }
            } catch (err) {
                // ignore
            }
        });
    }

    // Ensure chat has aria-hidden when hidden
    var chat = document.getElementById('chat');
    if (chat && chat.classList.contains('hidden')) {
        chat.setAttribute('aria-hidden', 'true');
    }
});
