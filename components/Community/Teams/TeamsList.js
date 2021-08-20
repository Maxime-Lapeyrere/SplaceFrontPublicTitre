import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,SafeAreaView ,FlatList, TouchableOpacity} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import TeamCard from './TeamCard'
import {useSelector,useDispatch} from 'react-redux';

var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}


export default function TeamsList(props){
  const {t} = useTranslation(); // traduction 
  const [search,updateSearch] = useState('');
  const teams = useSelector(state => state.Teams.teams);
  const clubs = useSelector(state => state.Clubs.clubs);
 
  return(
  <SafeAreaView style={styles.container}>
     <View style={styles.mainContainer}>
            <SearchBar
              placeholder={t('search') + "..."}
              onChangeText={()=> updateSearch(search)}
              value={search}
              round={true}
              lightTheme={true}
              inputStyle={{backgroundColor: 'white',borderRadius:20}}
              inputContainerStyle={{backgroundColor: 'white',borderRadius:20}}
              containerStyle={{ backgroundColor: '#F5F2EC', borderColor: '#F5F2EC',marginTop: '22%'}}
            />
          
            <View style={{flex: 2}}>
            <FlatList 
            data={[...teams, ...clubs]}
            style={styles.container}
            renderItem={({item})=> (
              <TouchableOpacity onPress={ ()=> 
               {
                if (item.key[0]== 'C') {
                  props.navigation.navigate('ClubPage',{ clubID: item.key })
                }else{
                  props.navigation.navigate('TeamPage',{ teamID: item.key })
                }
                
              
              }
               }>
                  <TeamCard team={item} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            />
            
          
          
        </View>
        <Button 
            title={t('create my team')} buttonStyle={styles.buttons} onPress={()=> props.navigation.navigate('TeamCreate')}
            />
        </View>

        
  </SafeAreaView>
)}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    
  },
  mainContainer:{
    flex: 1 ,
    flexDirection: 'column',
    
  },
  buttons:{
    margin: 15,
    borderRadius: 25,
    backgroundColor: "#F4B223",
    width: 150,
    alignSelf: 'center',
    
}
  });