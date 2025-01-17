// Simple form validation (optional)
document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});
