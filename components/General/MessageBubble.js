import React from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';



export default function MessageBubble(props){

    return(
        <View style={styles.chatContainer}>
              <Image source ={ props.image} style={styles.friendImage}/>
              
                <View style={styles.textContainer}>
                <Text style={ styles.name} > {props.name} </Text>
                <Text numberOfLines={1} style={{marginRight: 25,maxWidth: '65%',fontSize: 12}} > {props.text} </Text>
                       
                </View>
         </View>
    )
}
const styles = StyleSheet.create({
    chatContainer:{
        flex: 1,
        flexDirection: 'row',
        maxHeight: 70,
        borderRadius: 50,
        backgroundColor: '#F5F2EC',
        alignItems: 'center',
        margin:15,
        width : '90%',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 3,  
        elevation: 4,
        
    },
    friendImage:{
       height: 50,
       width: 50,
       borderRadius: 50/2,
       borderColor: '#ffbb29',
       borderWidth: 2,
       justifyContent: 'center',
       margin:12
   },
   textContainer:{
      
       
       width: '80%',
       justifyContent: 'space-between',
       alignItems: 'flex-start',
       
       
   },
   name:{ marginTop:5,
     bottom: '8%',
     fontSize: 16,
     color:'#FFA500',
     fontWeight: 'bold'
    }
   
  });
