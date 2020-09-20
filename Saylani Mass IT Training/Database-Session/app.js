function saveData(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");
    var key = firebase.database().ref('student').push().key;
    var student = {
        name: name.value,
        roll: roll.value
    }
    firebase.database().ref('student/' + key).set(student);
}

// function getFirebaseData(){
//     firebase.database().ref('student').on('child_added',function(data){
//         console.log(data.val());
//     });
// }
// getFirebaseData();

// function removeFirebaseData(){
//     firebase.database().ref('student').remove();
// }
// removeFirebaseData();

function editFirebaseData(){
    firebase.database().ref('student/-MFVewyhxCdUjhoeaPmr').set({
        key: '-MFVewyhxCdUjhoeaPmr',
        name: "Sadruddin Ali",
        roll: "1957"
    })
}
editFirebaseData();