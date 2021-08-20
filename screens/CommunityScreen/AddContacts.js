import React,{useState,useEffect, useRef} from 'react';
import { StyleSheet, Text, View , TouchableOpacity,SafeAreaView,FlatList,Image,Dimensions } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import {connect,useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import FriendsList from '../../components/General/FriendsList';



export function AddContacts({navigation},props) { 
    const [SelectedView,setSelectedView]= useState(1);
    const friends = useSelector(state => state.UserFriends.userFriends);
    const [search,updateSearch] = useState('');

    const sendMessage = async(number,name)=> {
      
        const { result } = await SMS.sendSMSAsync(
            [number], // numéro de  téléphone  du destinataire 
            'Hey ' + name + ' je t’invite à rejoindre Splace la nouvelle app pour le sport. Je t’ajoute avec '+ number +', n’oublie pas d’utiliser ce numéro au moment de t’enregistrer. Le lien est ici https://splace.com/app' 
        )
        
        
    }
    let B1color = 'grey'
    let  B2color = 'grey'   
    const {t} = useTranslation(); // traduction 
    
    if (SelectedView == 1 ) {
        B1color = 'orange'
        B2color = 'grey' 
    
    }else{
        B1color = 'grey'
        B2color = 'orange' 
    }   
   let contacts = useRef({})
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              
            });
    
            if (data.length > 0) {
               contacts.current = data ;
              
            }
          }
        })();
      }, []);

   
    // const renderFriends = ()=> {
   
       
    // }
    const renderContacts = (search)=> {

        return(
            <View>
                <SearchBar
                placeholder={t('search') + "..."}
                onChangeText={()=> updateSearch(search)}
                value={search}
                round={true}
                lightTheme={true}
                inputStyle={{backgroundColor: 'white',borderRadius:20}}
                inputContainerStyle={{backgroundColor: 'white',borderRadius:20}}
                containerStyle={{ backgroundColor: '#F5F2EC', borderColor: '#F5F2EC',marginTop: '5%'}}
                />
               
               
                 
                <FlatList 
                style={{marginTop: '4%'}}
                data={contacts.current}
                renderItem={({item})=> (
               
                <View style={styles.chatContainer}>
                <Image source ={item.image} style={styles.friendImage}/>
                <Text style={ styles.name} > {item.name} </Text>
                <View style={{...StyleSheet.absoluteFillObject, alignItems: 'flex-end', justifyContent: 'center', marginRight: 20}}>
                    <TouchableOpacity onPress={() =>sendMessage(item.phoneNumbers[0].number, item.name) /* envoyer un SMS */}>
                        <Text style={{backgroundColor: 'orange', color: 'white' , fontSize: 12, borderRadius: 25, paddingRight: 5 , paddingLeft: 5}}> {t('invite')} </Text>
                    </TouchableOpacity>
                </View>
                </View>
                   
                )}
            
                   
                />
               
               
                 
            </View>
        )
    }

    
    return(
        <SafeAreaView style={{backgroundColor: '#F7F4EF',flex: 1 }} >
            <IconButton icon="arrow-left"
                color={Colors.orange400}
                size={45}
                onPress={() =>{navigation.goBack()}}
                style={styles.icon}
            />
            
           
            
            <View style={styles.container } >
            
            <TouchableOpacity 
            onPress={()=> setSelectedView(1)}
            >
                
                <Text style={{...styles.text,color: B1color ,borderColor:B1color}} > {t('friends')} </Text>
            
            </TouchableOpacity>
        
            <TouchableOpacity 
            onPress={()=> setSelectedView(2)}
            >
                
                <Text style={{...styles.text,color: B2color ,borderColor:B2color}} >{t('contacts')}</Text>
            
            </TouchableOpacity>
        
            </View>
            <View style={styles.optionContainer}>
                {SelectedView == 1 ?  <FriendsList friends={friends}/>: renderContacts(search)}
            </View>
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
   container: {
       flexDirection : 'row',
       justifyContent: 'space-evenly',
       

   },
   text: {
       fontWeight: 'bold',
       borderBottomWidth : 1,
       padding : 10,
       paddingLeft: 50 ,
       paddingRight : 50,
       fontSize: 16

   },
   optionContainer: {
       flexDirection: 'column',
      // justifyContent: 'center',
     //  margin :10,
        maxHeight: Dimensions.get('window').height - 230,
        
      
      
   },
   chatContainer:{
    flex: 1,
    flexDirection: 'row',
    maxHeight: 65,
    borderRadius: 50,
    backgroundColor: '#F5F2EC',
    alignItems: 'center',
    margin:15,
    width : '92%',
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
name:{ marginTop:5,
 fontSize: 16,
 color:'#FFA500',
 fontWeight: 'bold'
}

});