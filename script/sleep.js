const images = document.querySelectorAll('.image');
let currentIndex = images.length - 1; // Start from the last image
let stopSequence = false; // Flag to stop the sequence

// Function to change the active image
function showNextImage() {
    // Check if the sequence should stop
    if (stopSequence) {
        images.forEach((img) => img.classList.remove('active'));
        images[currentIndex].classList.add('active'); // Keep only the sleepyDog active
        return;
    }

    // Remove 'active' class from all images
    images.forEach((img) => img.classList.remove('active'));
    
    // Add 'active' class to the current image
    images[currentIndex].classList.add('active');
    
    // Check if the current image is the sleepyDog.png
    if (images[currentIndex].alt === "Sleepy Dog") {
        stopSequence = true; // Stop the sequence
    } else {
        // Update index to the previous image
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loops back to the end
    }
}

// Set an interval to call showNextImage every 2 seconds (2000ms)
setInterval(showNextImage, 2000);

// Start with the last image visible
showNextImage();
