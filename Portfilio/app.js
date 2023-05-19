const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const mobile_list = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.banner');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor= '#29323c';
    } else {
        header.style.backgroundColor='transparent';
    }
});

mobile_list.forEach((item)=>{ 
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
    
})