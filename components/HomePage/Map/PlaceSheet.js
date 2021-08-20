import React,{useState} from 'react';
import { StyleSheet,Image, Text, View,SafeAreaView, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useTranslation} from 'react-i18next';
import { Button } from 'react-native-elements';
import SessionCard from './SessionCard';
import {useDispatch,useSelector} from 'react-redux' ;
import { selectAdress } from '../../../actions/EventActions';



export default function PlaceSheet(props){
  const {t} = useTranslation();
  const place = props.place ; 
  const dispatch =  useDispatch() 
  return (
    <SafeAreaView 
      style={{
        backgroundColor: '#F5F2EC',
        height: 600 , 
        borderRadius: 15
      }}
    > 
      
      <Image source={place.image} style={styles.image}  />
      <Icon name="ellipsis-h" size={35} color="white" style={{position:'absolute' , alignSelf: 'center', }} 
        />
      <View style={styles.form}>
        <Text style={styles.text}> {place.name} </Text>
      </View>
      <View style={styles.adress}>
        <Text style={{color:'grey'}} numberOfLines={1}>  {place.adress}  </Text>
      
      </View>
      <View style={styles.form}>
        <Text style={styles.normalText} numberOfLines={1}>  {t('sessions')}  </Text>
        
      </View>
      
      <View style={styles.form}>
          {place.events == null ?
          <View style={styles.center} >
            <Text style={{fontWeight:'bold' , color:'grey', fontSize:18,textAlign:'center' }}> {t('there is no sessions currently')} </Text></View> :
          <View>
              <SessionCard event={place.events[0]}/>
          </View>
          
        }
      </View>
      <View style={styles.form}>
        <Text style={styles.normalText} numberOfLines={1}>  {t('create event here')}  </Text>
      </View>
            <View style={styles.center}>
        <Button  onPress={() =>{
           props.eventSheetRef.current.snapTo(0);
           dispatch(selectAdress(place.adress))
          }
        }
          title={t('let\'s go')}
          buttonStyle={styles.go}
           />
      </View>
     
      
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
   drag: { 
     
     alignItems: "center",
     bottom : 10
    },
    normalText: {
      fontSize: 20,
      marginTop: 20,
      color: 'orange'

    },
    buttons: {
      
        backgroundColor: "#F4B223",
        borderRadius: 50,
        width: 100,
        height: 35,
      },
    form: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 25,
      marginRight: 25,
      
    },
    text:{
       fontSize: 20,
       fontWeight: 'bold',
       marginTop: 3

    }
    ,
   
    formV: {
      flexDirection: "column",
      justifyContent: "space-between",
      marginLeft: 25,
      marginRight: 25,
      margin: 8
    },
   
  center: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
    margin: 8
  },
  go: {
      
    backgroundColor: "#F4B223",
    borderRadius: 10,
    width: 120,
    height: 40,
    marginTop: 10
  },
  
  image: {
      width: '100%',
      height: 90,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
  },
  adress:{
      marginLeft: 25 ,

      
  }
    
   })