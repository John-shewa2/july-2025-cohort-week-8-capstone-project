// Format all prices, including featured and on-sale items
document.querySelectorAll('.price, .old-price').forEach(el => {
  // Remove any non-digit characters first
  let value = Number(el.textContent.replace(/[^0-9.-]+/g,""));
  el.textContent = value.toLocaleString('en-ET', {
    style: 'currency',
    currency: 'ETB'
  });
});
