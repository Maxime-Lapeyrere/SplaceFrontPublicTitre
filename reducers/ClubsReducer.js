
//const teams = useSelector(state => state.Teams.teams);
const initialState ={
    clubs: [
        {   key : 'Cl01' , 
            name: 'Club Splace',
            image: require('../assets/Santos.png') ,
            members: [
                {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
                {name: "Neymar JR", images: [require('../assets/neymar.jpg')], key:'3'},
                {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
                {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'},
            ],
            leader : {name: "zin zaidan", images: [require('../assets/ZZ.jpg')], key:'5'} ,
            
            
            teams: [
                'T001',
                'T002'


           ]

        }
    ]


}


export const ClubsReducer =(state = initialState, action)=>{
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