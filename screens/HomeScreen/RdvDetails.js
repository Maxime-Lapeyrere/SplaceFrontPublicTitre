import React,{useState} from 'react';
import {View,Text,Image,FlatList,StyleSheet,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native'; 
import {useTranslation} from 'react-i18next';
import { IconButton, Colors } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import Sport from '../../components/General/Sport';
import {  Button,Overlay } from 'react-native-elements';

export  function RdvDetails(props,){
    const {t} = useTranslation(); // traduction 
    const rdv =  props.route.params.rdv  ;
    const [visible, setVisible] = useState(false);

    const toggleReport = () => {
        setVisible(!visible);
    }
    return(
        
        <SafeAreaView style={styles.container}>
            
            <Image source={rdv.image} style={styles.image} />
            <IconButton icon="arrow-left-circle-outline"
                color={Colors.orange400}
                size={45}
                onPress={() =>{props.navigation.goBack()}}
                style={styles.icon}
               />
            <ScrollView style={{margin: 5}}>
                <Text style={styles.name} numberOfLines={1}> {rdv.name} </Text>
                <Text style={{fontSize: 16 ,alignSelf: 'center'}}> {rdv.adress} </Text>
              
              <Text style={{...styles.text,alignSelf:'center',marginTop: 15}}> {rdv.date} </Text>
              <View style={{ marginLeft:5 , marginTop: 20,  marginBottom:10}}>
                <FlatList 
                    data={rdv.members}
                    style={{alignSelf: 'center'}}
                    renderItem={({item})=> (
                        <Image source={ item.image } style={styles.member} />
                    )}
                    horizontal={true} showsHorizontalScrollIndicator={false}
                />

              </View>

              <Text style={styles.text}> {t('description')} </Text>
              <View style={styles.bioContainer}>
                  <Text numberOfLines={4} style={styles.bio}> {rdv.description} </Text>
              </View>
              <Button 
                title={t('go to chat')} buttonStyle={styles.buttons} onPress={()=> console.log('')/* à changer quand je code le screen */}
                />
                <TouchableOpacity onPress={toggleReport} >
                    <Text style={{ margin: 5 , fontSize:19,textDecorationLine:'underline', alignSelf: 'center'}}> {t('leave event')} </Text>
                </TouchableOpacity>
            
                <Overlay isVisible={visible} onBackdropPress={toggleReport} overlayStyle={{borderRadius:30, width:'70%'}}>
                  <View style={styles.report}>
                        <Text style={{fontSize: 20, alignSelf:'center', margin: 15,  marginBottom : 30}}> {t('abandon session'+'?')} </Text>
                       <View style={{flexDirection:'row',justifyContent:'space-evenly', marginBottom: 10,}}>
                        <Button title={t('go back')  } 
                                buttonStyle={{ width: 100 , backgroundColor: '#F95C59' , borderRadius: 25 ,}}
                                onPress={toggleReport}
                        />
                        <Button title={t('confirm')  } 
                                buttonStyle={{ width: 100 , backgroundColor: '#5EFAAC' , borderRadius: 25 ,}}
                                onPress={toggleReport}
                        />
                        </View>
                  </View>
                </Overlay>
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
        width : '100%',
        height:'28%'
    },
    icon: {
        ...StyleSheet.absoluteFillObject
    },
    name: {
        fontSize: 30 ,
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'center'
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
        color: 'orange',
        margin: 5
    },
    member:{
        height: 45,
        width: 45,
        borderRadius: 45/2,
        justifyContent: 'center',
        margin: 5 ,
        
    },
    buttons:{
        margin: 15,
        borderRadius: 25,
        backgroundColor: "#F4B223",
        width: 150,
        alignSelf: 'center',
        marginTop: 30
        
    }
 
});