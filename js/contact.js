// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    // Add event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        let isValid = true; // Track form validity

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach((field) => {
            const errorMessage = document.getElementById(`${field.id}-error`);
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                if (errorMessage) {
                    errorMessage.textContent = 'This field is required.';
                    errorMessage.style.display = 'block';
                }
                isValid = false;
            } else {
                field.style.borderColor = '#ccc';
                if (errorMessage) {
                    errorMessage.textContent = '';
                    errorMessage.style.display = 'none';
                }
            }
        });

        // If the form is valid, show a success alert and reset the form
        if (isValid) {
            alert('Your form has been submitted successfully!');
            form.reset(); // Reset the form
            // Reset all field styles
            requiredFields.forEach((field) => {
                field.style.borderColor = '#ccc';
            });
        } else {
            alert('Please fill out all required fields.');
        }
    });
});