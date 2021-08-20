import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';



export default function Friend({friend}){

  return(
  <TouchableOpacity onPress={() => console.log(friend.name)} >
     <View >
            
          <Image source={ friend.images[0] } style={styles.friend} />
         
            
      </View>
  </TouchableOpacity>
  )

}
const styles = StyleSheet.create({
  friend:{
    height: 65,
    width: 65,
    borderRadius: 65/2,
    justifyContent: 'center',
    margin: 6 
}
  });