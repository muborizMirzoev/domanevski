const home = document.querySelector('.nav__home');
const services = document.querySelector('.nav__services');
const projects = document.querySelector('.nav__projects');

const mainHome = document.querySelector('.main__home');
const mainSercives = document.querySelector('.main__sercives');
const mainProjects = document.querySelector('.main__projects');


home.addEventListener('click', (e) => {
  console.log(e.target.className);
  if (e.target.className.includes('nav__home')) {
    home.style.color = '#6877fa';
    services.style.color = '#293179';
    projects.style.color = '#293179';
    mainProjects.style.display = 'none';
    mainSercives.style.display = 'none';
    mainHome.style.display = 'block';
  }
});

services.addEventListener('click', (e) => {
  if (e.target.className.includes('nav__services')) {
    home.style.color = '#293179';
    services.style.color = '#6877fa';
    projects.style.color = '#293179';
    mainProjects.style.display = 'none';
    mainSercives.style.display = 'block';
    mainHome.style.display = 'none';
  }
});

projects.addEventListener('click', (e) => {
  if (e.target.className.includes('nav__projects')) {
    home.style.color = '#293179';
    services.style.color = '#293179';
    projects.style.color = '#6877fa';
    mainProjects.style.display = 'block';
    mainSercives.style.display = 'none';
    mainHome.style.display = 'none';
  }
});

