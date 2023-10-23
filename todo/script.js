


var todos = [];

function toDo() {
    var newListObj = document.getElementById('inputList').value;
    todos.push(newListObj); 
    document.getElementById('inputList').value = '';
    printTodos(); 
    
}

function finItem() {
    if (!this.classList.contains("stricken")) {
        this.classList.add("stricken");
        this.classList.remove("active");
    } else if (this.classList.contains("stricken")) {
        this.classList.add("active");
        this.classList.remove("stricken");
    }
}

function printTodos() {
    var toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';

    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        var div = document.createElement('div'); 
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.class ="text-right"
        div.textContent = todos[i];
        div.appendChild(checkbox);
        div.onclick = finItem; 
        li.appendChild(div); 
        
        toDoList.appendChild(li);
    }

}

function deleteCheckedItems() {
    for (var i = todos.length - 1; i >= 0; i--) {
        var listItemElement = document.getElementById('toDoList').children[i];
        var checkbox = listItemElement.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            todos.splice(i, 1); // Remove the checked item from the array
            listItemElement.remove(); // Remove the item from the list
        }
    }
}

document.getElementById('submit').addEventListener('click', function (event) {
    toDo();
});

document.getElementById('deleteChecked').addEventListener('click', function (event) {
    deleteCheckedItems();
});

window.onload = function () {
    printTodos();
};