var currentSlide = 1; // Start with the first slide

function showSlide(n) {
    var totalSlides = 3; // Change this to the total number of images in your slider
    currentSlide = (n > totalSlides) ? 1 : (n < 1) ? totalSlides : n; //if n greater than total slides, then set current slide to 1,
    //if n less than 1, then set current slide to total slides,
    //if n is between 1 and total slides, then set current slide to n

    var sliderImage = document.getElementById("slider-image");
    var caption = document.getElementById("caption");

    // Change the image source and caption based on the current slide
    sliderImage.src = "image" + currentSlide + ".jpg";
    caption.innerHTML = "Caption " + currentSlide;
}



function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Call showSlide to display the initial slide
showSlide(currentSlide);


// JavaScript functions for button interactions and form validation
function changeBackgroundColour() {
    // Change the background color of the "interests" section to peach
    var interestsSection = document.getElementById("interests");
    interestsSection.style.backgroundColor = "#ffad99"; // Peach
}

function toggleVisibility() {
    var aboutSection = document.getElementById("about");
    
    // Get the computed style of the element
    var computedStyle = window.getComputedStyle(aboutSection);

    // Check if the computed style is "none" or "block"
    if (computedStyle.display === "none") {
        aboutSection.style.display = "block";
    } else {
        aboutSection.style.display = "none";
    }
}


function validateForm() {
    // Validate the form before submission
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    // Check if required fields are empty
    if (name === "" || email === "" || comment === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
