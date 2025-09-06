document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal-subscription');
  const openBtn = document.querySelector('.subscription-open');
  const closeBtn = document.querySelector('.modal-btn');
  const closeIcon = document.querySelector('.modal-icon-close');

  if (!modal || !openBtn || !closeBtn || !closeIcon) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  const closeModal = () => modal.classList.remove('active');

  closeBtn.addEventListener('click', closeModal);
  closeIcon.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
