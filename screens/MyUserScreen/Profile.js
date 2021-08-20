import React,{useState} from 'react';
import {View,Text,Image,FlatList,TextInput,StyleSheet,SafeAreaView,TouchableHighlight,ScrollView,Dimensions} from 'react-native'; 
import {useTranslation} from 'react-i18next';
import { IconButton, Colors } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import Sport from '../../components/General/Sport';

export  function Profile(props,){
    const {t} = useTranslation(); // traduction 
    const profile =  props.route.params.profile  ;
    const [image,setImage] = useState(profile.images[0])

    return(
        
        <SafeAreaView style={styles.container}>
           <ScrollView >
            <Image source={image} style={styles.image} />
            
            <IconButton icon="arrow-left-circle-outline"
                color={Colors.orange400}
                size={45}
                onPress={() =>{props.navigation.goBack()}}
                style={styles.icon}
               />
            
                <Text style={styles.name} numberOfLines={1}> {profile.name} </Text>
                <View style={styles.infoContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="map-marker" size={17} color="orange" style={{alignSelf: 'center',paddingLeft: 4}}/>
                  <Text style={{...styles.info,marginLeft: 7}}> à calcluer </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="home" size={17} color="orange" style={{alignSelf: 'center',}}/>
                  <Text style={styles.info}> {profile.city} </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="briefcase" size={17} color="orange" style={{alignSelf: 'center',}}/>
                  <Text style={styles.info}> {profile.job} </Text>
                </View>
              </View>
              <View style={styles.bioContainer}>
                  <Text numberOfLines={4} style={styles.bio}> {profile.bio} </Text>
              </View>
              <Text style={styles.text}> {t('favorite sports')} </Text>
              <View style={{ marginLeft:5}}>
                <FlatList 
                    data={profile.sports}
                    style={{}}
                    renderItem={({item})=> (
                    <Sport sport={item} />
                    )}
                    horizontal={true} showsHorizontalScrollIndicator={false}
                />

              </View>
              <Text style={styles.text}> {t('available')} </Text>
              <View style={{flexDirection: 'row',flexWrap:'wrap',}}> 
              {profile.preferedDays != undefined ?
              
                profile.preferedDays.filter(item => item.selected == true).map((day) => {
                         
                    return(

                        <View style={{backgroundColor: 'orange', width: 80,alignItems: 'center',margin: 5 , height:30, borderRadius:14,justifyContent: 'center' }} >
                            <Text style={{fontSize: 13 , color: 'white'}}> {day.name} </Text>
                        </View>
                     )
           })
                : null
              }

            </View>
            
        </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 0,
        marginTop: 25 ,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
    image:{
        width : Dimensions.get('window').width ,
        height: Dimensions.get('window').width 
    },
    icon: {
        ...StyleSheet.absoluteFillObject
    },
    name: {
        fontSize: 30 ,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    infoContainer: {
        flexDirection: 'column',
        margin: 10,
        
    },
    info:{
        marginLeft: 5,
        
      },
    bio:{
        fontSize: 14,
        opacity: 0.7
    },
    bioContainer:{
        margin: 10,
        alignSelf: 'center',
    },
    text:{
        fontSize: 18,
        fontWeight: '800',
        color: 'orange'
    }
 
});