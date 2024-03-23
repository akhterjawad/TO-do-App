
const inputs = document.querySelector('#todo')
const ul = document.querySelector('#ul')
let todoApp = []

function addtodo() {
    todoApp.push(inputs.value)
    ul.innerHTML = ``
    console.log(todoApp);
    inputs.value = '';
    // deleteRow()

    for (let i = 0; i < todoApp.length; i++) {

        ul.innerHTML += `<li>
        ${todoApp[i]} 
        <button class="buttons" onclick="deleted(${i})">Remove</button>
        <button class="buttons" onclick="edit(${i})">Change</button>
        </li>`;
    }

}
function deleted(indexNo) {
    console.log(`delete todo`, indexNo);
    todoApp.splice(indexNo, 1);
    deleteRow()
}

function edit(indexNo) {
    let editValue = prompt('Enter Ubbdated Value', todoApp[indexNo])

    console.log(`edit todo`, indexNo);
    todoApp.splice(indexNo, 1, editValue);
    deleteRow()
}


function deleteRow() {
    ul.innerHTML = ``
    for (let i = 0; i < todoApp.length; i++) {
        ul.innerHTML += `<li>
        ${todoApp[i]} 
        <button class="buttons" onclick="deleted(${i})">Remove</button>
        <button class="buttons" onclick="edit(${i})">Change</button>
        </li>`;
    }

}