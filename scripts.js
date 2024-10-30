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



//project
document.addEventListener('DOMContentLoaded', function() {
  
  const books = document.querySelectorAll('.book');
  
  books.forEach(book => {
    
  const prevBtn = book.nextElementSibling.querySelector('.prev-btn');
  const nextBtn = book.nextElementSibling.querySelector('.next-btn');
  const papers = book.querySelectorAll('.paper');
  let currentLocation = 0;
  
  function flipToPage(pageIndex) {
  papers.forEach((paper, index) => {
  if (index === pageIndex) {
  paper.classList.remove('flipped'); // Show the front
  } else if (index === pageIndex + 1) {
  paper.classList.add('flipped'); // Show the back
  } else {
  paper.classList.remove('flipped'); // Hide others
  }
  });
  currentLocation = pageIndex + (pageIndex + 1 === papers.length ? -1 : +0);
  }
  
  function goNextPage() {
  if (currentLocation + 1 < papers.length) { // Check if there's a next page
  flipToPage(currentLocation + 1);
  }
  }
  
  function goPrevPage() {
  if (currentLocation > -1) { // Check if there's a previous page
  flipToPage(currentLocation - (currentLocation === -1 ? -0 : +0));
  }
  }
  
  // Event listeners for buttons
  prevBtn.addEventListener('click', goPrevPage);
  nextBtn.addEventListener('click', goNextPage);
  });
  });
  