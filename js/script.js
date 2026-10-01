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
