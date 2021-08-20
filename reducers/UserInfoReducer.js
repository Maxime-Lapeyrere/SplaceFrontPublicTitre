const initialState ={
    
    userInfo: { name: 'Amine' , 
                age: 20 ,
                email: 'medaminebensoltana@gmail.com',
                number: '0769082650',
                location: 'paris, France',
                nickname: 'bensoltana',
                private : false, 
                bio : ''  ,
                job: '' , 
                city: 'Villetaneuse',
                prenium: false, 
                preferedDays: [
                    { name: 'sunday',selected: true  ,key:'1'} ,
                    { name: 'monday',selected: false  ,key:'2'} ,
                    { name: 'tuesday',selected: false ,key:'3'} ,
                    { name: 'wednesday',selected: false ,key:'4'} ,
                    { name: 'thursday',selected: true ,key:'5'} ,
                    { name: 'friday',selected: false ,key:'6'} ,
                    { name: 'saturday',selected: true ,key:'7'} ,
                    
                    

                ]
                

            
            },
    images: [
                    require('../assets/pdp.jpg'),
                    require('../assets/sunset_in_paris.jpg'),
                    require('../assets/other_worlds.jpg'),
                ]
 }
 
 
 export  const UserInfoReducer = (state = initialState, action)=>{
     switch(action.type){
        case 'addImage' : 
        const newImages = [...state.images];
        newImages[action.index]= action.newImage;
        return { 
        ...state, 
        images: newImages, //not tested 
        };
        case 'toggleDay' :
            const index = state.userInfo.preferedDays.findIndex(days => days.name == action.day);
            const newArray = {...state.userInfo};
            newArray.preferedDays[index]  =  {...newArray.preferedDays[index], selected : !newArray.preferedDays[index].selected  } 
            return {...state,userInfo: newArray }
        default: return state ; 
     }

    }
        