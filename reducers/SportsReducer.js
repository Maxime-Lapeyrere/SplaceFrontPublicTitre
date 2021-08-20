const initialState ={
    sports: [        //icon name  
   {name: "football" , icon:'football' , color: '#B0D8E7' , key: '1', logo: require('../assets/sports/football.png')},
   {name: "escalade" , icon:'escalade' , color: '#abf09b' , key: '10', logo: require('../assets/sports/escalade.png')},
   {name: "fitness" , icon:'fitness' , color: '#ffcc8b' , key: '2', logo: require('../assets/sports/fitness.png')},
   {name: "skate" , icon:'skate' , color: '#9879da' , key: '3', logo: require('../assets/sports/skate.png')},
   {name: "tennis" , icon:'tennis' , color: '#fed535' , key: '4', logo: require('../assets/sports/tennis.png')},
   {name: "badminton" , icon:'badminton' , color: '#ffcc8b' , key: '6', logo: require('../assets/sports/badminton.png')},
   {name: "basketball" , icon:'basketball' , color: '#f8b846' , key: '7', logo: require('../assets/sports/basketball.png')},
   {name: "velo" , icon:'bike' , color: '#9879da' , key: '5', logo: require('../assets/sports/velo.png')},
   {name: "volley" , icon:'volley' , color: '#9879da' , key: '8', logo: require('../assets/sports/volley.png')},

]

}


export const SportsReducer =(state = initialState, action)=>{
switch(action.type){
    
   default: return state ; 
}
   
}