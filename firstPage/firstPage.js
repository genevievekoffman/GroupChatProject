

function createNewChat(host){
    //generates a random number between 0-1m (chat ID)
    id = Math.floor(Math.random() * 1000000);  
    id = `a${id}`;
    
    DB.collection("Chats").doc(id).collection("Users").add({username: host});
    DB.collection("Chats").doc(id).collection("Messages").add({messages: "none"})
    //DB.collection("Chats").doc(id).set({host: host});
    document.getElementById("generalLoginBox").style.display = "none"; 
    DB.collection("Chats").doc(id).set({chatID: id});
    document.getElementById("chatScreen").style.display = "";

    
}


DB.collection('Chats').doc("NEW").onSnapshot(chatsDB =>{
    console.log(chatsDB.data());
})


//create a new chat and join a chat

//when ok button is clicked --> new game is created

function createNewChatButton(event){
    event.preventDefault();
    let usernameInput = document.getElementById("username").value; 
    createNewChat(usernameInput);
}

function addUser(event){
    event.preventDefault();

    let username = document.getElementById('myName');
    let groupId = document.getElementById('groupID');

    DB.collection("Chats").doc(groupId.value).get().then(docDB=> {
        console.log(docDB.data())
        if (docDB.exists) {
            document.getElementById("generalLoginBox").style.display = "none";
            DB.collection('Chats').doc(groupId.value).collection('Users').add({username: username.value});
            document.getElementById("chatScreen").style.display = "";

        } else {
            console.log("false")
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}


function sendMsg(event){
    //send the msg to firebase
    event.preventDefault();

    let msg = document.getElementById("myText").value
    let id = document.getElementById('groupID').value;
    let user = document.getElementById('myName').value;

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes()

    DB.collection("Chats").doc(id).collection("Messages").add({message: msg, sender: user, timestamp: time})

    document.getElementById("myText").value = "";

    //shows on screen
    //document.getElementById("LastMsg").innerHTML = msg;
}



 
 