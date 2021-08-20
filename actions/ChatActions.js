export const addChat = (chatID,newChat) => ({ 
    type: 'addChat',
    newChat : newChat,
    chatID : chatID
});

export const sendMessage = (message,chatID) => ({ 
    type: 'sendMessage',
    message : message,
    chatID : chatID
});