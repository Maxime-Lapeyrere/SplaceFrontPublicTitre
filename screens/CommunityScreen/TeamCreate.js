import React, { useState, useEffect } from 'react';
import { Text, Image, View, TextInput,Platform ,StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { Button } from 'react-native-elements';
import { createTeam } from '../../actions/TeamsActions';
import { useDispatch } from 'react-redux';

export default function TeamCreate({navigation}) { 
    const {t} = useTranslation(); 
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const createTeamFunc = ()=> {
        
        if (name != '' && image != null) {
            dispatch(createTeam({name: name , image: image  , leader :'' , members: null,history: null , calendar: null , lastMessage:null}));
            navigation.goBack()
            
        }else{
            console.log(name);
            console.log(image)
            alert(t('your team needs to have a name and an image'));
             
        }
        
    }
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            //cry 
            
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(image)
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    return(
        <View style={{ flex: 1}}>
         <IconButton icon="arrow-left"
            color={Colors.orange400}
            size={45}
            onPress={() =>{navigation.goBack()}}
           />

            <View style={ {alignItems:'center'}}>
                <Text style={styles.name}> {t('i create my team'.toUpperCase())} </Text>
                <Text style={styles.titles} > {t('choose a picture')} </Text>
                <TouchableOpacity style={styles.profileImgContainer} onPress={pickImage} >
                    { image == null ? <Image style={styles.image} source={require('../../assets/misc/no_image.png')}/>:<Image source={{ uri: image }} style={styles.image}/>}
                </TouchableOpacity>
                <Text style={styles.titles} > {t('team name')} </Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('add a name')+'...'}
                    onChangeText={setName}
                    value={name}
                    style={styles.Tinput}
                    />
                
                <Text style={styles.titles} > {t('add freinds')} </Text>
                <View>
                    <Button  onPress={() => console.log('not implemented yet')}
                    title="select"
                    buttonStyle={styles.buttons}
                    />
                </View>
                <Button title={t('it\'s on')}  buttonStyle={{...styles.prenium , backgroundColor: 'orange'}} onPress={createTeamFunc} />
                <Button title={t('upgrade team')}  buttonStyle={styles.prenium} />

                

            </View>
        
    </View>
    ); 

 }
 const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
    profileImgContainer: {
      
        height: 150,
        width: 150,
        borderRadius: 150/2,
        justifyContent: 'center',
        
      },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 3,
    },
    nameContainer: {
        alignItems: 'center',
        
    },
    nameContainer: {
        alignItems: 'center',
        
    },
    name: {
        margin:5,
        fontSize: 30,
        fontStyle:'italic',
        fontWeight: 'bold',
        
        
    },
    titles: {
        fontSize: 20,
        color: '#2A3234',
        fontWeight: 'bold',
        margin: 10,
        marginLeft: 30 , 
        alignSelf: 'flex-start'
    },
    Tinput:{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,  
        elevation: 5,
        padding: 10,
        margin: 8
    },
    buttons:{
        margin: 15,
        borderRadius: 25,
        backgroundColor: "#F4B223",
        alignSelf: 'center',
        width: 75
    },
    prenium:{
        margin: 10,
        borderRadius: 25,
        backgroundColor: "#543EFF",
        alignSelf: 'center',

    },
    scrollContainer:{
        alignContent:'center',
        alignItems:'center'
    },
    member:{
        height: 50,
        width: 50,
        borderRadius: 50/2,
        justifyContent: 'center',
        margin: 5 
    },
    Tinput:{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,  
        elevation: 5,
        padding: 10,
        margin: 5,
        borderRadius: 25,
        width:200
    },
    prenium:{
        margin: 10,
        borderRadius: 25,
        backgroundColor: "#543EFF",
        alignSelf: 'center',
        width: 130

    }
});

 