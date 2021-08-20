import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView,TouchableHighlight, Image,ScrollView} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Button} from  'react-native-elements';
import Friend from '../../components/Community/Friends/Friend';
import {connect,useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import Post from '../../components/Community/Clubs/Post';


export function ClubTeamPage({ route, navigation }) { 
    const {t} = useTranslation(); 
    const teams = useSelector(state => state.ClubTeams.clubTeams);
    const team =  teams[route.params.teamID]
   
     
    return(
        <SafeAreaView style={styles.container}>

        <IconButton icon="arrow-left"
            color={Colors.orange400}
            size={45}
            onPress={() =>{navigation.goBack()}}
           />
           <IconButton icon="cog"
                color={Colors.orange400}
                size={40}
                onPress={() =>{props.navigation.navigate('Params')}}
                style={{...StyleSheet.absoluteFillObject , left: '80%'} }/>
            <View style={ {alignItems:'center'}}>
            
            
               <Image style={styles.image} source={team.image}/>
            
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{team.name}</Text>
             </View>
            <ScrollView >
                <View style={styles.scrollContainer}>
                    <Button title={t('upgrade club')}  buttonStyle={styles.prenium} />
                    <Text style={styles.titles}>{t('club leader')}</Text>
                    <View >
                        <Friend friend={team.leader} />
                    </View>
                    <Text style={styles.titles}>{t('club members')}</Text>
                    <TouchableOpacity onPress={() =>  /* navigation.navigate('InviteFriends',{teamID: club.key}) */ console.log('work in progress')  }>
                        <Text style={{color : 'grey', marginBottom: 10, fontWeight:'bold'}} > {t('add friends')} </Text>
                    </TouchableOpacity>
                    <FlatList 
                        data={team.members}
                        renderItem={({item})=> (
                        <Image source={ item.images[0] } style={styles.member} />
                        )}
                        horizontal={true} showsHorizontalScrollIndicator={false}
                    />

                    
                    
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <View style={styles.options}>
                        <TouchableOpacity onPress={()=> console.log('-')}>
                            <Icon name="comments-o" size={25} color="orange" />
                        </TouchableOpacity>
                        <Text style={styles.titles3}> {t('group chat')} </Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity onPress={()=> console.log('-')}>
                            <Icon name="calendar" size={25} color="orange" />
                        </TouchableOpacity>
                        <Text style={styles.titles3}> {t('calendar')} </Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity onPress={()=> console.log('-')}>
                            <Icon name="book" size={24} color="orange" />
                        </TouchableOpacity>
                        <Text style={styles.titles3}> {t('history')} </Text>
                    </View>
                   
                </View>
                {team.posts.map((item) => {
                    return(
                        <Post post= {item}/>
                    )
                }

                )}
                
            </ScrollView>
    </SafeAreaView>
          

        

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
        fontSize: 28,
        fontStyle:'italic',
        fontWeight: 'bold',
        textAlign:'center'
        
    },
    titles: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        margin: 10
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
        borderRadius: 15,
        backgroundColor: "#F4B223",
        alignSelf: 'center'
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
    titles2: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        marginLeft: 30,
        margin: 10
    },
    titles3: {
        fontSize: 14,
        color: 'orange',
        fontWeight: 'bold',
       
        textAlign: 'center'
    },
    options: {
        alignItems: 'center',
        margin: 10
    
    }
});