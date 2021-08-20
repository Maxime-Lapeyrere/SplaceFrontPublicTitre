import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';



export default function Sport({sport}){

  return(
    <View style={{  borderRadius: 25 ,backgroundColor: sport.color,margin: 5}}>
      <Image source={sport.logo} style={{width: 40 , height: 40}} />
    </View>
  )

}
const styles = StyleSheet.create({
   
  });