import React,{useState} from 'react';
import { StyleSheet, Text,Image ,  View,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Friend from '../Community/Friends/Friend'
import { SearchBar,Button } from 'react-native-elements';
import {connect,useSelector,useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from "react-native-vector-icons/FontAwesome";
import { addMembers } from '../../actions/TeamsActions';
import { selectFriends } from '../../actions/FriendsActions';


export default function FriendsList({friends,teamID,navigation,eventID}){
  
  const [selectedFriends, setselectedFriends] = useState(()=> {return []})
  const dispatch = useDispatch()
  const handleConfim  = ()=> {
    if (teamID != null) {
      return <Button title={'done'} buttonStyle={styles.buttons} onPress={AddTeamMembers}/>   
    }else{
      return <Button title={'done'} buttonStyle={styles.buttons} onPress={AddEventMembers}/>   

    }
  }
  const AddTeamMembers = ()=> {
      if (selectedFriends.length > 0) {
          dispatch(addMembers(teamID,selectedFriends));
         
          console.log('members added')
          navigation.goBack();
      }
     
     
  } 

  const AddEventMembers = ()=> {
    if (selectedFriends.length > 0) {
        dispatch(selectFriends(selectedFriends));  
        navigation.goBack();
    }
   
   
} 
  
  const [search,updateSearch] = useState('');
  const {t} = useTranslation(); // traduction 

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
       <ScrollView
       
       >
         { friends.map((item)=> {
          const [selected, setselected] = useState(true)
          if (selected) {
            var highlighted = 0
          }else
          {
            var highlighted = 'orange' 
          }
          return(
            <TouchableOpacity key={item.key}
              onPress={()=>{
               setselected(!selected);
               if (selected){
                setselectedFriends([...selectedFriends, item]) 

               }else{
                 setselectedFriends(selectedFriends.filter(f => f.key !== item.key))
               }
               console.log(selected)
               
               }}>
              
              <View style={{...styles.chatContainer,borderWidth: 1,borderColor: highlighted}}>
                
              <Image source ={ item.images[0]} style={styles.friendImage}/>
              <Text style={ styles.name} > {item.name} </Text>
              <View style={{...StyleSheet.absoluteFillObject, alignItems: 'flex-end', justifyContent: 'center', marginRight: 20}}>
                  <TouchableOpacity onPress={()=> console.log('-')}>
                      <Icon name="ellipsis-h" size={30} color="orange" />
                  </TouchableOpacity>
              </View>
             </View>
          </TouchableOpacity>
          )

         })
         
         
         }

         </ScrollView>
      

      
     {handleConfim()} 
  </View>
    
   
   )

    

}
const styles = StyleSheet.create({
  friendImage:{
    height: 50,
    width: 50,
    borderRadius: 50/2,
    borderColor: '#ffbb29',
    borderWidth: 2,
    justifyContent: 'center',
    margin:12
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
name:{ marginTop:5,
  fontSize: 16,
  color:'#FFA500',
  fontWeight: 'bold'
 },
 text: {
  fontWeight: 'bold',
  borderBottomWidth : 1,
  padding : 10,
  paddingLeft: 50 ,
  paddingRight : 50,
  fontSize: 16

},
 buttons:{
  margin: 15,
  borderRadius: 15,
  backgroundColor: "#F4B223",
  alignSelf: 'center'
},
  });