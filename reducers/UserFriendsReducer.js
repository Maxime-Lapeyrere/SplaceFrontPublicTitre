const initialState ={
    userFriends: [        

    {
        name: "Mohamed" ,
        images: [require('../assets/sunset_in_paris.jpg'),
                 require('../assets/other_worlds.jpg'),
                 require('../assets/pdp.jpg')
        ] 
        , 
        key: '1',
        city:'Villetaneuse',
        job : 'étudiant' ,
        age:20, 
        sports: [
                    {name: "football" , icon:'football' , color: '#B0D8E7' ,logo: require('../assets/sports/football.png') ,key: '1'},

                ],
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        chatID : 'chat002' // if existe pas  chatID = null  
      },
      {
        name: "Neymar JR", 
        images: [require('../assets/neymar.jpg')]
        , 
        key:'3' ,
        city:'Brazil',
        job : 'footballer' , 
        age:29,
        sports: [],
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        chatID :'chat001'
      },
      {
        name: "kelly", 
        images: [require('../assets/kelly.jpg')] 
        , 
        key:'4',
        city:'no idea',
        job : 'footballer' , 
        age:29, 
        sports: [ ] ,
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        chatID :  'chat007'
      },
       
     ]
  

  ,
  selectedFriends : [

  ],
  friendRequests : [
    {
      name: "Neymar JR", 
      images: [require('../assets/neymar.jpg')]
      , 
      key:'33' ,
      city:'Brazil',
      job : 'footballer' , 
      age:29,
      sports: [],
      bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      chatID :null
    }
  ]

}


export  const UserFriendsReducer =(state = initialState, action)=>{
switch(action.type){
  case 'selectFriends':
    return {...state,selectedFriends: action.selectedFriends}

    case 'declineFriend':
      const newArray = state.friendRequests.filter(friend => friend.key != action.profile)
      return {...state,friendRequests: newArray}
    case 'acceptFriend':
      
      return {...state,userFriends:[...state.userFriends, action.friend]}
   default: return state ; 
}
   
}