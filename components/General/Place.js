import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';



export default function Place(props){

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}  source={ props.place.image}/>
        
        
      </View>
      <View style={styles.textContainer} >
        <Text numberOfLines={1} style={styles.title}>{props.place.name}</Text>
        <Text style={styles.adress} >{props.place.adress}</Text>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
   
  container:{
    flex: 1 , 
    flexDirection: 'column',
    margin: 5 
  },
  imageContainer: {
    maxWidth: 170 , 
    height: 120
  },
  image: {
    width: 170,
    height: 110,
    borderRadius: 25,
   
},
title:{
  fontSize: 13,
  textAlign: 'center',
  marginLeft: 5 ,
  marginRight: 5,
  fontWeight: 'bold'
},
textContainer:{
  width: 170
},
adress:{
  fontSize: 12,
  marginLeft: 5 ,
  marginRight: 5
}
  
  });