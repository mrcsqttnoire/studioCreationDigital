const nav = document.getElementById('listNav')
// const btnBurger = document.querySelector('#')
active = false
const line_1 = document.getElementById('item-1')
const line_2 = document.getElementById('item-2')
const line_3 = document.getElementById('item-3')

function activeBurger(){
    if (!active){
        nav.classList.add('activeBurger')

        line_1.classList.remove('unrotate')
        line_2.classList.remove('show')
        line_3.classList.remove('unrotate')

        line_1.classList.add('rotate45')
        line_2.classList.add('delete')
        line_3.classList.add('rotate-45')
        active = true
        console.log(nav)
    } else {
        nav.classList.remove('activeBurger')
        line_1.classList.remove('rotate45')
        line_2.classList.remove('delete')
        line_3.classList.remove('rotate-45')

        line_1.classList.add('unrotate')
        line_2.classList.add('show')
        line_3.classList.add('unrotate')
        active = false
    }

}

const home = document.getElementById('acceuilNav');
const about = document.getElementById('aboutNav');
const service = document.getElementById('serviceNav');
const testimonial = document.getElementById('temoignageNav');
const contact = document.getElementById('contactNav');

const line = document.querySelector('.selected__line')

document.querySelectorAll('.nav').forEach(function(btn) {
    btn.addEventListener('click', () => {
        if(btn.id === about.id){
            about.classList.add('selected')
            home.classList.remove('selected')
            service.classList.remove('selected')
            testimonial.classList.remove('selected')
            about.classList.remove('selected')
            contact.classList.remove('selected')

            line.style.left = about.offsetLeft  + "px"
            line.style.width = about.offsetWidth + "px"
        } 
        else if(btn.id === service.id){
            about.classList.remove('selected')
            home.classList.remove('selected')
            service.classList.add('selected')
            testimonial.classList.remove('selected')
            about.classList.remove('selected')
            contact.classList.remove('selected')

            line.style.left = service.offsetLeft + "px"
            line.style.width = service.offsetWidth + "px"
        } 
        else if(btn.id === testimonial.id){
            about.classList.remove('selected')
            home.classList.remove('selected')
            service.classList.remove('selected')
            testimonial.classList.add('selected')
            about.classList.remove('selected')
            contact.classList.remove('selected')

            line.style.left = testimonial.offsetLeft + "px"
            line.style.width = testimonial.offsetWidth + "px"
        } 
        else if(btn.id === contact.id){
            about.classList.remove('selected')
            home.classList.remove('selected')
            service.classList.remove('selected')
            testimonial.classList.remove('selected')
            about.classList.remove('selected')
            contact.classList.add('selected')

            line.style.left = contact.offsetLeft + "px"
            line.style.width = contact.offsetWidth + "px"
        } 
        else {
            about.classList.remove('selected')
            home.classList.add('selected')
            service.classList.remove('selected')
            testimonial.classList.remove('selected')
            about.classList.remove('selected')
            contact.classList.remove('selected')

            line.style.left = home.offsetLeft + "px"
            line.style.width = home.offsetWidth + "px"
        } 

    });
});
