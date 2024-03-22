
const inputs = document.querySelector('#todo')
const span = document.querySelector('#span')
let todoApp = []

function addtodo() {
    todoApp.push(inputs.value)
    span.innerHTML = ``
    console.log(todoApp);
    inputs.value = '';
    // deleteRow()

    for (let i = 0; i < todoApp.length; i++) {

        span.innerHTML += `<p>
        ${todoApp[i]} 
        <button onclick="deleted(${i})">delete</button>
        <button onclick="edit(${i})">edit</button>
        </p>`;
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
    span.innerHTML = ``
    for (let i = 0; i < todoApp.length; i++) {
        span.innerHTML += `<p>
        ${todoApp[i]} 
        <button onclick="deleted(${i})">delete</button>
        <button onclick="edit(${i})">edit</button>
        </p>`;
    }

}