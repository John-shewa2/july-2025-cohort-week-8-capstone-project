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
