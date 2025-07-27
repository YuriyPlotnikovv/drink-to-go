const notFoundContainer = document.querySelector('.not-found');

const addAnimationsForStars = (container) => {
  const starsContainer = container.querySelector('.not-found__stars');

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2 + 2;

    star.className = 'not-found__star';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = `${Math.random() * 0.5 + 0.5}`;
    star.style.animation = `twinkle ${Math.random() * 6 + 4}s linear infinite`;

    starsContainer.appendChild(star);
  }
};

if (notFoundContainer) {
  addAnimationsForStars(notFoundContainer);
}
