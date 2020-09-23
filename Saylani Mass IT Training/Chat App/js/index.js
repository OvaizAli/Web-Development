var myName = prompt("Enter Your Name");
while(myName == "" || myName == undefined){
    myName = prompt("Enter Your Name");
}
var message = "";
function sendMessage(){
    message = document.getElementById("message").value;
    firebase.database().ref("messages").push().set({
        "sender" : myName,
        "message" : message
    });
    document.getElementById("message").value = "";
}

function displayMessage(){
    firebase.database().ref("messages").on("child_added", function(snapshot){
        // console.log(snapshot.val().message);
    
        if(snapshot.val().sender == myName){
            if(snapshot.val().message == "This message has been removed"){
                var message_area = document.getElementById("messages");
                var new_message = document.createElement('li');
                new_message.appendChild(document.createTextNode(snapshot.val().message));
                new_message.setAttribute("class", "sent");
                message_area.appendChild(new_message);
            }else{
                var message_area = document.getElementById("messages");
                var new_message = document.createElement('li');
                var del_btn = document.createElement('Button');
                del_btn.setAttribute("class", "sent-btn fa fa-trash");
                del_btn.setAttribute("onclick","deleteItem(this)");
                new_message.appendChild(document.createTextNode(snapshot.val().message));
                new_message.setAttribute("class", "sent");
                new_message.appendChild(del_btn);
                message_area.appendChild(new_message);
            } 
        }else{
            if(snapshot.val().message == "This message has been removed"){
                var message_area = document.getElementById("messages");
                var new_message = document.createElement('li');
                new_message.appendChild(document.createTextNode(snapshot.val().message));
                new_message.setAttribute("class", "received");
                message_area.appendChild(new_message);
              
            }else{
                var message_area = document.getElementById("messages");
                var new_message = document.createElement('li');
                var del_btn = document.createElement('Button');
                del_btn.setAttribute("class", "received-btn fa fa-trash");
                del_btn.setAttribute("onclick","deleteItem(this)");
                new_message.appendChild(document.createTextNode(snapshot.val().message));
                new_message.setAttribute("class", "received");
                new_message.appendChild(del_btn);
                message_area.appendChild(new_message);
            }
        }   
    });
    // console.log(message);
}
 displayMessage();


function deleteItem(e){
    var ref = firebase.database().ref("messages");
    ref.orderByChild("message").equalTo(e.parentNode.firstChild.nodeValue).on("child_added", function(snapshot) {
        var delKey = snapshot.key;
        // firebase.database().ref('messages/' + delKey).remove();
        firebase.database().ref("messages/" + delKey).set({
            "sender" : myName,
            "message" : "This message has been removed"
        });
    });
    
    e.parentNode.innerHTML = "This message has been removed";
}