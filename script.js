const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const note = document.getElementById("form-note");
    if (note) note.textContent = "Thank you! This demo form is ready to connect to your email or backend.";
    contactForm.reset();
  });
}
