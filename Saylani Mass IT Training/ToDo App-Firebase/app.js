var todoList = document.getElementById('ToDo-list');

function addItem(){
    var userInput = document.getElementById('ToDo-item').value;
    document.getElementById('ToDo-item').value= " ";
    var newToDo = document.createElement('li');
    var newToDoText = document.createTextNode(userInput);
    newToDo.appendChild(newToDoText);
    newToDo.setAttribute("class","ToDo-box");
    
    var delItemBtn = document.createElement('Button');
    delItemBtn.setAttribute("class","btn-group-ToDo-item fa fa-trash");
    delItemBtn.setAttribute("onclick","deleteItem(this)");

    var editItemBtn = document.createElement('Button');
    editItemBtn.setAttribute("class","btn-group-ToDo-item fa fa-pencil");
    editItemBtn.setAttribute("onclick","editItem(this)");

    newToDo.appendChild(delItemBtn);
    newToDo.appendChild(editItemBtn);
    todoList.appendChild(newToDo);

    var key = firebase.database().ref('student').push().key;
    firebase.database().ref('ToDo/' + key).set({
        ToDoItem: userInput
    });
}

function deleteAll(){
    todoList.innerHTML = "";
    firebase.database().ref('ToDo').remove();
}
function deleteItem(e){
    var ref = firebase.database().ref("ToDo");
    ref.orderByChild("ToDoItem").equalTo(e.parentNode.firstChild.nodeValue).on("child_added", function(snapshot) {
        var delKey = snapshot.key;
        firebase.database().ref('ToDo/' + delKey).remove();
    });
    e.parentNode.remove();
}
function editItem(e){
    var editText = prompt("Edit ToDo Item",e.parentNode.firstChild.nodeValue);
    editText += " ";
    
    var ref = firebase.database().ref("ToDo");
    ref.orderByChild("ToDoItem").equalTo(e.parentNode.firstChild.nodeValue).on("child_added", function(snapshot) {
        var editKey = snapshot.key;
        firebase.database().ref('ToDo/' + editKey).update({
            ToDoItem: editText
        });
    });
    
    e.parentNode.firstChild.nodeValue = editText;
}