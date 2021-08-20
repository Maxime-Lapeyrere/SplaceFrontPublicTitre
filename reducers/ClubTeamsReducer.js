
//const teams = useSelector(state => state.Teams.teams);
const initialState ={
    clubTeams: {
      'T001' : {   key : 'T001' , 
            name: 'team Splace',
            image: require('../assets/other_worlds.jpg') ,
            members: [
                {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
                {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
                {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
                {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
            ],
            leader : {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'} ,
            history : null , 
            calendar : null , 
            
            posts: [
            /*{id : '0001', content: 'lorem ipsum dolor sit amet' , poster: id du personne qui a posté, likes: 2 , dislikes: 1 , comments:[]    }      */ 
            {
                poster: {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
                id : 'P001',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                likes : 44 ,
                date: '07/07/2021' , 
                comments:[
                    {
                        poster: {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
                        id : 'P002',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        likes : 2 ,
                        date: '07/07/2021' , 
                        comments:[
                           
                                
                        ]
                    }
                ]

            } ,
            {
                poster: {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
                id : 'P002',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                likes : 44 ,
                date: '07/07/2021' , 
                comments:[
                    
                ]

            }     
           ]

        },

        'T002': 
            { 
            key : 'T002' , 
            name: 'team Space',
            image: require('../assets/other_worlds.jpg') ,
            members: [
                {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
                {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
                {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
                {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
            ],
            leader : {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'} ,
            history : null , 
            calendar : null , 
            
            posts: [
            /*{id : '0001', content: 'lorem ipsum dolor sit amet' , poster: id du personne qui a posté, likes: 2 , dislikes: 1 , comments:[]    }      */ 
            
            ]

            }
    }


}


export const ClubTeamsReducer =(state = initialState, action)=>{
switch(action.type){
    
   
    // case 'addMembers': 
    // const index = state.teams.findIndex(teams => teams.key ==action.teamID); //finding index of the item
    // const newArray = [...state.teams]; //making a new array
    // newArray[index].members = [...newArray[index].members, ...action.newMembers]//changing value in the new array
    // return { 
    //  ...state, //copying the orignal state
    //  teams: newArray, //reassingning teams to new array
    // }
   
   default: return state ; 
}
   
}