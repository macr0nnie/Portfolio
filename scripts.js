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
