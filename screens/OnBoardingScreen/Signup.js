import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  ScrollView,
  KeyboardAvoidingView, 
  Dimensions,
  TouchableOpacity,
  TextInput
  
} from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import {useTranslation} from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';
import {connect,useSelector,useDispatch} from 'react-redux';

import Icon from "react-native-vector-icons/FontAwesome";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import * as ImagePicker from "expo-image-picker";

import AsyncStorage from '@react-native-async-storage/async-storage'

export function Signup(props) {
    
    const {t} = useTranslation();
    // page 2 
    const [name, setName] = useState("");
    const [forname, setForname] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [email, setEmail] = useState("");
    const [ageUser, setAgeUser] = useState("");
    const [gender, setGender] = useState(null) ; 
    const [favSport, setFavSport] = useState([]);
    const [handisport, setHandisport] = useState(false);
    const [page, setPage] = useState(1);

    //page 3 
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selected, toggleSelected] = useState({male : false , female: false , other: false});
    let femaleColor = '#D3D3D3'
    let maleColor = '#D3D3D3'
    let otherColor = '#D3D3D3'

    if (selected.male) {
      maleColor = 'orange';
    }
    if (selected.female) {
      femaleColor = 'orange';
    }
    if (selected.other) {
     otherColor = 'orange'
    } 
      
    
  
    

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
      console.log(date.toLocaleTimeString().slice(0, -3))
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    //-----------------------------------------------
    
    // Page 4  
    const sports = useSelector(state => state.Sports.sports)
    const [selectedSports, setselectedSports] = useState([])
    const [selectedSportsColor, setselectedSportsColor] = useState({'football': 'white','escalade': 'white','fitness': 'white','skate': 'white','tennis': 'white','badminton': 'white','basketball':'white','velocity': 'white','volley':'white'})

    
    
     //** Vérification d'infos remplit par l'utilisateur  */

     const checkInputs = () => {
      if (password != password2 || password.trim() == '') {
        alert(t('passwords not identical'))
        
      }else if ( !/^\S+@\S+$/.test(email.toLocaleLowerCase()) ){
        alert('email invalid')
      }else{
        setPage(3)
      }
      
    }
    
    const checkInputsPage3 = () => {
      if (date == new Date()) {
        alert(t('please choose a valid birthdate'))
        
      }else if (selected.male == false && selected.female  == false && selected.other  == false ){
        alert('please select a gender')
      }else{
        setPage(4)
      }
    }

    //** Gestion de la PHOTO DE PROFIL en partant de la photothéque utilisateur **/
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,

    });
   
    console.log("résultat de pick image", result);

    if (!result.cancelled) {


      setImage(result.uri);
    }

    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  };

    const createAccount = ()=> {
      signUpToBack()
      storeToken('connected')
      console.log('account created');
      props.navigation.goBack()

    }
    const storeToken = async (value) => {
      try {
        await AsyncStorage.setItem('token', value)
      } catch (e) {
        // saving error
      }
    }

    const signUpToBack = async () => {


    console.log("envoi user vers le back");
    const data = await fetch(`http://192.168.42.151:3000/users/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${forname + ' ' + name}`,
        email: email,
        password : password,
        favoriteSports: selectedSports,
       // bio: descriptionUser,
        gender: gender,
        handiSport: handisport,
        birthday: date,
        country: "fr",
        phoneNumber: "065654343",
      }),
      
      

    });
    const body = await data.json();
    console.log("réponse du fetch signup", body);

    if (body.result == true) {
      props.addToken(body.token);
      setUserExists(true);
      console.log("log du token signup", body.token);
      AsyncStorage.setItem("token", body.token)

      // *** enregistrement de la photo en cloudinary puis db ***

      var dataimage = new FormData();

      dataimage.append('photo', {
      uri: image,
      type: "image",
      name: "photo",
      token: body.token
      
      })
      
 
        const response = await fetch(`http://192.168.42.151:3000/users/upload-profile-picture/${body.token}`, {
          method: 'POST',
          headers:{'Content-Type':'application/form-data'},
          body: dataimage
        })
        const larep = response.json()
        console.log(larep)
        if(larep.result){
            props.navigation.navigate("HomePage");
        }


    } else {
      setErrorsSignup(body.error);
    }

    }
    
      return (
        
        <LinearGradient
          style={{ flex: 1 }}
          // Background Linear Gradient
          colors={["rgba(255,188,62,1)", "rgba(255,170,63,1)", "rgba(255,67,67,1)"]}
          locations={[0, 0.7, 1]}
        >
          <KeyboardAwareScrollView justifyContent={'center'} >
          <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
                <View >
                                <Image
                                    source={require('../../assets/misc/logosplace.png')}
                                    style={{ width: 250, height: 100 }}></Image>
                </View>
                {page == 1?
                    <View >
                        
                        <Button  title={t('classic sign up'.toUpperCase())} buttonStyle={styles.classic} titleStyle={{fontSize: 15, color:'orange'}} onPress={()=> setPage(2)} />
                        <Button  title={t('continue with Apple'.toUpperCase())} buttonStyle={styles.apple} titleStyle={{fontSize: 15}} icon={<Icon name="apple" size={25} color="#ffffff" style={{marginRight: 10}} />} />
                        <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center" , marginTop: '10%',  marginBottom: '10%'}}>
                            <View style={styles.bar} ></View>
                            <Text style={{margin: 10, color:'white'}}> {t('or'.toUpperCase())} </Text>
                            <View style={styles.bar} ></View>
                        </View>
                        <Button  title={t('continue with google'.toUpperCase())} buttonStyle={styles.classic} titleStyle={{fontSize: 15, color:'orange'}} icon={<Icon name="google" size={25} color="orange" style={{marginRight: 10}} />} />
                        <Button  title={t('continue with facebook'.toUpperCase())} buttonStyle={styles.classic} titleStyle={{fontSize: 15, color:'orange'}} icon={<Icon name="facebook" size={25} color="orange" style={{marginRight: 10}} />} />
                        <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                            <Text style={styles.login} > {t('i allready have an account').toUpperCase()} </Text>
                        </TouchableOpacity>
                       

                    </View> : null
                }

                {page== 2 ? 
                    <View style={styles.container} >
                        

                        <Text style={styles.HeaderText} > {t('inscription').toUpperCase()} </Text>
                        <Text style={styles.text}> {t('add your name')} </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={t('add your name')+'...'}
                            onChangeText={setName}
                            value={name}
                            style={styles.Tinput}
                            />
                         <Text style={styles.text}> {t('add your forname')} </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={t('add your forname')+'...'}
                            onChangeText={setForname}
                            value={forname}
                            style={styles.Tinput}
                            />
                             <Text style={styles.text}> {t('add your email')} </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={t('add your email')+'...'}
                            onChangeText={setEmail}
                            value={email}
                            style={styles.Tinput}
                            />
                            <Text style={styles.text}> {t('find a password')} </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={t('find a password')+'...'}
                            onChangeText={setPassword}
                            value={password}
                            style={styles.Tinput}
                            secureTextEntry
                            password
                            />
                             <TextInput

                            style={styles.input}
                            placeholder={t('confirm password')+'...'}
                            onChangeText={setPassword2}
                            value={password2}
                            style={styles.Tinput}
                            secureTextEntry
                            password
                            />
                        <Button title={t('continue')}  buttonStyle={styles.continue} onPress={ checkInputs  }   />
                        
                    </View> : null
            
                }

                {page ==3 ?
                  <View style={styles.container}>
                      <TouchableOpacity style={styles.profileImgContainer} onPress={pickImage} >
                          { image == null ? <Image style={styles.image} source={require('../../assets/misc/no_image.png')}/>:<Image source={{ uri: image }} style={styles.image}/>}
                      </TouchableOpacity>
                      <Text style={styles.text} > {t('enter your birthdate')} </Text>
                      <Button  onPress={showDatepicker}
                        title= {date.toLocaleDateString()}
                        buttonStyle={styles.continue}
                      />
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={onChange}
                          maximumDate={new Date()}
                        />
                      )}
                      <Text style={styles.text} > {t('im a')} </Text>
                      <View style={{flexDirection: 'row',justifyContent: 'space-evenly'}}>
                      <Button onPress={()=> {
                          toggleSelected({male : !selected.male , female: false , other: false})
                          setGender('male')
                      }} 
                      title ={t('male')} buttonStyle={{...styles.gender,backgroundColor : maleColor}} />
                      
                      <Button onPress={()=> {
                          toggleSelected({male : false , female: !selected.female , other: false})
                          setGender('female')
                      }} 
                      title ={t('female')} buttonStyle={{...styles.gender,backgroundColor :femaleColor}} />

                      <Button onPress={()=> {
                          toggleSelected({male : false , female: false , other: !selected.other})
                          setGender('other')
                      }} 
                      title ={t('other')} buttonStyle={{...styles.gender,backgroundColor : otherColor}} />
                    </View>
                    <Button title={t('continue')}  buttonStyle={styles.continue} onPress={ checkInputsPage3  }  />
                  </View>
                :
                null
                }

                {page== 4 ?
                  <View style={styles.container}>
                  <Text style={styles.HeaderText}> {t('welcome')} </Text>
                  <Text style={{...styles.text,textAlign: 'center'}} > {t('Select up to 3 favorite sports for the application to work') + ' :'} </Text>

                      <View style={{flexDirection: 'row',flexWrap: 'wrap', marginBottom: 30 , justifyContent: 'center'}} >

                        
                        {
                        sports.map((sport) => {
                         
                          return(
                            
                            <View style={{  alignItems: 'center', alignItems: 'center' , justifyContent: 'center',}}>
                                <TouchableOpacity onPress={() => 
                                  {
                                    if (selectedSports.includes(sport.key)) {
                                      setselectedSportsColor({...selectedSportsColor, [sport.name] : 'white'})
                                      setselectedSports(selectedSports.filter(item => item !== sport.key))
                                    }else if(selectedSports.length < 3) {
                                      setselectedSports([...selectedSports,sport.key]) ;
                                      setselectedSportsColor({...selectedSportsColor, [sport.name] : 'orange'}) 
                                    }
                                    
                                  } 
                                  
                                  } >
                                  <Image style={{...styles.logo, borderColor: selectedSportsColor[sport.name]}} source={sport.logo} />
                                </TouchableOpacity>
                                <Text style={{fontSize: 11,alignSelf:'center',marginRight: 5}}> {sport.name}</Text>
                                
                            </View>
                          )
                        } )
                        }
                    </View>
                    <Text style={{fontSize: 10, color: 'grey',textAlign: 'center'}}> {t('Don\'t worry, once you\'re in the application you\'ll be able to change your sports in the filter again')} </Text>
                    <Button title={t('continue')}  buttonStyle={styles.continue} onPress={ createAccount  }  />
                  </View>
                 :
                 null
                 }
          </View>
          
            
          <Text style={{marginTop: '5%' ,alignSelf: 'center', textAlign: 'center', color:'white', fontSize: 11 , maxWidth: '80%', marginBottom: 10, justifyContent: 'flex-end'}}> {t('By using SPLACE you agree to our Terms of Use and Privacy Policy.')} </Text>
          </KeyboardAwareScrollView>
        </LinearGradient>
       
      );
   
}

const styles = StyleSheet.create({
    Text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3e3e3e',
    },
    TextWhite: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    container: {
        backgroundColor: '#F7F4EF',
        margin: 30,
        borderRadius: 20 ,
        padding : 10,
        paddingBottom: 20
        
    },
  
    
    baseTextBlack: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000'
    },
    text: {
      //fontFamily: 'Montserrat',
      fontSize: 16,
      color: "orange", 
      fontWeight: 'bold',
      marginTop: 5

    },
    classic: {
        width:Dimensions.get('window').width - 100 ,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin : 10
        
    },
    apple:{
      
        width:Dimensions.get('window').width - 100 ,
        backgroundColor: 'black',
        borderRadius: 10,
        margin : 10
            
        
    },
    bar:{
        backgroundColor: 'white',
        paddingLeft: '15%',
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: '15%',
    },
    login :{
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 16,
        margin: 15 , 
        alignSelf: 'center',
        textDecorationLine: 'underline',
    },
    //page 2 -
    container: {
      backgroundColor: '#F7F4EF',
      width: '75%' , 
      borderRadius: 20 ,
      padding : 30,
      
      paddingBottom: 20
    },
    Tinput:{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,  
        elevation: 5,
        paddingLeft: 5,
        margin: 5,
        borderRadius: 25, 
    },
    HeaderText:{
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    continue:{
      backgroundColor: 'orange' , 
      margin : 10 ,
      width: 150, 
      borderRadius: 25,
      alignSelf:'center',
     
    },
    //page 3 

    image: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      borderWidth: 3,
      alignSelf:'center'
  },
    gender:{
    borderRadius: 20,
    marginTop:  10 ,
    marginBottom: 10
    },

  // page 4 
  logo:{
    width: 55,
    height: 55 ,
    //margin: 2,
    borderWidth: 3,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop : 5,
    margin: 7
  },
  });
  