import React,{useState} from 'react';
import {connect,useSelector,useDispatch} from 'react-redux';
import {View,Text,Image,FlatList,TextInput,StyleSheet,SafeAreaView,TouchableHighlight,ScrollView, TouchableOpacity} from 'react-native'; 
import {useTranslation} from 'react-i18next';
import { IconButton, Colors } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { toggleDay } from '../../actions/userActions';


function DayButton({day,chosen}){
    const dispatch= useDispatch()
    const [selected, setselected] = useState(chosen)
    let Bcolor
    if (selected) {
         Bcolor = "orange"
    }else{
        Bcolor = "grey"
    }
    return (
        <TouchableOpacity style={{backgroundColor: Bcolor, width: 70,alignItems: 'center',margin: 5 , height:30, borderRadius:14,justifyContent: 'center' }} onPress={ () => {setselected(!selected);dispatch(toggleDay(day)) }}>
            <Text style={{fontSize: 13 , color: 'white'}}> {day} </Text>
        </TouchableOpacity>
    )
}




export function MyUser(props) { 
    const userInformation = useSelector(state => state.UserInfo.userInfo);
    const images =  useSelector(state => state.UserInfo.images);
    const userInfo = {...userInformation, images}
    const {t} = useTranslation(); // traduction 
    const prefDays = useSelector(state => state.UserInfo.userInfo.preferedDays);

    return(
        
        <SafeAreaView style={styles.container}>
             <IconButton icon="cog"
                color={Colors.orange400}
                size={45}
                onPress={() =>{props.navigation.navigate('Params')}}
                style={{...StyleSheet.absoluteFillObject , left: '80%'} }/>
                
             <View style={ {alignItems:'center'}}>
            
             <TouchableHighlight style={styles.profileImgContainer} onPress={ () =>{props.navigation.navigate('Profile',{profile: userInfo})}}>
                <Image style={styles.image} source={userInfo.images[0]}/>
             </TouchableHighlight>
             </View>
             <TouchableOpacity style={{position:'absolute', left:'59%'}} onPress={()=>props.navigation.navigate('UserPictures',{profile: userInfo}) }>
                <Icon name="plus" size={30} color="orange" />
                 </TouchableOpacity>
             <View style={styles.nameContainer}>
                <Text style={styles.name}>{userInfo.name}</Text>
             </View>
             <ScrollView>
                <Button title={t('upgrade profile')}  buttonStyle={styles.upgrade} onPress={ ()=> props.navigation.navigate('PreniumProfile') }  />
                <Text style={styles.titles}>{t('prefered days') } </Text>
                <View style={{flexDirection:'row', justifyContent: 'space-evenly',flexWrap:'wrap',}}>
                {
                prefDays.map((item) => {
                         
                         return(

                             <DayButton day={item.name} chosen={item.selected}/>
                          )
                })
                
                            
                }
                </View>
               
               
               
                
                <Text style={styles.titles} >{t('add a biography') }</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('add a description')+'...'}
                    value={userInfo.bio}
                    style={styles.Tinput}
                />
                <Text style={styles.titles} >{t('my job') }</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('add my job')+'...'}
                    value={userInfo.job}
                    style={styles.Tinput}
                />
                <Text style={styles.titles} >{t('i live here') }</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('add a city')+'...'}
                    value={userInfo.city}
                    style={styles.Tinput}
                />
                <Text style={styles.titles} >{t('points of interest') }</Text>
                
            </ScrollView>
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        marginTop: 60 ,
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
        fontWeight: 'bold'
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
    upgrade:{
        backgroundColor: '#FFE245' , 
        margin : 10 ,
        width: 150, 
        borderRadius: 25,
        alignSelf:'center',
        borderColor:'#FFE245',
         borderWidth:2 
       
      },

});