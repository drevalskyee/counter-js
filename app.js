//set count
let count = 0;

//get items from html
const value = document.getElementById('value')
const buttons = document.querySelectorAll('.btn')

//add counting functional
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0;
        }
        // add value on html page
        value.textContent = count;
    })
}) 