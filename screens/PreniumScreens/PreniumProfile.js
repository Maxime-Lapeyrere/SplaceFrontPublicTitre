import React,{useState} from 'react';
import {View,SafeAreaView,Text,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'; 
import {connect,useSelector,useDispatch} from 'react-redux';
import {Button} from  'react-native-elements';
import {useTranslation} from 'react-i18next';
import Swiper from 'react-native-swiper'
export  function PreniumProfile({navigation,route}) { 
   
    const {t} = useTranslation(); 
    const [selectedOffer, setselectedOffer] = useState('');
    const [selectButton, setselectButton] = useState([0,0])
    
    return(

        <ScrollView        style={{flex:1,flexDirection:'column',backgroundColor:'white',}} showsVerticalScrollIndicator={false} >
        <View style={styles.header}>
            <Text style={styles.headerText}> {t('upgrade your profile').toUpperCase()} </Text>
        </View>
        
        <Swiper style={styles.wrapper} dotStyle={{width: 60,height:4, }} activeDotStyle={{width: 60,height:4,backgroundColor:'#FFCC51'}} >
            <View style={styles.slide}>
                <Image source={require('../../assets/misc/splaceIcon.png')}  style={styles.icon}/>
                <Text style={styles.swipertext}> {t('find out who is interested in your profile')} </Text>
            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/misc/splaceIcon.png')}  style={styles.icon}/>
                <Text style={styles.swipertext}>{t('swipe and find events around the world')} </Text>

            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/misc/splaceIcon.png')}  style={styles.icon}/>
                <Text style={styles.swipertext}>{t('participate and create as many events as you want ')}</Text>
            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/misc/splaceIcon.png')}  style={styles.icon}/>
                <Text style={styles.swipertext}>{t('take advantage of even more advanced filters based on the days and times you search')}</Text>
            </View>
        </Swiper>
        
        <View>
            <Text style={{...styles.notice,fontWeight: 'bold'}}> {t('paid subscription, can be cancelled at any time')} </Text>
            <Text style={{...styles.notice,}}> {t('by pressing the button below, your payment will be charged to your iTunes account, and your subscription will be automatically renewed for the same duration and price, unless you cancel it in the Itunes settings at least 24 hours before your current subscription ends. By pressing the button above, you agree to our terms of use and privacy policy.')} </Text>
          
        </View>    
        <View style={styles.buttons} >
            <TouchableOpacity onPress={()=> {setselectButton(['orange',0]); setselectedOffer('monthly')}} style={{...styles.button,borderColor: selectButton[0]}} >
                <Text style={styles.buttonText} > {1} </Text>
                <Text style={styles.buttonText}> {t('month')} </Text>
                <Text style={{...styles.buttonText,color: 'grey'}} >5,99€</Text>
                <Text style={styles.buttonText} >5.99€/{t('month')}</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setselectButton([0,'orange']); setselectedOffer('yearly')}} style={{...styles.button,borderColor: selectButton[1]}} >
                <View style={styles.reduction} >
                    <Text style={{color: 'orange', textAlign: 'center', alignItems: 'center',alignSelf: 'center', fontSize: 12}}> -20% </Text>
                            

                </View>
                <Text style={styles.buttonText} >1 </Text>
                <Text style={styles.buttonText} >{t('year')}</Text>
                <Text style={{...styles.buttonText,color: 'grey'}} >57,49€</Text>
                <Text style={styles.buttonText} >5.99€/{t('month')}</Text>


                </TouchableOpacity>
        </View>
        <View style={{marginBottom: 80}}>
        <Button title={t('continue')}  buttonStyle={styles.continue} />
        <Button title={t('no thank you')}  buttonStyle={{...styles.continue, backgroundColor: 'white',}} titleStyle={{color: '#FFD74B'}} onPress={() => navigation.goBack()}/>

        </View>
        
        </ScrollView>
   
    ); 

 }

 const styles = StyleSheet.create({
   header:{
       backgroundColor : '#FFE245',
       height: '25%',
       transform: [
      
        { rotateZ: "-6deg" }
      ],
     width: '120%',
     alignSelf: 'center',
     justifyContent: 'center',
     bottom: 20
   },
   headerText: {
       color:'white', 
       fontWeight:'bold', 
       fontSize:40,
       fontStyle:'italic',
       textAlign:'center',
       maxWidth: '62%',
       alignSelf: 'center',
       marginTop: 20
   },
   slide:{
       justifyContent: 'center',
       alignSelf: 'center',
       alignContent: 'center',
       
      
   },
   icon: {
    alignSelf: 'center',
    height: 30 ,
    width: 25,
    margin: 5
   },
   swipertext: {
       textAlign:'center',
       margin: 10,
       fontSize: 16,
       fontWeight:'bold'
   },
   wrapper: {
    height: 170
   },
   notice: {
       fontSize: 12, 
       textAlign:'center',
       margin: 5
   },
   buttons: {
       flexDirection:'row',
       justifyContent: 'space-evenly',
       margin: 20
   },
   button:{
       width: 115 ,
       backgroundColor: '#FFE245',
       height: 110,
       borderRadius: 25,
       justifyContent: 'center',
       borderWidth: 1.5,
      

   },
   buttonText:{
        textAlign:'center',
        color: 'white', 
        fontSize:15,
        fontWeight:'bold',

   },

   reduction:{
       
        backgroundColor:'white',
        width: '50%',
        height: '16%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        transform: [
      
            { rotateZ: "30deg" }
          ],
        
        
        position: 'absolute',
       
        justifyContent: 'center',
        top: 8,
       borderRadius: 8,
        position: 'absolute',
        marginLeft: 10
   },
   continue:{
    backgroundColor: '#FFE245' , 
    margin : 10 ,
    width: 150, 
    borderRadius: 25,
    alignSelf:'center',
    borderColor:'#FFE245',
     borderWidth:2 
   
  },

});