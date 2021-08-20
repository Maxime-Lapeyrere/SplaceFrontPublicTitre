import React from 'react';
import {View,SafeAreaView,Text,StyleSheet} from 'react-native'; 
import {connect,useSelector,useDispatch} from 'react-redux';
import FriendsList from '../../components/General/FriendsList';
import { IconButton, Colors } from 'react-native-paper';
import {Button} from  'react-native-elements';
export  function inviteFriends({navigation,route}) { 
   
    
    const friends = useSelector(state => state.UserFriends.userFriends);
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
        <View>
            <FriendsList friends={friends} teamID={route.params.teamID} eventID={route.params.eventID} navigation={ navigation }/>
        </View>    
        
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
   
});