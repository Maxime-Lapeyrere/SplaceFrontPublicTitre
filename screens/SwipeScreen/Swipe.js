import React,{useState,useRef}  from 'react';
import {View,Text,Button,StyleSheet,SafeAreaView,Animated,
  useWindowDimensions} from 'react-native'; 
import DualButton from '../../components/General/DualButton' ;
import SwiperPeople from '../../components/Swipe/People/SwiperPeople';
import SwiperEvent from '../../components/Swipe/Event/SwiperEvent'
import { Feather as Icon } from "@expo/vector-icons";


export function Swipe({navigation}) { 
  
  
  
    return(
    <SafeAreaView style={styles.container}>
      
      <DualButton screen1={<SwiperPeople navigation={navigation} />} screen2={<SwiperEvent/>} option1={'People'} option2={'Events'}/>
      
    </SafeAreaView>
        
            
        
    ); 

 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfaff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  cards: {
    flex: 1,
    margin: 8,
    zIndex: 100,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});