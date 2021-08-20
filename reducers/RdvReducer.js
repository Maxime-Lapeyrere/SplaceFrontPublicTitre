const initialState ={
    rdv: [
   {name: 'Petit Foot entre 98',
    sport:    {name: "football" , icon:'football' , color: '#B0D8E7' , key: '1'},
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
},
    {name: 'Petit Foot entre 98',
    sport:    {name: "football" , icon:'football' , color: '#B0D8E7' , key: '1'},
    members:  [
        {name: "Amine" , image: require('../assets/other_worlds.jpg') , key: '2'},
        {name: "Neymar JR", image: require('../assets/neymar.jpg'), key:'3'},
        {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
        {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
        {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
        {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
        {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
        {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
        {name: "kelly", image: require('../assets/kelly.jpg'), key:'4'},
        {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
    ],
    adress: 'Nice Allianz riveireea stadium ',
    date: '08/07/2021 - 8h30 ',
    id: '24' ,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    image: require('../assets/parc-jean-Moulin.jpg')
    },
    {name: 'Petit Foot entre 98',
    sport:    {name: "football" , icon:'football' , color: '#B0D8E7' , key: '1'},
    members:  [
        
        {name: "zin zaidan", image: require('../assets/ZZ.jpg'), key:'5'},
    ],
    adress: 'Nice Allianz riveireea stadium ',
    date: '08/07/2021 - 8h30 ',
    id: '20' ,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    image: require('../assets/parc-jean-Moulin.jpg')
    }
]
}


export const RdvReducer =(state = initialState, action)=>{
switch(action.type){

   default: return state ; 
}
   
}