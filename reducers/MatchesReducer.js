const initialState =
{ 
    peopleMatched: [
        {name: "Amine" , images: [require('../assets/other_worlds.jpg')] , key: '2'},
        {name: "kelly", images: [require('../assets/kelly.jpg')], key:'4'},
        {name: "kelly", images: [require('../assets/kelly.jpg')], key:'5'}

    ]
}

export const MatchesReducer =(state = initialState, action)=>{
    switch(action.type){
        
       
       default: return state ; 
    }
       
    }