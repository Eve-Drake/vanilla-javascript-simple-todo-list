let todoList = []
var input = document.getElementById('input')
var todoDisplay = document.getElementById('listDisplay')

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
    listDisplay.innerHTML = ''
    for(let i =0; i < todoList.length; i++){
        let todoLi =document.createElement('li')
        todoLi.innerHTML = todoList[i].todo
        todoLi.id = todoList[i].id
        
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
    console.log('edit')
}
