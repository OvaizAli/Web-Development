var myName = prompt("Enter Your Name");
var message = "";
function sendMessage(){
    message = document.getElementById("message").value;
    console.log(message);
    console.log(myName)
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
            var message_area = document.getElementById("messages");
            var new_message = document.createElement('li');
            new_message.appendChild(document.createTextNode(snapshot.val().message));
            new_message.setAttribute("class", "sent");
            // message_area.appendChild("li");
            message_area.appendChild(new_message);
            // console.log(message_area);
        }else{
            var message_area = document.getElementById("messages");
            var new_message = document.createElement('li');
            new_message.appendChild(document.createTextNode(snapshot.val().message));
            new_message.setAttribute("class", "received");
            // message_area.appendChild("li");
            message_area.appendChild(new_message);
            // console.log(message_area);
        }   
        
    });
    // console.log(message);
   
}
 displayMessage();