import React, { useState } from 'react';
import {  Overlay, Button } from 'react-native-elements';
import { Image, StyleSheet, View, Dimensions,Text,TouchableOpacity,
  useWindowDimensions,SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useTranslation} from 'react-i18next';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



//

export default function PersonCard(props){

  const {t} = useTranslation(); 

  const [visible, setVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(()=> {return 0} )
  const toggleReport = () => {
    setVisible(!visible);
  }
  
  const imageChangeHandlerRight = ()=> {
    if ( imageIndex < props.profile.images.length -1  ) {
      setImageIndex(imageIndex + 1)
      console.log(imageIndex)
    }
  }
  const imageChangeHandlerLeft= ()=> {
    if ( imageIndex > 0) {
      setImageIndex(imageIndex - 1)
      console.log(imageIndex)
    }
  }

 
  return (
      <SafeAreaView style={StyleSheet.absoluteFillObject}>
        
        <Image style={styles.image} source={props.profile.images[imageIndex]} />
        
        <View style={styles.overlay}>
          <View style={styles.header}>
           
          </View>
          <View style={styles.imageChange}>
           <Button buttonStyle={styles.imageChangeButtons} onPress={imageChangeHandlerLeft} />
           <Button buttonStyle={styles.imageChangeButtons} onPress={imageChangeHandlerRight} />

          </View>
          
          <View style={styles.footer}>
            <Text style={styles.name}>{props.profile.name}</Text>
            <View style={styles.infoContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="map-marker" size={17} color="orange" style={{alignSelf: 'center',paddingLeft: 4}}/>
                  <Text style={{...styles.info,marginLeft: 7}}> à calcluer </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="home" size={17} color="orange" style={{alignSelf: 'center',}}/>
                  <Text style={styles.info}> {props.profile.city} </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="briefcase" size={17} color="orange" style={{alignSelf: 'center',}}/>
                  <Text style={styles.info}> {props.profile.job} </Text>
                </View>
              </View>
              
                <TouchableOpacity onPress={toggleReport} style={{alignSelf: 'flex-end'}}hitSlop={{ top: 10, bottom: 20, left: 20, right: 20 }}>
                  <Icon name="info-circle" size={20}  color="white" />
                </TouchableOpacity>
                

                {/*report overlay*/}
                <Overlay isVisible={visible} onBackdropPress={toggleReport} overlayStyle={{borderRadius:30, width:'70%'}}>
                  <View style={styles.report}>
                    <Text style={{fontWeight: '300', fontSize: 18,alignSelf:'center', color:'orange'}}>{t('report')}</Text>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                       <Text style={styles.RepText}>{t('fake profile/spam')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                        <Text style={styles.RepText}>{t('inappropriate messages')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                        <Text style={styles.RepText}>{t('inappropriate profile picture')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                        <Text style={styles.RepText}>{t('inappropriate bio')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                       <Text style={styles.RepText}>{t('minor user')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                        <Text style={styles.RepText}>{t('off-application behavior')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.RepBloc}>
                      <TouchableOpacity>
                        <Text style={styles.RepText}>{t('someone is in danger')} </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center', padding: 10}}>
                      <TouchableOpacity onPress={toggleReport}>
                        <Text style={{...styles.RepText,fontSize: 16}}>{t('cancel')} </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                </Overlay>
              
          </View>
        </View>
       
      </SafeAreaView>
      
  )
;
}
const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
    
    
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "column",
  },
  name: {
    color: "white",
    fontSize: 32,
    
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#6ee3b4",
  },
  likeLabel: {
    fontSize: 32,
    color: "#6ee3b4",
    fontWeight: "bold",

  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#ec5288",
  },
  nopeLabel: {
    fontSize: 32,
    color: "#ec5288",
    fontWeight: "bold",
  },
  info:{
    marginLeft: 5,
    color: 'white'
  },
  infoContainer: {
    flexDirection: 'column',
    margin: 5,
    marginBottom: '10%'
    
},
  RepBloc:{
    borderBottomWidth: 0.5 ,
    padding: 10,
  },
  RepText:{
    fontSize: 12 , 
    color : '#939393',
    fontWeight:'bold',
    textAlign:'center'
  },
  imageChange:{
    ...StyleSheet.absoluteFillObject,
    flexDirection : 'row',
    justifyContent: 'center',
    
  },
  imageChangeButtons:{
    backgroundColor: 0,
    height: '70%',
    width:Dimensions.get('window').width * 0.45  ,

    
  }
  });