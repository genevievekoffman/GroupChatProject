DB.collection('Chats').doc('Chat 2').onSnapshot(chatsDB => {
    chatNumber = chatsDB.data();
    console.log(chatNumber)
})
