import React,{useState} from 'react';
import { StyleSheet,Switch,Dimensions,TouchableHighlight, Text, View,SafeAreaView, TextInput, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useTranslation} from 'react-i18next';
import { Button ,Overlay} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'
import {useDispatch,useSelector} from 'react-redux' ;
import { createEvent } from '../../../actions/EventActions';
import {
  TouchableOpacity,
  
  TouchableWithoutFeedback,
} from '@gorhom/bottom-sheet';
export default function CreatEvent(props){
  const {t} = useTranslation();
  const dispatch = useDispatch() ; 
  const sports = useSelector(state => state.Sports.sports);
  const [isEnabled, setIsEnabled] = useState(true);// a adapter avec redux 
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [mixed, setMixed] = useState(true);
  const [Private, setPrivate] = useState(false);
  const [handisport, setHandisPort] = useState(false);
  const [peopleLimit, setpeopleLimit] = useState(4);
  const [eventTitle, setEventTitle] = useState(null);
  const adress = useSelector(state => state.Events.selectedAdress)
  const [selectedSport,setSelectedSport] = useState(sports[0])
  const [visible, setVisible] = useState(false);// sports overlay

  //event date and time ---------------------------------------------
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    console.log(date.toLocaleTimeString().slice(0, -3))
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  //---------------------------------------------------
  //event Members --------------------------------
  const selectedFriends = useSelector(state => state.UserFriends.selectedFriends);


  //J'ai entouré tous les boutons avec touchableWithoutfeedback parce qu'il fallait tenir le bouton pour déclencher l'action onPress.
  return (
    <SafeAreaView 
      style={{
        backgroundColor: '#F5F2EC',
        padding: 16,
        height:900,
      }}
    > 
      
      <Text style={styles.title}>  {t('i create my event'.toUpperCase())}  </Text>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('date')}  </Text>
        <TouchableWithoutFeedback onPress={showDatepicker}>
          <Button  
            title= {date.toLocaleDateString()}
            buttonStyle={styles.buttons}
            />
        </TouchableWithoutFeedback>
           {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              minimumDate ={new Date()}
            />
           )}
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('hour')}  </Text>
        <TouchableWithoutFeedback onPress={showTimepicker}>
          <Button  
            title={date.toLocaleTimeString().slice(0, -3)}
            buttonStyle={styles.buttons}
            />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('mixed')}  </Text>
        <TouchableWithoutFeedback onPress={() => setMixed(!mixed)} style={{marginRight: 20}} >
          <Switch
                  trackColor={{ false: "#767577", true: "#F4B223" }}
                  thumbColor={mixed ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                 
                  value={mixed} //a changer
                  style={styles.switch}
                  />
          </TouchableWithoutFeedback>
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('private event')}  </Text>
        <TouchableWithoutFeedback onPress={() => setPrivate(!Private)} style={{marginRight: 20}} >
          <Switch
                  trackColor={{ false: "#767577", true: "#F4B223" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  
                  value={Private}
                  style={styles.switch}
                  />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('handisport access')}  </Text>
        <TouchableWithoutFeedback onPress={() => setHandisPort(!handisport)} style={{marginRight: 20,}} >
          <Switch
                  trackColor={{ false: "#767577", true: "#F4B223" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                 // onValueChange={setHandisPort}
                  value={handisport} 
                  style={styles.switch}
                  />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('people limit')}  </Text>
        <NumericInput 
          onChange={setpeopleLimit}  
          value={peopleLimit}
          type={'up-down'}
          rounded
          maxValue ={15}
          upDownButtonsBackgroundColor={'#FFAF3E'}
          iconStyle ={{color:'white'}}
          minValue={2}
          totalWidth={85}
          
        />
      </View>
      <View style={styles.formV}>
        <Text style={styles.text} numberOfLines={1}>  {t('event title')}  </Text>
        <TextInput
         style={styles.Tinput}
         placeholder={t('add a title')+'...'}
         value={eventTitle}
         onChangeText={setEventTitle}

         
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.text} numberOfLines={1}>  {t('select a sport')}  </Text>
        <TouchableOpacity  onPress={() => setVisible(!visible)}>
          <Image source={selectedSport.logo} style={styles.logo} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.formV}>
        <Text style={styles.text} numberOfLines={1}>  {t('select an adress')}  </Text>
       <TouchableOpacity  onPress={() => {props.navigation.navigate('FavoriteAdresses',{event:true})}}>
        <Button
         titleStyle={{color: 'black'}}
         buttonStyle={styles.selectAdress}
         title={adress}
         
        />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TouchableWithoutFeedback onPress={()=> console.log('map search')}>
          <Button  onPress={() => sheetRef.current.snapTo(0)}
            title={t('map search')}
            buttonStyle={styles.megaButton}
            />
          </TouchableWithoutFeedback>
          
           <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('InviteFriends',{teamID: null})}>
            <Button  onPress={() => sheetRef.current.snapTo(0)}
            title={t('add freinds')}
            buttonStyle={styles.megaButton}
            />
            </TouchableWithoutFeedback>
      </View>
      <View style={styles.center}>
        <TouchableWithoutFeedback onPress={() => { 
          
          const  newEvent = { name : eventTitle , date : date.toLocaleDateString() , time: date.toLocaleTimeString().slice(0, -3), unisex: mixed , private: Private, adress : adress , handisport : handisport , peopleLimit : peopleLimit,sport: selectedSport, image : require('../../../assets/parc-jean-Moulin.jpg'), description:'my first event',id: Math.random(999).toString(),member: selectedFriends}
          dispatch(createEvent(newEvent))
          props.sheetRef.current.snapTo(2)
        }} >
        <Button 
          title="Confirmer"
          buttonStyle={styles.confirm}
           />
          </TouchableWithoutFeedback>
      </View>
     
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
          <View style={{flexDirection: 'row', maxWidth: '80%',flexWrap: 'wrap',justifyContent: 'center'}}>
          {    sports.map((sport) => {
              
              
    
              
              return(
                
                <View style={{  alignItems: 'center' ,flexDirection: 'column'}}>
                    <TouchableHighlight onPress={()=> {setSelectedSport(sport) ; setVisible(!visible) }} underlayColor={'orange'} style={{borderRadius: 35}} >
                      <Image style={{...styles.logo}} source={sport.logo} />
                    </TouchableHighlight>
                    <Text style={{fontSize: 11,alignSelf:'center',marginRight: 5}}> {sport.name}</Text>
                </View>
              )
            } )}
            </View>
        </Overlay>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
   drag: { 
     
     alignItems: "center",
     bottom : 10
    },
    title: {
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: "bold",
      margin: 10

    },
    buttons: {
      
        backgroundColor: "#F4B223",
        borderRadius: 50,
        width: 100,
        height: 35,
      },
    form: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 25,
      marginRight: 25,
      margin: 8
    },
    text:{
       fontSize: 20,
       fontWeight: 'bold',
       marginTop: 3,
       maxWidth: 215

    }
    ,
    switch: {marginRight: '10%',transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] , margin: 2}
    ,
    formV: {
      flexDirection: "column",
      justifyContent: "space-between",
      marginLeft: 25,
      marginRight: 25,
      margin: 8
    },
    Tinput:{
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 1,  
      elevation: 5,
      padding: 10,
      margin: 5,
      borderRadius: 25
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
    margin: 8
  },
  confirm: {
      
    backgroundColor: "#F4B223",
    borderRadius: 50,
    width: 140,
    height: 60,
    marginTop: 10
  },
  megaButton:{
    
    backgroundColor: "#F4B223",
    borderRadius: 25,
    width: 150,
    height: 50,
    
  },
  selectAdress:{
    borderRadius: 25 , 
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 3,
    height: 50,
    margin : 5,
    
  },
  logo:{
    width: 55,
    height: 55 ,
    //margin: 2,
    borderWidth: 3,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop : 5,
    margin: 7
  },
  container: {
    
    maxWidth: '90%' 
  }
    
   })