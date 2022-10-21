'use strict'
////  Variebles/////////
let select = document.querySelector('#select');
let bread = document.querySelector('.nons');
let width = document.querySelector('.width');
let up = document.querySelector('.on');
let box = document.querySelector('.qosh');
let option = document.querySelector('option')
let wrapper = document.querySelector('.wrapper');
let wrapperItem = document.querySelector('.wrapper-item');
let check = document.querySelector('.checkbox');
let upper = document.querySelector("#upper")
let adder = document.querySelector('.addition')

////// choose type ////
select.addEventListener('change', (e) => {
    bread.textContent = `Nonning turi ${e.target.value}`
})

//////Size//////
wrapper.addEventListener('click', (e) => {
    let box = e.target.className
    if (box == 'wrapper-item bg-white') {
        width.innerHTML = ` ${e.target.textContent}`
        box.setAttribute('class ', 'wrapper-item bg-warning')
    }
})

///////check///////
let arr = []
let newArr = []
check.addEventListener('click', (e) => {
    let inputValue = e.target
    if (inputValue.name !== undefined) {
        let li = document.createElement("li")
        if (inputValue.checked == true) {
            console.log(inputValue.value);
            li.textContent = ` ${inputValue.value}`
            upper.appendChild(li)
        } else if (inputValue.checked == false) {
            upper.innerHTML = ''
        }
    }
})

// adder //
adder.addEventListener('click', (e) => {
    let plus = e.target
    let div = document.createElement('div')
    if (plus !== undefined) {
        if (plus.checked == true) {
            box.textContent = ` ${plus.value}`
        } else if (plus.checked == false) {
            box.textContent = ''
        }
    }
})


