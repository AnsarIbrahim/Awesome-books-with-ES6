const linkPage = () => {
  const links = document.querySelectorAll('nav a');
  const section = document.querySelectorAll('section');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.add('active');
      // eslint-disable-next-line no-return-assign
      section.forEach((section) => (section.style.display = 'none'));

      const sectionId = link.getAttribute('href').slice(1);
      document.getElementById(sectionId).style.display = 'block';
    });
  });

  links[2].click();
};

export default linkPage;
