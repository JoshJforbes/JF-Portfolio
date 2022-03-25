const menu_btn = document.querySelector('.hamburger-wrapper');
const backsplash = document.querySelector('.backsplash');
const backsplash_two = document.querySelector('.backsplash-2');
const home_item = document.querySelector('.home-item');
const project_item = document.querySelector('.project-item');
const about_item = document.querySelector('.about-item');
const resume_item = document.querySelector('.resume-item');
const logo = document.querySelector('.logo');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('hamburger-wrapper-is-active');
    backsplash.classList.toggle('backsplash-active');
    backsplash_two.classList.toggle('backsplash-2-active');
    home_item.classList.toggle('home-item-active');
    project_item.classList.toggle('project-item-active');
    about_item.classList.toggle('about-item-active');
    resume_item.classList.toggle('resume-item-active');
    logo.classList.toggle('logo-active');
});