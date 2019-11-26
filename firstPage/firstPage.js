function createNewChat(host){
    //generates a random number between 0-1m (chat ID)
    id = Math.floor(Math.random() * 1000000);  
    id = `a${id}`;
    
    DB.collection("Chats").doc(id).collection("Users").add({username: host}.then(doc=>{checkIDexists(id)}));
    DB.collection("Chats").doc(id).collection("Messages").add({messages: "none"})
    //DB.collection("Chats").doc(id).set({host: host});
    document.getElementById("generalLoginBox").style.display = "none";
    

    DB.collection("Chats").doc(id).set({chatID: id});
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
     
    console.log("checking: " + checkIDexists(groupId.value))
    if(checkIDexists(groupId.value)){
        document.getElementById("generalLoginBox").style.display = "none";
        DB.collection('Chats').doc(id).collection('Users').add({
            username: username.value
        })
    }
}

//collection document docDB .exists()

function checkIDexists(groupID){
    console.log(groupID)
    DB.collection("Chats").doc(groupID).get().then(docDB=> {
        console.log(docDB.data())
        if (docDB.exists) {
            console.log("true")
            //return true;
        } else {
            console.log("false")
            //return false;
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}