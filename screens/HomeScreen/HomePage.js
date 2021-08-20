import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'; 
import DualButton from '../../components/General/DualButton'  ;
import Map from '../../components/HomePage/Map/Map';
import PersonCard from '../../components/Swipe/People/PersonCard';
import RDV from '../HomeScreen/RDV'

const renderFilter = () => {
    return (
        <Filter/>
    )
}
const renderEventForm = () => {
    return (
        <EventForm/>
    )
}

//eventList
const renderEvents= () =>{

}


export function HomePage({navigation}) { 
    
   

   
    return(
        <View>
           {/* <Tutorial/>*/}
            
           
           
            
           
           <DualButton screen1={ <Map navigation={navigation}/>}
                       screen2={<RDV navigation={navigation}/>} 
                       option1={'Map'} option2={'RDV'} 
                        />
           
            

        </View>
    ); 

 }

 const styles = StyleSheet.create({
   
});