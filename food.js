// JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('message-response').textContent = 'Thank you for reaching out! We will get back to you soon.';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('message-response').textContent = 'Please fill in all fields.';
    }
});
