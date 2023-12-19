// Code for product form
document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('product-form');
  productForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const pname = document.getElementById('pname').value;
    const quantity = document.getElementById('quantity').value;
    const desc = document.getElementById('desc').value;
    const provider = document.getElementById('provider').value;

    // Create an object with product data
    const productData = { pname, quantity, desc, provider };

    // Send product data to the server using fetch() or XMLHttpRequest()
    fetch('/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        // Display a success message or redirect to another page
        //window.location.href = 'staff.html';
      })
      .catch((error) => {
        console.error(error);
        // Display an error message
      });
  });
});