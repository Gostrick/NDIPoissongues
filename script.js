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

    if(window.location.pathname.includes('cauchemar.html')){
        footer.style.background = getRandomGradient();
        header.style.background = getRandomGradient();        
    }

}

setInterval(applyRandomGradient, 150);
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
// Function to move the button when the mouse approaches
function moveButton() {
    const themeButton = document.getElementById('themebutton');
    const delay = 2000; // 2 seconds

    // Check if the button is not clickable (during the delay)
    if (!themeButton.clickable) {
        // Move the button away
        themeButton.style.transform = 'translateX(-100%)';
    }
}

// Function to make the button clickable
function makeButtonClickable() {
    const themeButton = document.getElementById('themebutton');

    // Make the button clickable
    themeButton.clickable = true;

    // Reset button position
    themeButton.style.transform = 'translateX(0)';
}

// Add event listeners to handle mouse approach and button click
document.getElementById('themebutton').addEventListener('mouseover', moveButton);
document.getElementById('themebutton').addEventListener('mouseout', makeButtonClickable);
document.getElementById('themebutton').addEventListener('click', applyRandomGradient);

// Function to show a specific popup image
function showSpecificPopup(imageName) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupImage = document.getElementById('popupImage');

    // Set the specified image
    popupImage.src = imageName;

    // Show the popup
    popupOverlay.style.display = 'flex';
}

// Set an interval to show a specific popup every 3 seconds
setInterval(() => {
    // Choose the specific image you want to show
    const imageToShow = chooseRandomImageFromSet(); // Implement this function as needed
    showSpecificPopup(imageToShow);
}, 3000);

// Function to close the popup
function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}

// Add event listener to close the popup when the close button is clicked
document.getElementById('popupCloseButton').addEventListener('click', closePopup);

// Function to choose a random image from the specified set
function chooseRandomImageFromSet() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function goToCauchemar() {
    window.location.href = 'cauchemar.html'
}

function goToClean(){
    window.location.href = 'EMY OU CALISTE METTEZ UN TRUC LA'
}
// Set an interval to change the font style every second
setInterval(applyRandomFontStyle, 75);

// Call the function to apply a random font style when the page loads
applyRandomFontStyle();
