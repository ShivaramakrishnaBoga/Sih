const stars = document.querySelectorAll('.rating i');
const feedbackTextarea = document.querySelector('.student-feedback textarea');
const submitButton = document.querySelector('.submit-feedback');
const feedbackMessage = document.querySelector('.feedback-message');
let rating = 0;

// Handle star rating
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (star.classList.contains('active')) {
            // Unselect the star and all subsequent stars
            stars.forEach((s, i) => {
                if (i >= index) s.classList.remove('active');
            });
            rating--;
        } else {
            // Select the star and all previous stars
            stars.forEach((s, i) => {
                if (i <= index) s.classList.add('active');
            });
            rating = index + 1;
        }
    });
});

// Handle form submission
submitButton.addEventListener('click', () => {
    const feedbackText = feedbackTextarea.value.trim();

    if (rating === 0) {
        feedbackMessage.textContent = 'Please select a rating.';
        feedbackMessage.classList.remove('success');
        feedbackMessage.classList.add('error');
        return;
    }

    if (!feedbackText) {
        feedbackMessage.textContent = 'Please enter your feedback.';
        feedbackMessage.classList.remove('success');
        feedbackMessage.classList.add('error');
        return;
    }

    // Show success message
    feedbackMessage.textContent = 'Thank you for your feedback!';
    feedbackMessage.classList.remove('error');
    feedbackMessage.classList.add('success');

    // Clear form
    feedbackTextarea.value = '';
    stars.forEach(star => star.classList.remove('active'));
    rating = 0;

    // Remove message after 3 seconds
    setTimeout(() => {
        feedbackMessage.textContent = '';
    }, 1000);
});
