function showTab(tabId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// Function to generate a random gradient value
function getRandomGradient() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    return `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
}

// Function to generate a random color value
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply a random gradient to the header
function applyRandomGradient() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    footer.style.background = getRandomGradient();
    header.style.background = getRandomGradient();
}

setInterval(applyRandomGradient, 75);
// Call the function to apply a random gradient when the page loads
applyRandomGradient();

// Function to generate a random font style
function getRandomFontStyle() {
    const fontStyles = [
        'Arial, sans-serif',
        'Helvetica, sans-serif',
        'Times New Roman, serif',
        'Courier New, monospace',
        'Verdana, sans-serif',
        'Georgia, serif',
        'Impact, sans-serif'
        // Add more font styles as needed
    ];
    const randomIndex = Math.floor(Math.random() * fontStyles.length);
    return fontStyles[randomIndex];
}

// Function to apply a random font style to the body
function applyRandomFontStyle() {
    const body = document.body;
    body.style.fontFamily = getRandomFontStyle();
}

// Set an interval to change the font style every second
setInterval(applyRandomFontStyle, 75);

// Call the function to apply a random font style when the page loads
applyRandomFontStyle();
