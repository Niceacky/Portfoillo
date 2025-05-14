document.addEventListener("DOMContentLoaded", () => {
    // Select the contact form
    const contactForm = document.querySelector("section#contact form");

    // Add a submit event listener to the form
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
        alert("Your message was sent!"); // Show the success message
        contactForm.reset(); // Optionally reset the form fields
    });
});

