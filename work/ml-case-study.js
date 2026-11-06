// Progressive enhancement: images remain ordinary links if <dialog> is unsupported.
const lightbox = document.getElementById('ml-lightbox');
const lightboxImage = document.getElementById('ml-lightbox-image');
const lightboxCaption = document.getElementById('ml-lightbox-caption');
const closeLightbox = document.getElementById('ml-lightbox-close');

if (lightbox && lightboxImage && typeof lightbox.showModal === 'function') {
  document.querySelectorAll('a.ml-zoom').forEach(link => {
    link.addEventListener('click', event => {
      // Modifier-key clicks continue to open the original figure in another tab.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = link.querySelector('img');
      lightboxImage.src = link.getAttribute('href');
      lightboxImage.alt = image?.alt || 'Expanded research figure';
      lightboxCaption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent || 'Original research figure';
      lightbox.showModal();
    });
  });
  closeLightbox?.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => lightboxImage.removeAttribute('src'));
}
