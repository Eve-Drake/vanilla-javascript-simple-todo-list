let todoList = []
var input = document.getElementById('input')
var todoDisplay = document.getElementById('listDisplay')
const editDisplay = document.getElementById('editInput')

function addTask(){
    if(input.value === ''){
        console.err('No Text');
    }
    else{
        var newTodo = {todo: input.value, id: Math.floor(Math.random() * 100)}
        todoList = [...todoList, newTodo];
        displayTask();
        input.value = '';
    }
   
}

function displayTask(){
    todoDisplay.innerHTML = ''
    for(let i =0; i < todoList.length; i++){
        let todoLi =document.createElement('li')
        todoLi.innerHTML = todoList[i].todo
        todoLi.id = todoList[i].id
        todoLi.className = 'todo'
        
        let deleteButton = document.createElement('button')
        deleteButton.onclick = deleteTodo
        deleteButton.innerHTML = `Delete`
        todoLi.appendChild(deleteButton)

        let editButton = document.createElement('button')
        editButton.onclick = editTodo
        editButton.innerHTML = `Edit`
        todoLi.appendChild(editButton)

        todoDisplay.appendChild(todoLi)
    }
}


function deleteTodo(){
    todoList = todoList.filter(todo => todo.id != this.parentElement.id)
    displayTask()
}

function editTodo(){
    let editDiv  =document.createElement('div')

    let editInput = document.createElement('input')
    editDiv.appendChild(editInput)

    let saveEdit = document.createElement('button')
    saveEdit.innerHTML = 'Save'
    saveEdit.onclick = updateEdit
    editDiv.appendChild(saveEdit)

    let cancelEdit = document.createElement('button')
    cancelEdit.innerHTML = 'Cancel'
    cancelEdit.onclick = cancelEditForm
    editDiv.appendChild(cancelEdit)

    editDisplay.appendChild(editDiv)
}


function cancelEditForm(){
    editDisplay.innerHTML = ''
}

function updateEdit(){
    
}