let click = document.querySelector('.click')
let reset = document.querySelector('.reset')
let popup = document.querySelector('.popup')
let p = document.querySelector('p')
let num = 0

const clickCounter = () => { 
    num += 1
    p.innerHTML = num 

    if(p.innerHTML == 100) {
        popup.style.opacity = '1'
    } else {
        popup.style.opacity = '0'
    }
}

const resetClicks = () => {
    p.innerHTML = 0
    num = 0
}


reset.addEventListener('click', resetClicks)
click.addEventListener('click', clickCounter)
