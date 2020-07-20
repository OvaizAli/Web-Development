var list = document.getElementById("list");

function addItem(){
var todo = document.getElementById('ToDo-list').value;
var li = document.createElement('li');
todo += " "; 
var liText = document.createTextNode(todo);
li.appendChild(liText);
li.setAttribute("class","li")


var delBtn = document.createElement('button');
var delText = document.createTextNode("Delete");
delBtn.appendChild(delText);
delBtn.setAttribute("onclick","deleteItem(this)");
li.appendChild(delBtn);

var edBtn = document.createElement('button');
var edText = document.createTextNode("Edit");
edBtn.appendChild(edText);
edBtn.setAttribute("onclick","editItem(this)");
li.appendChild(edBtn);

list.appendChild(li);
}

function delAllItem(){
    list.innerHTML = "";
}
function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var eText = prompt("Edit ToDo Item",e.parentNode.firstChild.nodeValue);
    eText += " ";
    e.parentNode.firstChild.nodeValue = eText;
}