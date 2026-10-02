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

const header = document.getElementById('header')
window.addEventListener('resize', () => {
    if(header.offsetWidth >= 992){
        nav.classList.remove('activeBurger')
        line_1.classList.remove('rotate45')
        line_2.classList.remove('delete')
        line_3.classList.remove('rotate-45')

        line_1.classList.add('unrotate')
        line_2.classList.add('show')
        line_3.classList.add('unrotate')
    }
})


const ref = document.querySelectorAll('.nav');
const line = document.querySelector('.selected__line')

ref.forEach(function(btn) {
    btn.addEventListener('click', () => {
        ref.forEach((ref) => {
            if (btn.id == ref.id){
                btn.classList.add('selected')
                line.style.left = btn.offsetLeft + "px"
                line.style.width = btn.offsetWidth + "px"
            } else {
                ref.classList.remove('selected')
            }
        })
    });
});

// const obsever = new IntersectionObserverEntry((affiched) => {
//     affiched.forEach(section => {
//         if(section.isIntersecting){
//             console.log(ok)
//         }
//     })
// }, {
//     threshold: 0.1
// })

// obsever.observe(document.getElementById('about'))
