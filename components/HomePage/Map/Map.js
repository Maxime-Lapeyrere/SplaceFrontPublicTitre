import React,{useState,useEffect} from 'react';
import { StyleSheet, View ,Dimensions,Text,Platform,TouchableOpacity} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button,Overlay } from 'react-native-elements';
import {Location,Permissions} from 'expo';
import Icon from "react-native-vector-icons/FontAwesome";
import CreateEvent from './CreateEvent'
import BottomSheet from 'reanimated-bottom-sheet';
import FavAdresses from './FavAdresses'
import PlaceSheet from './PlaceSheet';
import {connect,useSelector,useDispatch} from 'react-redux';
import Filter from '../../General/Filter';
import {useTranslation} from 'react-i18next';

var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}


export default function Map(props){
  
  const {t} = useTranslation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const EventsheetRef = React.useRef(null);
  const adressSheetRef= React.useRef(null);
  const PlacesSheetRef= React.useRef(null);
  const places = useSelector(state => state.Places.places);
  const [visible, setVisible] = useState(false);
  const toggleFilter = () => {
    setVisible(!visible);
  }
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'oops, something went wrong'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const {latitude,longitude} = location.coords; 
    })();
  }, []);


  
return (

  <View style={styles.container}>
  
     
    <MapView style={styles.map} initialRegion={{
            latitude: 48.956593999999996,
            longitude: 2.3438339999999998,
            latitudeDelta: 0.0400,
            longitudeDelta: 0.0200
          }} >
    <MapView.Marker
    coordinate={{latitude: 48.956593999999996,longitude:2.3438339999999998, latitudeDelta: 0.0400, longitudeDelta: 0.0200}}
    title="Marqueur"
    description="vous êtes là "
    pinColor={"orange"}
    
    //image={require('../../../assets/pdp.jpg')} 
  >
    
  </MapView.Marker>
    
    </MapView>
    <View style={styles.headerButtons}>
      <Button  onPress={() => adressSheetRef.current.snapTo(0)}
            icon={<Icon name="map-marker" size={25} color="#ffffff" />}
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
            
            type="solid" />
      <Button  onPress={toggleFilter}
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
            
            type="solid" />
      </View>

      <View style={styles.eventCreation} >
      <Button  onPress={() => EventsheetRef.current.snapTo(0)}
            icon={<Icon name="plus" size={25} color="#ffffff" />}
            buttonStyle={{
              backgroundColor: "#F4B223",
              borderRadius: 50,
              width: 65,
              height: 65,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
            
            type="solid" />
            
      </View>
      {/* place bottom sheet */}
      <BottomSheet
        ref={PlacesSheetRef}
        enabledContentTapInteraction={false}
        snapPoints={['70%', '20%' ,0]}
        renderContent={()=>
        <PlaceSheet place={places[0]} eventSheetRef={EventsheetRef}  /> }
       
      initialSnap={0} // l'index de snap points
      />
      {/* event creation bottom sheet */}
      <BottomSheet
        ref={EventsheetRef}
        snapPoints={['85%', '25%' ,0]}
        renderContent={()=><CreateEvent sheetRef={EventsheetRef} navigation={props.navigation} />}
        renderHeader={()=><View style={styles.drag}>
        <Icon name="ellipsis-h" size={35} color="grey" 
        />
        
      </View>}

    initialSnap={2}

        
      />
      {/* favorite adresses bottom sheet */}
     <BottomSheet
        ref={adressSheetRef}
        enabledContentTapInteraction={false}
        snapPoints={['85%', '25%' ,0]}
        renderContent={()=>
        <FavAdresses favSports={['Foot','Tennis','Tennis','Tennis','Tennis','Tennis','Tennis','Tennis','Tennis']}
                     places={ /* juste pour tester ; à remplacer par une fonction qui fetch les places à coté  */ [{name: 'Charenton Basketball Court', adress : '68 Boulevard Poniatowski, 75012 Paris',image: require('../../../assets/basketball_stade.jpg')},{name: 'Charenton Basketball Court', adress : '68 Boulevard Poniatowski, 75012 Paris',image: require('../../../assets/basketball_stade.jpg')},{name: 'Charenton Basketball Court', adress : '68 Boulevard Poniatowski, 75012 Paris',image: require('../../../assets/basketball_stade.jpg')}] }
                     navigation={props.navigation}
        />}
        renderHeader={()=><View style={styles.drag}>
        <Icon name="ellipsis-h" size={35} color="grey" 
        />
        
      </View>}

      initialSnap={2}
      />
      {/*Filter*/}
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
          <Filter  visible={visible} setVisible={setVisible} />
          
        </Overlay>
  </View>

);

}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  drag: { 
    backgroundColor: '#F5F2EC' , 
    alignItems: "center",
    
   }
  ,
  map: {
    position: 'absolute',
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  eventCreation:{
    flex : 1 , 
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10 
  },
  headerButtons: {
    marginTop: TopMargin,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  confirm: {
    backgroundColor: 'orange',
    marginBottom: -10,
    marginLeft: -10 ,
    marginRight: -10 ,
    height: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    
  }
  });