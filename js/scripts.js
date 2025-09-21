/* products page content effects */
document.addEventListener('DOMContentLoaded', () => {
  // Format all prices
  document.querySelectorAll('.price, .old-price').forEach(el => {
    let value = Number(el.textContent.replace(/[^0-9.-]+/g,""));
    el.textContent = value.toLocaleString('en-ET', { style: 'currency', currency: 'ETB' });
  });

  // Modal creation
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = `<span class="close-modal">&times;</span><img class="modal-img" src="">`;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.modal-img');
  const closeModal = modal.querySelector('.close-modal');

  const openModal = (imgSrc) => {
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  // Open modal on View button click
  document.querySelectorAll('.view-product').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.closest('.product-card').querySelector('img');
      openModal(img.src);
    });
  });

  // Close modal events
  closeModal.addEventListener('click', close);
  modal.addEventListener('click', e => { if(e.target === modal) close(); });
  document.addEventListener('keydown', e => { if(e.key === "Escape") close(); });
});

/* About page content effects */
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form for validation first

    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();

    let valid = true;
    let messages = [];

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      valid = false;
      messages.push("Please enter a valid email address.");
    }

    // Phone validation (digits only, at least 10 numbers)
    const phonePattern = /^[0-9]{10,15}$/; // allows 10–15 digits
    if (!phonePattern.test(phone)) {
      valid = false;
      messages.push("Please enter a valid phone number (digits only, 10–15 characters).");
    }

    if (!valid) {
      alert(messages.join("\n"));
      return;
    }

    // ✅ If valid, submit or handle
    alert("Form submitted successfully!");
    contactForm.reset();
  });
});

/* index page content effects */
document.addEventListener("DOMContentLoaded", () => {
  const ctaButtons = document.querySelectorAll(".cta .btn");

  ctaButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 20px rgba(184, 134, 11, 0.8)";
      btn.style.transition = "box-shadow 0.3s ease-in-out";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "none";
    });
  });
});
/* nav links hover effect */
document.addEventListener("DOMContentLoaded", () => {
  // Nav links hover effect
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#b8860b"; // your accent color
      link.style.textShadow = "0 0 8px rgba(184,134,11,0.7)";
      link.style.transition = "all 0.3s ease-in-out";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "";        // revert to default
      link.style.textShadow = "none";
    });
  });
});
