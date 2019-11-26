DB.collection('Chats').doc('Chat 2').onSnapshot(chatsDB => {
    chatNumber = chatsDB.data();
    console.log(chatNumber)
})

function addUser(event){
    let username = document.getElementById('myName');
    let groupId = document.getElementById('groupId')

    if(groupId.value == id){
        DB.collection('Chats').doc(id).collection('Users').set({
            name: username.nodeValue
        })
    }
}
