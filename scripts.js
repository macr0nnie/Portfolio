(function () {
  emailjs.init("luvronnie906@gmail.com"); // Replace with your actual EmailJS user ID
})();
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_o7oy1nh", "template_l9goeik", this).then(
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
