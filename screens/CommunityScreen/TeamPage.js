import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView,TouchableHighlight, Image,ScrollView} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Button} from  'react-native-elements';
import Friend from '../../components/Community/Friends/Friend';
import MessageBubble from '../../components/General/MessageBubble'
import {connect,useSelector,useDispatch} from 'react-redux';

export function TeamPage({ route, navigation }) { 
    const {t} = useTranslation(); 
    const teams = useSelector(state => state.Teams.teams);
    const Tindex = teams.findIndex(teams => teams.key == route.params.teamID);
    const team =   teams[Tindex]
    const renderDefault = (type) => {// fonction qui affiche un message si il y a pas un historique ou autre définit dans le team 
        let message ;
        switch (type) {
            case 'calendar':
                message = t('nothing is here at the moment create an event or invite your team')
                break;
            case 'history':
                message = t('nothing is here at the moment participate in a match with your team')
                break;
            default:  message = t('nothing is here at the moment')
                break;
        }
        return(
            <View style={{marginLeft : 40,marginRight : 40,}}>
                <Text style={{fontSize: 14, color : '#939393',textAlign:'center'}}>
                    {message}
                </Text>
            </View>
        )
    }
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
                    <Button title={t('upgrade team')}  buttonStyle={styles.prenium} onPress={() =>  navigation.navigate('PreniumTeam')}/>
                    <Text style={styles.titles}>{t('team leader')}</Text>
                    <View >
                        <Friend friend={team.leader} />
                    </View>
                    <Text style={styles.titles}>{t('team members')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('InviteFriends',{teamID: team.key})  }>
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
                <Text style={styles.titles2}>{t('group chat')}</Text>
                <TouchableOpacity>
                    <MessageBubble  name={t('last message')} text={team.lastMessage.Message} image={team.lastMessage.user.images[0]} />
                </TouchableOpacity>
                    <Text style={styles.titles2}>{t('calendar')}</Text>
                        
                         {team.calendar != null ? renderCalendar() : renderDefault('calendar') }
                    
                    <Text style={styles.titles2}>{t('history')}</Text>
                    {team.calendar != null ? renderCalendar() : renderDefault('history') }
                    <Button 
                    title={'create an event'} buttonStyle={styles.buttons} onPress={()=> props.navigation.navigate('Profile')/* à changer quand je code le screen */}
            />
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
});