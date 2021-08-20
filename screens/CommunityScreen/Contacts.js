import React,{useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView, ScrollView,FlatList,Image,TouchableOpacity} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import { set } from 'react-native-reanimated';
import {FriendsList} from '../../components/General/FriendsList';
import {connect,useSelector,useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import MessageBubble from '../../components/General/MessageBubble'
import { addChat } from '../../actions/ChatActions';
var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}


export function Contacts(props) { 
    const {t} = useTranslation(); // traduction 
    const [search,updateSearch] = useState('');
    const friends = useSelector(state => state.UserFriends.userFriends);
    const friendreq = useSelector(state => state.UserFriends.friendRequests);
    const chat = useSelector(state => state.Chat.chat)
    const chatKeys = Object.keys(chat); // tableau contenant les id de chaque chat 
    const onFreindPress = (friend)=> {
        
        
        props.navigation.navigate('ChatScreen',{chatID: friend.chatID})

    }
   

    return(
        <SafeAreaView  style={{...StyleSheet.absoluteFillObject,flexDirection: 'column', backgroundColor:'#F7F4EF', }}>


            <View style={styles.buttons}>
             <IconButton icon="square-edit-outline"
                color={Colors.orange400}
                size={35}
                onPress={() =>{/*screen navigation to chat*/}}
                style={{marginTop: -2 }}
                />
            
            <IconButton icon="account-plus"
                color={Colors.orange400}
                size={35}
                onPress={() =>{props.navigation.navigate('AddContacts')}}
                style={{marginTop: -2 }}/>
            
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('FriendRequests')}>
                <Text style={styles.fq}> {t('friend requests') + ' ' +  friendreq.length } </Text>
            </TouchableOpacity>
           <View >
            <SearchBar
                placeholder={t('search') + "..."}
                onChangeText={()=> updateSearch(search)}
                value={search}
                round={true}
                lightTheme={true}
                inputStyle={{backgroundColor: 'white',borderRadius:20}}
                inputContainerStyle={{backgroundColor: 'white',borderRadius:20}}
                containerStyle={{ backgroundColor: '#F5F2EC', borderColor: '#F5F2EC',}}
                />
            </View>
            <View style={{flex:0, marginBottom: 10}} >
                <FlatList 
                data={friends}
               
                renderItem={({item})=> (
                    <TouchableOpacity onPress={ ()=> onFreindPress(item)} >
                    
                        
                        <Image source={ item.images[0] } style={styles.friend} />
                        
                    
                    </TouchableOpacity>
                )}
                horizontal={true} showsHorizontalScrollIndicator={false}
                />
           </View>
           <View style={{flex:2}} >
            <FlatList 
                data={chatKeys}
                contentContainerStyle={{alignItems: 'center', }}
                keyExtractor={item => item}
                renderItem={({item})=> (
                    chat[item].messages[chat[item].messages.length - 1 ]!= undefined? // pour ne pas afficher une bulle vide quand il n'ya pas des messages
                    <TouchableOpacity onPress={() =>props.navigation.navigate('ChatScreen',{chatID: item})}>  
                        <MessageBubble  name={chat[item].reciever.name}  image={chat[item].reciever.image} text={chat[item].messages[chat[item].messages.length - 1].content}/>
                        
                    </TouchableOpacity>
                    :
                    <View></View>
                )}
            
                   
                 />
            
             </View>
           
            
        </SafeAreaView>

    ); 

 }

 const styles = StyleSheet.create({
     buttons: {
        
         flexDirection: 'row',
         justifyContent: 'space-between',
         margin: 12,
        marginTop: TopMargin
     },
   
     friendImage:{
        height: 45,
        width: 45,
        borderRadius: 45/2,
        justifyContent: 'center',
        margin: 15 
    },
   
    friend:{
        height: 65,
        width: 65,
        borderRadius: 65/2,
        justifyContent: 'center',
        margin: 6 
    },
    fq:{
        color: '#3030A3',
        fontSize: 16,
        margin: 10 ,
        fontWeight: 'bold'

    }
   
});