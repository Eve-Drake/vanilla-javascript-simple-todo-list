let todoList = []
var input = document.getElementById('input')
var todoDisplay = document.getElementById('listDisplay')
const editDisplay = document.getElementById('editInput')

var editIdHold

function addTask(){
    if(input.value === ''){
        console.error('No Text');
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

function clearAll(){
    todoList = []
    displayTask()
}

function editTodo(){
    editIdHold = this.parentElement.id

    let editDiv = document.createElement('div')

    let editInput = document.createElement('input')
    editDiv.appendChild(editInput)

    let cancelEdit = document.createElement('button')
    cancelEdit.innerHTML = 'Cancel'
    cancelEdit.onclick = cancelEditForm
    editDiv.appendChild(cancelEdit)  
    
    let saveEdit = document.createElement('button')
    saveEdit.innerHTML = 'Save'
    editDiv.appendChild(saveEdit)

    saveEdit.onclick = updateEdit

    editDisplay.appendChild(editDiv)
}


function cancelEditForm(){
    editDisplay.innerHTML = ''
}


function updateEdit(){
    todoList.map((el) =>{
        if(el.id == editIdHold){
            return {todo: 'Hello', id: editIdHold}
        }
        else{
            return el
        }
    })
    displayTask()
    console.log(todoList)
}
