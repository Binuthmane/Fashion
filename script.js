// Sample gallery images (replace with your own)
const galleryImages = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more images as needed
];

// Function to dynamically add gallery images
function populateGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    galleryContainer.appendChild(imgElement);
  });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Replace with your own form submission logic
  alert('Thank you for your message!');
});

// Populate gallery on page load
populateGallery();
