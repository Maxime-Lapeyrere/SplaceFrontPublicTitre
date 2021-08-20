import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import { Dimensions } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {  Button } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch,useSelector} from 'react-redux' ;

const {width, height} = Dimensions.get('window');


export default function SessionCard(props){
    let SportColor = props.event.sport.color;
    const {t} = useTranslation();  
 
   
    return(
   <View style={{...styles.container,backgroundColor: SportColor}}>
        <Text numberOfLines={1} style={styles.name} > {props.event.name} </Text>
        <View style={{position:'absolute', marginTop: '14%', marginLeft: 15}}>
        <Ionicons name={props.event.sport.icon} size={50} color={'white'} />
        </View>
       
        <Text numberOfLines={1} style={{alignSelf:'center'}}  > {props.event.date} </Text>
        <View style={{flexDirection:'row', alignSelf:'center'}}>
        <Button 
            title={t('join')} buttonStyle={styles.button} onPress={()=> console.log('')}
            />
        </View>
        <View style={{alignSelf:'flex-end', flexDirection: 'row-reverse' , bottom: '10%' , marginLeft: 10  }}>
        <TouchableOpacity onPress={()=> console.log('not implemented')}>
                <Icon name="info-circle" size={20} color="white" />
         </TouchableOpacity>
         </View>
    </View>
    )

}
const styles = StyleSheet.create({
    container:{
        margin: 15,
        alignItems: 'flex-start',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5,
        width: width - 60,
        height: 150,
        padding:0
      },
      name:{
        fontSize: 20,
        fontWeight:'bold',
        color:'white',
        margin: 10,
        alignSelf:'center'
        
      },
      button:{
        margin: 15,
        borderRadius: 25,
        backgroundColor: "#F4B223",
        width: 80,
        alignSelf: 'center',
        borderColor:'white',
        borderWidth: 3,
        marginTop : 25

        
    }
  });