import React,{useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,FlatList, Image,TouchableOpacity} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import { selectAdress } from '../../actions/EventActions';
import { Button,Overlay } from 'react-native-elements';
import { deletePlace } from '../../actions/placesActions';

export  function FavoriteAdresses({navigation,route}) { 
    const {t} = useTranslation();
    const favPlaces = useSelector(state => state.Places.favPlaces);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false); // pour  l'overlay 


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
            <IconButton icon="arrow-left"
                color={Colors.orange400}
                size={55}
                onPress={() =>{navigation.goBack()}}
                style={ {right : 18}}
               />
            <Text style={styles.headerT} >{t('my favorite adresses').toUpperCase() }</Text>
        
            
            </View>   
            {favPlaces != undefined?
                <FlatList 
                data={favPlaces}
                //style={styles.container}
                renderItem={({item})=> (
                    
                <View>
                    <TouchableOpacity onPress={() =>{
                        if (route.params.event) {
                            dispatch(selectAdress(item.adress)) ;
                            navigation.goBack() }
                        }
                       }    >
                    <View style={styles.chatContainer}>
                    
                   <Image source ={ item.sport.logo} style={styles.friendImage}/>
                    <Text style={ styles.name} > {item.name} </Text>
                    <View style={{...StyleSheet.absoluteFillObject, alignItems: 'flex-end', justifyContent: 'center', marginRight: 20}}>
                        <TouchableOpacity onPress={()=> setVisible(!visible)}>
                            <Icon name="ellipsis-h" size={30} color="orange" />
                        </TouchableOpacity>
                    </View>
                   </View>
                      
                  </TouchableOpacity>
                   <Overlay
                   overlayStyle={{
                   borderRadius: 25,
                   backgroundColor: "white",
                   opacity: 0.95,
                 }}
                 isVisible={visible}
                 backdropStyle={{opacity: 0}}
                 onBackdropPress={()=> setVisible(!visible)}
               >
                 <View style={{justifyContent: 'center',alignItems: 'center'}}>
                       <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                       <Image source ={ item.sport.logo} style={{...styles.friendImage,borderColor:0}}/>
                       <Text  > {item.name} </Text>
    
                       </View>
                       <TouchableOpacity style={{borderTopWidth: 0.5 , width: '100%'}}onPress={() => {dispatch(deletePlace(item.key)); setVisible(false)}}>
                           <Text style={styles.overlayOptions}> {t('delete')} </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{borderTopWidth: 0.5 , width: '100%'}}>
                           <Text style={styles.overlayOptions}> {t('report a problem')} </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{borderTopWidth: 0.5 , width: '100%'}}>
                           <Text style={styles.overlayOptions}> {t('return')} </Text>
                       </TouchableOpacity>
                 </View>
                 
               </Overlay>
                </View>
                )}
               
                />
            :
            <View></View>}  
            
           
        </SafeAreaView>
    ); 

 }

 const styles = StyleSheet.create({
    header:{
        flex: 1 ,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        marginBottom: 25
        
        
        
    }
    ,
    headerT: {
        fontSize: 25,
        fontStyle:"italic",
        fontWeight: 'bold',
        marginTop: 30,
        right: 20
    },
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
    overlayOptions:{
        color : 'gray',
        margin : 5 , 
        alignSelf: 'center',
        
    }
});