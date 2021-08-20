import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Button,Input,Image } from "react-native-elements";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";




export function Login(props) {
 const [email, setEmail] = useState('')
 const [passwordHidden,togglePasswordHidden] = useState(true)
 const [password, setPassword] = useState('')
 const {t} = useTranslation();

 useEffect(  ()  => {

    const timer = setTimeout(async() => {
    console.log('This will run after 2 seconds!')
    var tokenExist;
    await AsyncStorage.getItem("token", function(error, data){
    console.log('log du token',data)
    tokenExist = data;
    
    })

    
    
    if (tokenExist != null ) {
    props.navigation.navigate('HomePage')
    }
      
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <LinearGradient
      style={{ flex: 1 }}
      // Background Linear Gradient
      colors={["rgba(255,188,62,1)", "rgba(255,170,63,1)", "rgba(255,67,67,1)"]}
      locations={[0, 0.7, 1]}
    >

      <KeyboardAwareScrollView justifyContent={'center'} >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={require('../../assets/misc/logosplace.png')}
                        style={{ width: 300, height: 100 }}></Image>
            </View>
        
            <View style={styles.container}>
                <Text style={styles.header}> {t('welcome')} </Text>
                <Input
                // placeholder='INPUT WITH ICON'
                    leftIcon={
                        
                        <Icon
                            name='envelope-o'
                            size={22}
                            color='orange'
                        />
                       
                    }
                    containerStyle={styles.Tinput}
                    onChangeText={setEmail}
                    value={email}
                    />
                 <Input
                // placeholder='INPUT WITH ICON'
                    leftIcon={
                    <TouchableOpacity onPress={()=> togglePasswordHidden(!passwordHidden)  }>
                        <Icon
                            name='eye'
                            size={22}
                            color='orange'
                        />
                    </TouchableOpacity>   
                    }
                    containerStyle={styles.Tinput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={passwordHidden}
                    password={true}
                    />
                  <Button title={t('sign in')}  buttonStyle={styles.signin}   />
                  <View style={styles.footer} >

                    <Text style={styles.footerText}> {t('you are new here' + ' ?')}  </Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Signup')}  ><Text style={styles.footerText}> {t('sign up'.toUpperCase())} </Text></TouchableOpacity> 


                  </View>
                  
                  
            </View>
      </KeyboardAwareScrollView>
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#F7F4EF',
       margin: 30,
       borderRadius: 20 ,
       padding : 10,
       alignItems: "center",
       paddingBottom: 20
   },
   header:{
        fontSize : 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: 15
   },
   Tinput:{
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 5,
    
    margin: 10,
    borderRadius: 25,
    width: '80%',
    height: 55
    
}, 
 signin :{
    backgroundColor: 'orange' , 
    margin : 10 ,
    width: 150, 
    borderRadius: 25,
   
 },
 footer:{
     flexDirection: 'row',
     margin: 10

 },
 footerText:{
     color: 'grey',
     fontSize:15
 }
});