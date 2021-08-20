const initialState ={
         profiles: [
        {
        name: "Mohamed" ,
        images: [require('../assets/sunset_in_paris.jpg'),
                 require('../assets/other_worlds.jpg'),
                 require('../assets/pdp.jpg')
        ] 
        , 
        key: '1', city:'Villetaneuse',job : 'étudiant' , age:20, 
        sports: [
                    {name: "football" , icon:'football' , color: '#B0D8E7' ,logo: require('../assets/sports/football.png') ,key: '1'},

                ] 
        ,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        ,
        {
        name: "Neymar JR", 
        images: [require('../assets/neymar.jpg')]
        , 
        key:'3' , city:'Brazil',job : 'footballer' , age:29,
         sports: [

        ] 
        ,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
        ,
        {
        name: "kelly", 
        images: [require('../assets/kelly.jpg')] 
        , 
        key:'4', city:'no idea',job : 'footballer' , age:29, 
        sports: [

        ] 
        ,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        ,
        {
        name: "zin zaidan", 
        images: [require('../assets/ZZ.jpg') ]
        , 
        key:'5', city:'Marseille',job : 'coach' , age:49,
         sports: [
               {name: "football" , icon:'football' , color: '#B0D8E7',logo: require('../assets/sports/football.png') , key: '1'},

                ] 
        ,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        ,

        {
         name: "leonel messi",
         images: [require('../assets/messi.jpg')]
         , 
         key:'6',  city:'argentine',job : 'footballer' , age:34, 
         sports: [
               {name: "football" , icon:'football' , color: '#B0D8E7',logo: require('../assets/sports/football.png') , key: '1'},

                ] 
        ,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

        
     ]
 }
 
 
 export const ProfilesReducer =(state = initialState, action)=>{
     switch(action.type){
         
        default: return state ; 
     }
        
 }