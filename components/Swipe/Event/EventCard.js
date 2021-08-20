import React from 'react';
import { StyleSheet, Text, View , SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { event } from 'react-native-reanimated';
import Icon from "react-native-vector-icons/FontAwesome";


export default function EventCard(props){

    
  
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.event.image } />
      </View>
     
      <View style={styles.header}>
        <Text style={styles.name}>{props.event.name}</Text>
        <View style={{flexDirection:'row',marginTop: 10}}>
          <Icon name="home" size={18} color="orange"  numberOfLines={1} style={styles.icons}/>
          <Text style={styles.text}>{props.event.adress}</Text>

        </View>
        <Text style={{right: '21%',color:'orange'}}>{props.event.city}</Text>
        <View style={{flexDirection:'row',margin: 5 }}>
          <Icon name="calendar" size={17} color="orange" style={styles.icons}/>
          <Text style={styles.text2} >{props.event.date}</Text>
          <Icon name="clock-o" size={17} color="orange" style={styles.icons}/>
          <Text style={styles.text2}>{props.event.time.toString()+':00'/*work in progress*/}</Text>
          <Icon name="map-marker" size={17} color="orange" style={styles.icons}/>
          <Text style={styles.text2}>à calculer</Text>
        </View>
        <View style={{ borderBottomWidth:0.7  , borderTopWidth:0.7,width: '100%' , alignItems:'center', borderColor:'orange'}}>
          {
            props.event.unisex ? <Text style={styles.gender}> Unisex</Text> : 
                                  <Text style={styles.gender}> Male only</Text>
          }
        </View>
        <View style={{margin : 15}}>
          <Text numberOfLines={2}>{props.event.description}</Text>
        </View>
          <TouchableOpacity style={{alignSelf:'flex-end' , marginRight : 10,bottom: 10}} >
            <Icon name="info-circle" size={18} color="orange" style={styles.icons}/>
          </TouchableOpacity>
      </View>
      
      <View style={styles.overlay}>
        
        
      </View>
     
    </SafeAreaView>
    
)

}
const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: 'white',
    height:'65%'   ,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "flex-start",
    

  },
  name: {
    color: "orange",
    fontSize: 27,
    fontWeight: "bold",
    fontStyle: "italic",
   
  },
  imageContainer:{
    height: '40%'
  },
  text: {
    color: "orange",
    fontSize:16, 
    
  },
  icons: {
    marginTop: 2,
    marginRight: 2 ,
    marginLeft: 2
  },
  text2:{
    margin: 2,
    marginLeft: 3,
    marginRight: 5
  },
  gender:{
    color:'orange',
    fontWeight:'bold',
    margin: 3
    
  }
  
  
  });