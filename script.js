// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Registration Form Handling
const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values (you can send this to a backend later)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if(name && email && phone) {
        // Show success message
        formMessage.textContent = `Thank you, ${name}! Your registration has been received. We will contact you soon.`;
        formMessage.style.display = 'block';
        formMessage.style.color = '#4caf50'; // Green
        
        // Reset form
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.style.display = 'block';
        formMessage.style.color = '#ff5252'; // Red
    }
});
