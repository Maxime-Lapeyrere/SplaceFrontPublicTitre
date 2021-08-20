import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView,TouchableHighlight, Image,ScrollView} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Button} from  'react-native-elements';

import {connect,useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import TeamCard from '../../components/Community/Teams/TeamCard';



export function ClubPage({ route, navigation }) { 
    const {t} = useTranslation(); 
    const clubs = useSelector(state => state.Clubs.clubs);
    const Cindex = clubs.findIndex(clubs => clubs.key == route.params.clubID);//club  index 
    const club =  clubs[Cindex]
    const teamKeys = club.teams // tableau contenant les id de chaque chat 
    const teams = useSelector(state => state.ClubTeams.clubTeams);
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
            
            
               <Image style={styles.image} source={club.image}/>
            
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{club.name}</Text>
             </View>
        <View style={styles.teamsContainer}>  
         <FlatList 
            data={teamKeys}
            contentContainerStyle={{alignItems:'center',margin: 10,flexGrow: 1}}
            keyExtractor={item => item}
            //numColumns={1}
            
            renderItem={({item})=> (
                <View>
                   <TouchableOpacity onPress={()=> navigation.navigate('ClubTeamPage',{ teamID: item }) } > 
                        <TeamCard team={teams[item]}  navigation={navigation}  />
                    </TouchableOpacity>
                </View>
            )} />
       </View>

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
    
    },
    teamsContainer: {
        
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    }
});