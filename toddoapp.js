// const div = document.querySelector('div')
// let fruits = ['apple' , 'banana','orange' , 'anar', 'grapes']
// for (let i = 0; i < fruits.length; i++) {

//     div.innerHTML += `<p>${fruits[i]}</p>`;

// }


// function render() {
//     for (let i = 0; i < jawad.length; i++) {

        
//     }



// }



const inputs = document.querySelector('#todo')
const ol = document.querySelector('ol')
let jawad = []

function addtodo() {
    jawad.push(inputs.value)
    ol.innerHTML = ``
    console.log(jawad);
    inputs.value = '';
    
    for (let i = 0; i < jawad.length; i++) {
        
        ol.innerHTML += `<p>
        ${jawad[i]} 
        <button onclick="deleted()">delete</button>
        <button onclick="edit()">edit</button>
        </p>`;
    }

}
function deleted() {
    
}