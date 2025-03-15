document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector("#newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        alert("Please enter your email address.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    });
  }

  const faqAccordion = document.querySelector("#faqAccordion");
  if (faqAccordion) {
    faqAccordion.addEventListener("click", function (e) {
      if (e.target.classList.contains("accordion-button")) {
        const button = e.target;
        const collapseTarget = button.getAttribute("data-bs-target");
        const collapseElement = document.querySelector(collapseTarget);

        if (collapseElement.classList.contains("show")) {
          collapseElement.classList.remove("show");
        } else {
          document
            .querySelectorAll(".accordion-collapse.show")
            .forEach((item) => {
              item.classList.remove("show");
            });
          collapseElement.classList.add("show");
        }
      }
    });
  }

  const galleryImages = document.querySelectorAll("#gallery img");
  galleryImages.forEach((image) => {
    image.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });
    image.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  const cards = document.querySelectorAll("#types .card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
