import React , {createRef,useState} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity } from 'react-native';
import { Button,Overlay } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';
import PersonCard from './PersonCard';
import {connect,useSelector,useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import PeopleFilter from './PeopleFilter';
import { Dimensions } from 'react-native';
import Filter from '../../../components/General/Filter'

var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}


export default function SwiperPeople(props){
    const profiles = useSelector(state => state.Profiles.profiles);
    const swipeRef = createRef();
    const [showButtons, setshowButtons] = useState(true)
    const [visible, setVisible] = useState(false);
    const toggleFilter = () => {
  
      setVisible(!visible);
  
    }
  
 return(
    <SafeAreaView style={styles.container}>
        
         <Swiper
            cards={
                profiles
            }
            renderCard={(card) => {
                return (
                    
                    <PersonCard profile={card} />
                    
                )
            }}
            onTapCard={(cardIndex)=> props.navigation.navigate('Profile',{profile : profiles[cardIndex]})}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => { setshowButtons(false);console.log('onSwipedAll') }}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {profiles.length}
            disableTopSwipe
            disableBottomSwipe
            animateOverlayLabelsOpacity
            ref={swipeRef}
            containerStyle={{
                backgroundColor: "rgba(255,255,255,0)",
                flex: 1,
                marginTop: '2%',
                flexDirection: 'row',
                alignItems: 'center', 
                alignSelf: 'center',
                justifyContent: 'center',
                marginBottom: '16%'
                
                
              }} 
              cardStyle={{
                alignItems: "center",
                 width: '90%',
                 height:'100%',
                 alignSelf: 'center',
                 justifyContent: 'center',
                
                //  marginLeft: '5%',
                
                

              }}
              overlayLabels={{
                left: {
                  title: "Nope",
                  style: {
                    backgroundColor: '#F4B223',
                    color: '#FFFFFF',
                    fontSize: 20,
  
                    label: {
                      backgroundColor: '#F4B223',
                      color: '#FFFFFF',
                      fontSize: 20,
                    },
                    wrapper: {
                      marginTop: 10,
                      marginLeft:5,
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                    },
                  },
                },
                right: {
                  title: "Like",
                  style: {
                    backgroundColor: '#F4B223',
                    color: '#FFFFFF',
                    fontSize: 20,
  
                    label: {
                      backgroundColor: '#F4B223',
                      color: '#FFFFFF',
                      fontSize: 20,
                    },
                    wrapper: {
                      marginTop: 10,
                      marginRight:5,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    },
                  },
                },
              }}>
            
        </Swiper>
        <View style={styles.button}> 
        <Button 
          onPress={() => props.navigation.navigate('Matches')}
          icon={<Icon name="heart" size={25} color="#ffffff" />}
          buttonStyle={{
            backgroundColor: "#F4B223",
            borderRadius: 30,
            width: 50,
            height: 50,
            
  
          }}
          
          type="solid"
        />
        
         <Button 
          onPress={() => setVisible(!visible)}
          icon={<Icon name="filter" size={25} color="#ffffff" />}
          buttonStyle={{
            backgroundColor: "#F4B223",
            borderRadius: 50,
            width: 50,
            height: 50,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          }}
          
          type="solid"
        />
        
        </View>

        
        
       
      
       {showButtons ? 
      <View style={styles.bottomButtons}>
      
          <TouchableOpacity  onPress={() => swipeRef.current.swipeLeft() }  style={styles.dislikeButton}  >
            <Icon name="times-circle-o" size={40} color="#FF675D"  />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => swipeRef.current.swipeRight() }  style={styles.likeButton}  >
            <Icon name="heart" size={25} color="#B7EDA3" />
          </TouchableOpacity>
         </View>
        : <View></View>}
          {/*filter*/}
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
          <TouchableOpacity onPress={()=> setVisible(!visible)}>
            <Icon name="times" size={20} color="grey" style={{alignSelf: 'flex-end',marginRight: 10}} />
          </TouchableOpacity>
          <Filter type="people" visible={visible} setVisible={setVisible} />
          
        </Overlay>
        
    </SafeAreaView>
 )
}

const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: "center",
      marginTop: TopMargin
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    },
    button: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft: 15,
        marginRight: 15,
        

    },
    bottomButtons:{
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: '4%',
      
      
      
    },
    likeButton: {
      borderWidth: 3,
      alignSelf: "center",
      borderRadius: 25,
      padding: 10,
      borderColor: "#B7EDA3",
      marginLeft: 20, 
    },
    dislikeButton: {
     
      alignSelf: "center",
      marginRight: 20,   
    }
  });