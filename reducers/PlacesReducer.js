const initialState ={
    
    favPlaces: [{
           name: 'parc jean-Moulin', 
                
            image: require('../assets/parc-jean-Moulin.jpg'),
            // geolocation : 
            adress: '51 Rue du Moulin des Prés, 75013 Paris ', 
            city: 'paris',
            events: [
                {name: 'Petit Foot entre 98',
            sport: {name: "football" , icon:'football' , color: '#B0D8E7' , key: 1, logo: require('../assets/sports/football.png')},

            members:  [
                {name: "Amine" , image: require('../assets/other_worlds.jpg') , key: '2'},
                {name: "Neymar JR", image: require('../assets/neymar.jpg'), key:'3'},
                {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
                {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
            ],
            adress: 'Nice Allianz riveireea stadium ',
            date: '08/07/2021 - 8h30 ',
            id: '1' ,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            image: require('../assets/parc-jean-Moulin.jpg')
        }
        ],
        sport: {name: "football" , icon:'football' , color: '#B0D8E7' , key: 1, logo: require('../assets/sports/football.png')},
        key : '001'        
    } ],

    places: [{
        name: 'parc jean-Moulin', 
             
         image: require('../assets/parc-jean-Moulin.jpg'),
         // geolocation : 
         adress: '51 Rue du Moulin des Prés, 75013 Paris ', 
         city: 'paris',
         events: [
             {name: 'Petit Foot entre 98',
         sport: {name: "football" , icon:'football' , color: '#B0D8E7' , key: 1, logo: require('../assets/sports/football.png')},

         members:  [
             {name: "Amine" , image: require('../assets/other_worlds.jpg') , key: '2'},
             {name: "Neymar JR", image: require('../assets/neymar.jpg'), key:'3'},
             {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
             {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
         ],
         adress: 'Nice Allianz riveireea stadium ',
         date: '08/07/2021 - 8h30 ',
         id: '1' ,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
         image: require('../assets/parc-jean-Moulin.jpg')
     }
     ],
     sport: {name: "football" , icon:'football' , color: '#B0D8E7' , key: 1, logo: require('../assets/sports/football.png')},
     key : '001'        
 } ]
 
}
 export  const PlacesReducer = (state = initialState, action)=>{
     switch(action.type){
        case 'deletePlace':
            console.log('place deleted')
            const index = state.favPlaces.findIndex(favPlaces => favPlaces.key ==action.placeID); //finding index of the item
            const newArray = [...state.favPlaces]; //making a new array
            newArray.splice(index, 1);
            return {...state,favPlaces:newArray}
        default: return state ; 
     }

    }