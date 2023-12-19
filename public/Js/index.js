const menuLinks = document.querySelectorAll('nav ul li a');
        const checkbox = document.getElementById('check');

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 874) {
                    checkbox.checked = false;
                }
            });
        });
//home page background img
        const backgroundImages = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

function changeBackgroundImage() {
  backgroundImages[currentImageIndex].classList.remove('active');
  
  currentImageIndex++;
  
  if (currentImageIndex >= backgroundImages.length) {
    currentImageIndex = 0;
  }
  
  backgroundImages[currentImageIndex].classList.add('active');
}

setInterval(changeBackgroundImage, 3000);
//table pagination
// Define the product data

//fetching
// Fetch products from the server
fetch('/product')
  .then((response) => response.json())
  .then((products) => {
    // Update the products array with the fetched data
    products = products.map((product) => ({
      name: product.pname,
      description: product.desc,
      quantity: product.quantity,
      provider: product.provider
    }));

    // Rest of your code to display the products
    
// Get the table body element
const tableBody = document.querySelector("table tbody");

// Define the number of products to display per page
const productsPerPage = 8;

// Calculate the number of pages
const totalPages = Math.ceil(products.length / productsPerPage);

// Initialize the current page
let currentPage = 1;

// Function to display the products for the current page
function displayProducts() {
  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Clear the table body
  tableBody.innerHTML = "";

  // Loop through the products for the current page and add them to the table
  for (let i = startIndex; i < endIndex && i < products.length; i++) {
    const product = products[i];
    const row = `
      <tr>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.quantity}</td>
        <td>${product.provider}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  }

  // Disable the previous button if on the first page
  const prevBtn = document.querySelector(".prev-btn");
  if (currentPage === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Disable the next button if on the last page
  const nextBtn = document.querySelector(".next-btn");
  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Display the products for the initial page
displayProducts();

// Add event listener for the previous button
const prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("click", () => {
  currentPage--;
  displayProducts();
});

// Add event listener for the next button
const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => {
  currentPage++;
  displayProducts();
});
    // ...
  })
  .catch((error) => {
    console.error(error);
    // Display an error message
  });




//footer
        // Make the footer stick to the bottom of the page
const body = document.querySelector('body');
const footer = document.querySelector('footer');

if (body.offsetHeight + footer.offsetHeight < window.innerHeight) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
}

// Smooth scroll to top when the "back to top" button is clicked
const backToTopBtn = document.querySelector('.back-to-top');

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
