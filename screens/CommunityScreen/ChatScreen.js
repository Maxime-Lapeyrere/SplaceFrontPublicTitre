import React,{useState} from 'react';
import {View,Text,TextInput, SafeAreaView, Dimensions ,StyleSheet, Image, TouchableOpacity, FlatList,TouchableWithoutFeedback} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import {connect,useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from 'react-native-elements';
import {sendMessage} from '../../actions/ChatActions'
//responsivity
var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}
 export  function ChatScreen({navigation,route}) { 
    
    const profiles =  useSelector(state => state.Profiles.profiles ) ;
    const chat =  useSelector(state => state.Chat.chat[route.params.chatID ] ) ;
    const profile = profiles.filter( item => item.key  == chat.reciever.key);
    const [message, onChangeMessage] = useState('');
    const dispatch = useDispatch();
    const messageSender = ()=> {
        const msg = {id: 'MSG' + Math.floor(Math.random() * 999).toString(), sender:'user',date: '20/07/2021', content : message}
        dispatch(sendMessage(msg,route.params.chatID))
        onChangeMessage('')
        //console.log(chat);
    }
    return(
        <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
            <View style={styles.header}>
               
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={30} color="orange"/>
                </TouchableOpacity>
                <View style={{ alignItems: 'center'}}>
                    <TouchableWithoutFeedback  onPress={() => navigation.navigate('Profile',{profile: profile[0]})} >
                        <Image source={chat.reciever.image} style={ styles.image}/>
                    </TouchableWithoutFeedback>
                    <Text style={ styles.name}> {chat.reciever.name} </Text>
                </View>
                <TouchableOpacity >
                    <Icon name="plus" size={30} color="orange"/>
                </TouchableOpacity>

            </View>
            <View style={ styles.body}>
                <FlatList 
                    inverted
                    data={chat.messages}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> (
                        <View>
                           {item.sender=='user'?
                            <View style={ styles.userMessage}>
                                <Text style={{...styles.messageText,color:'white'}}>{item.content} </Text>
                            </View>:
                            <View style={{flexDirection : 'row'}}>   
                                <Image source={chat.reciever.image} style={ styles.smallImage}/>
                                <View style={ styles.freindMessage}>
                                <Text style={styles.messageText}>{item.content} </Text>
                                </View>
                                
                            </View>
                            }  
                        </View>
                    )}
            
                   
                />
            </View>
            <View style={ styles.footer}>
                <TouchableOpacity style={{marginLeft: 15, alignSelf:'center'}} >
                     <Image source={ require('../../assets/misc/camera.png')}/>
                </TouchableOpacity>
                
                <Input
               // placeholder='INPUT WITH ICON'
                rightIcon={
                    <TouchableOpacity onPress={messageSender}>
                        <Icon
                            name='send'
                            size={16}
                            color='grey'
                        />
                    </TouchableOpacity>
                  }
                containerStyle={styles.Tinput}
                onChangeText={onChangeMessage}
                value={message}
                />
                
                <View style={{marginTop: 5}} >
                    <TouchableOpacity style={{marginRight: 15,}} >
                        <Image source={ require('../../assets/misc/call.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, alignSelf:'flex-end'}}>
                        <Image source={ require('../../assets/misc/video.png')}/>
                    </TouchableOpacity>        
                </View>
            </View>
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
   header: {
       flexDirection:'row',
       marginTop: TopMargin,
       justifyContent: 'space-between',
       alignItems: 'center',
       margin: 15,
       borderBottomWidth: 0.3,
       borderColor: 'grey'
       

   },
   image:{
    height: 60,
    width: 60,
    borderRadius: 60/2,
    justifyContent: 'center',
    margin: 15 
},
name:{
    bottom:10
},
userMessage:{
    backgroundColor: '#FFC600',
    marginLeft: '45%',
    margin: 15,
    borderRadius: 15
},
messageText:{
    margin: 12,
    textAlign: 'left',
    fontSize : 14
},
freindMessage:{
    backgroundColor: '#DADADA', 
    marginRight: '50%',
    margin: 15,
    borderRadius: 15
},
smallImage:{
    height: 35,
    width: 35,
    borderRadius: 35/2,
    justifyContent: 'center',
    marginLeft: 5 ,
    alignSelf: 'center'
},
date: {
    fontSize: 10,
   
},
footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    borderTopWidth: 0.3,
    borderColor: 'grey',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 5 ,
    marginRight: 5
    
},
body: {
    height: Dimensions.get('window').height - 250,
    
},
Tinput:{
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 5,
    
    margin: 5,
    borderRadius: 25,
    width: '65%',
    height: 45
}
});