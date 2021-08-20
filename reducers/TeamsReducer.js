const initialState ={
    teams: [
   
    {name: "Team Splace", 
    image: require('../assets/sunset_in_paris.jpg'), 
    key:'1',
    members: [
        {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
        {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
        {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
        {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
    ],
    leader: {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
    lastMessage: {user:{name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'24'}, 
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' ,
    key: '14',
    history: null ,
    calendar: null 
     }

    },
    {
    name: "Team nice", 
    image: require('../assets/sunset_in_paris.jpg'), 
    key:'2',
    members: [
        {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
        {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
        {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
        {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
    ],
    leader: {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
    lastMessage: {
    user:{name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'24'}, 
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' ,
    key: '20',
    history: null ,
    calendar: null 

     }
    },
    {name: "Team space", 
    image: require('../assets/sunset_in_paris.jpg'), 
    key:'3',
    members: [
        {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
        {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
        {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
        {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
    ],
    leader: {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'}
    , 
    lastMessage: {user:{name: "Neymar JR", images:[ require('../assets/neymar.jpg')], key:'24'}, 
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' ,
    key: '9',
    history: null ,
    calendar: null 
     }
    }

]
}


export const TeamsReducer =(state = initialState, action)=>{
switch(action.type){
    case 'createTeam' : 
    return {...state,teams:[...state.teams, action.newTeam]};
    break;
    case 'addMembers': 
    const index = state.teams.findIndex(teams => teams.key ==action.teamID); //finding index of the item
    const newArray = [...state.teams]; //making a new array
    newArray[index].members = [...newArray[index].members, ...action.newMembers]//changing value in the new array
    return { 
     ...state, //copying the orignal state
     teams: newArray, //reassingning teams to new array
    }
   
   default: return state ; 
}
   
}