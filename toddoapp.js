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
const div = document.querySelector('div')
let jawad = []

function addtodo() {
    jawad.push(inputs.value)
    div.innerHTML = ``
    console.log(jawad);
    inputs.value = '';
    
    for (let i = 0; i < jawad.length; i++) {
        
        div.innerHTML += `<p>
        ${jawad[i]} 
        <button onclick="deleted(${i})">delete</button>
        <button onclick="edit(${i})">edit</button>
        </p>`;
    }

}
function deleted(inedxNo) {
    console.log(`delete todo`,inedxNo);
    jawad.splice(inedxNo,1);
}

function edit(inedxNo) {
    console.log(`edit todo`,inedxNo);
    jawad.splice(inedxNo,1);

}


function deleteRow() {
    div.innerHTML=``
    for (let i = 0; i < jawad.length; i++) {
        div.innerHTML += `<p>
        ${jawad[i]} 
        <button onclick="deleted(${i})">delete</button>
        <button onclick="edit(${i})">edit</button>
        </p>`;
    }
    
}