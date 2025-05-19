const qualities = [
    "a Web Developer",
    "a Designer",
    "a Creative Thinker",
    "Passionate about Coding",
    "a Problem Solver",
];

let currentItem = 0;
const dynamicText = document.getElementById('dynamic-text');
let isDeleting = false;
let text = '';
let typingSpeed = 150;

function typeWriter() {
    const currentQuality = qualities[currentItem];
    
    if (!isDeleting) {
        text = currentQuality.substring(0, text.length + 1);
    } else {
        text = currentQuality.substring(0, text.length - 1);
    }

    dynamicText.textContent = text;

    if (!isDeleting && text === currentQuality) {
        typingSpeed = 1000;
        isDeleting = true;
    } else if (isDeleting && text === '') {
        isDeleting = false;
        currentItem = (currentItem + 1) % qualities.length;
        typingSpeed = 150;
    } else {
        typingSpeed = isDeleting ? 75 : 150;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect
typeWriter();