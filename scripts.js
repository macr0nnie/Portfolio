(function () {
  emailjs.init("bQTGHZcklzYHbUzby"); // Replace with your actual EmailJS user ID
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_o7oy1nh", "template_q64hqrj", this).then(
      function () {
        console.log("SUCCESS!");
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  });

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const sidebarTrigger = document.querySelector('.sidebar-trigger');
  const mainContent = document.querySelector('.main-content');

  if (sidebarTrigger && sidebar && mainContent) {
    sidebarTrigger.addEventListener('mouseenter', function () {
      sidebar.classList.add('active');
      mainContent.classList.add('sidebar-active');
    });

    sidebar.addEventListener('mouseleave', function () {
      sidebar.classList.remove('active');
      mainContent.classList.remove('sidebar-active');
    });
  } else {
    console.error('Sidebar elements not found');
  }
});

document.querySelectorAll('.project-card').forEach(card => {
  const images = card.querySelectorAll('.project-image');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
  }

  // Automatically change images every few seconds
  setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
      showImage(currentIndex);
  }, 3000); // Change image every three seconds
});

