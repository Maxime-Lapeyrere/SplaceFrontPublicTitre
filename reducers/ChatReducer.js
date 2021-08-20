

const initialState ={
    // 
    chat: {
            'chat001': { // id de conversation 
                reciever : {name: "Neymar JR", image: require('../assets/neymar.jpg'), key:'3'}, // à remplacer avec le user id 
                messages : [
                    {   id: 'MSG420125',
                        sender: 'user',
                        date : '26-07-2021',
                        content: 'Hello neymar, what do u think about an upgrade ?'
                    },
                    {   id: 'MSG420263',
                        sender: 'neymar Jr',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    }
                ]
            },
            'chat002': { // id de conversation 
                reciever : { name: "Mohamed" , image: require('../assets/sunset_in_paris.jpg') , key: '1'}, // à remplacer avec le user id 
                messages : [
                    {   id: 'MSG420125',
                        sender: 'user',
                        date : '26-07-2021',
                        content: 'Hello mohamed, what do u think about an upgrade ?'
                    },
                    {   id: 'MSG420283',
                        sender: 'mohamed',
                        date : '26-07-2021',
                        content: 'salut comment ça va ?'
                    },
                    {   id: 'MSG427125',
                        sender: 'user',
                        date : '26-07-2021',
                        content: 'Hello neymar, what do u think about an upgrade ?'
                    },
                    {   id: 'MSG420263',
                        sender: 'neymar Jr',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    },
                    {   id: 'MSG42525',
                        sender: 'user',
                        date : '26-07-2021',
                        content: 'Hello neymar, what do u think about an upgrade ?'
                    },
                    {   id: 'MSG426263',
                        sender: 'neymar Jr',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    }
                ],
            'chat004': { // id de conversation 
                    reciever : {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
                    messages : [
                        {   id: 'MSG420263',
                        sender: 'neymar Jr',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    },
                    
                    ]
                }
            },
            'chat005': { // id de conversation 
                reciever : {name: "leonel messi", image: require('../assets/messi.jpg'), key:'6'},
                messages : [
                    {   id: 'MSG420263',
                        sender: 'neymar Jr',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    }
                ]
            },
            'chat007': { 
                reciever : {name: "kelly",image: require('../assets/kelly.jpg'), key:'4'},
                messages : [
                    {   id: 'MSG420411',
                        sender: 'Kelly',
                        date : '26-07-2021',
                        content: 'yes sure why not !'
                    }
                ]
            }
    }
 }
 
 
 export  const ChatReducer =(state = initialState, action)=>{
     switch(action.type){
         case 'sendMessage': 
         
            const chatState ={...state.chat}
            chatState[action.chatID].messages = [action.message,...chatState[action.chatID].messages]
            console.log(chatState)
            return {...state,chat: chatState}


            
           
        default: return state ; 
     }
        
 }