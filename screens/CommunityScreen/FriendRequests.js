import React from 'react';
import {View,SafeAreaView,Text,StyleSheet,FlatList,Image,Dimensions} from 'react-native'; 
import {connect,useSelector,useDispatch} from 'react-redux';
import FriendsList from '../../components/General/FriendsList';
import { IconButton, Colors } from 'react-native-paper';
import {Button} from  'react-native-elements';
import {useTranslation} from 'react-i18next';
import Icon from "react-native-vector-icons/FontAwesome";
import { acceptFriend, declineFriend } from '../../actions/FriendsActions';



export  function FriendRequests({navigation,route}) { 
   
    const {t} = useTranslation(); // traduction 
    const dispatch = useDispatch()
    const friendRequests = useSelector(state => state.UserFriends.friendRequests);
    return(
        <SafeAreaView>
        <View>
          <IconButton icon="arrow-left"
                color={Colors.orange400}
                size={45}
                onPress={() =>{navigation.goBack()}}
                style={styles.icon}
            />
        </View>
       
        <FlatList 
                data={friendRequests}
                contentContainerStyle={{alignItems: 'center', height: '100%'}}
                keyExtractor={item => item}
                renderItem={({item})=> (
                   friendRequests.length > 0? // pour ne pas afficher une bulle vide quand il n'ya pas des messages
                    <View style={styles.friendContainer}>
                        <Image source={item.images[0]} style={styles.friendImage}  />
                        <Text style={styles.Fname}> {item.name} </Text>
                        <Text style={styles.text}> {item.age + ' ' + t('years')} </Text>
                        <View style={{flexDirection:'row'}}>
                        <Icon
                            name='home'
                            size={16}
                            color='orange'
                            style={{alignSelf: 'center'}}
                            
                        />
                            <Text style={styles.text}> {item.city} </Text>

                        </View>
                        <View style={styles.buttons}>
                            <Button buttonStyle={styles.button} title={t('decline')} titleStyle={styles.buttonText} onPress={()=> dispatch(declineFriend(item.key))}/>
                            <Button buttonStyle={{...styles.button,backgroundColor:'#5EFAAC'}} title={t('accept')} titleStyle={styles.buttonText} onPress={()=> {dispatch(acceptFriend(item));dispatch(declineFriend(item.key))}}/>
                        </View>
                    </View>
                    :
                    <View>
                        <Text > {t('nothing here')} </Text>
                    </View>
                )}
            
                   
                 />
           
        
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
    friendImage:{
        height: 55,
        width: 55,
        borderRadius: 55/2,
        justifyContent: 'center',
        margin: 5 ,
        borderColor: 'white',
        borderWidth: 2
    },
    friendContainer:{
        backgroundColor:'#F5F2EC',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,  
        elevation: 4,
        justifyContent: 'center',
        alignItems:'center',
        width: Dimensions.get('window').width - 100,
        borderRadius: 25

    },
    Fname: {
       margin: 5,
       fontSize: 18 ,
       fontWeight: 'bold',
       fontStyle: 'italic',
       color: 'orange',

    },
    button:{
        width: 70,
        borderRadius: 25 ,
        backgroundColor: '#FF4343',
        margin: 5
    },
    buttonText:{
        fontSize: 12
    },
    buttons:{
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    }
});