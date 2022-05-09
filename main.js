let click = document.querySelector('.click')
let reset = document.querySelector('.reset')
let p = document.querySelector('p')
let num = 0

const clickCounter = () => { 
    num += 1
    p.innerHTML = num 
}

const resetClicks = () => {
    p.innerHTML = 0
    num = 0
}


reset.addEventListener('click', resetClicks)
click.addEventListener('click', clickCounter)
