// Code for register form
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object with user data
    const userData = { name, email, password };

    // Send user data to the server using fetch() or XMLHttpRequest()
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        // Display a success message or redirect to another page
        window.location.href = 'staff.html';
      })
      .catch((error) => {
        console.error(error);
        // Display an error message
      });
  });
});

