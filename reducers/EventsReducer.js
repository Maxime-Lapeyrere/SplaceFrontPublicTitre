

const initialState ={
   //event structure : 
   //{id:,name: , date: , heure: , unisex: , private:, handi: , maxNumber:, sport: , adress:}
    events: [{id: '42',
            name: 'Petit foot de famille' ,
            date: '02/05/2021' ,
            time: 10.00 ,
            unisex: true, 
            private: false, 
            handi: false, 
            peopleLimit: 4,
            sport: 'football' ,
            adress: 'Parc départemental Jean-Moulin',
            city: 'Les Guilands',
            image:  require('../assets/parc-jean-Moulin.jpg')  ,  
            description: 'Team de 4 footeux cherche une autre team ou 4 autres pers pour jouer contre nous  ⚽',
            members : []
        
        },
                    
            ],
    //for event creation 
    selectedAdress: null
}


export  const EventsReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'createEvent':
            console.log('event created ')
            
            return {...state,events:[...state.events, action.newEvent]}
            
            case 'selectAdress':
                console.log('adress selected')
                return {...state,selectedAdress: action.selectedAdress}
        case 'deleteEvent':
            return {...state,events: state.events.filter(item => item !== action.event)}
       default: return state ; 
    }
       
}