import React,{useState,useRef}  from 'react';
import {View,Text,Image,FlatList,StyleSheet,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import { Button } from 'react-native-elements';

import {useTranslation} from 'react-i18next';

import Icon from "react-native-vector-icons/FontAwesome";
import {useSelector,useDispatch} from 'react-redux';

    

export function Matches({navigation}) { 
   
    const {t} = useTranslation(); 
    var blur = 10 ; 
    const people =  useSelector(state => state.Matches.peopleMatched);//people matched 
    const prenium = useSelector(state => state.UserInfo.userInfo.prenium)
    if (prenium) {
         blur = 0
    }
  
    return(
    <SafeAreaView style={styles.container}>
         <IconButton icon="arrow-left-circle-outline"
                color={Colors.orange400}
                size={45}
                onPress={() =>{navigation.goBack()}}
                style={styles.icon}
         />
         

         <FlatList 
            data={people}
            style={{alignSelf:'center'}}
            numColumns={2}
            renderItem={({item})=> (
                <View>
                    
                    <TouchableOpacity >
                       <Image source={item.images[0]} style={{...styles.imageContainer,}}  blurRadius={blur}/>
                    </TouchableOpacity>
                </View>
            )} 

            />
            {prenium?
                <View></View>
                :
                <View style={{margin: 15 , marginRight: 30 , marginLeft: 30}}>
                    <Text> {t('upgrade your account to find out who likes you')} </Text>
                    <Button 
                    title={t('upgrade my account')} buttonStyle={styles.buttons} onPress={()=> navigation.navigate('PreniumProfile')} />
                </View>
            }

        

        
    </SafeAreaView>
        
            
        
    ); 

 }

 const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        margin: 0,
        marginTop: 25 ,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
    imageContainer:{
        height: 230,
        width: 150,
        margin: 10,
        borderRadius: 25,
        
    },
    buttons:{
        margin: 15,
        borderRadius: 25,
        backgroundColor: "#F4B223",
        width: 150,
        alignSelf: 'center',
        
    }
});