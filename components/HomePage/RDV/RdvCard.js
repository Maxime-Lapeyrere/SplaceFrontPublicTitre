import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { FlatList } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');



export default function RdvCard({rdv}){
  var SportColor = rdv.sport.color
  // pour ne pas affciher plus de deux images de membres 
  
  if (rdv.members.length > 2 ) {
    var firstmembers = [rdv.members[0],rdv.members[1]]
  }else{
    var firstmembers = [...rdv.members]
  }
  const renderMembersNumber = ()=>{
    return(
    <View style={styles.extra}>
                <Text style={{fontSize:12}}> +{rdv.members.length -2} </Text>
            </View>
      )
  }
  return(
    <SafeAreaView>
      <View style={{...styles.container,backgroundColor: SportColor}}>
        <View style={{flex: 2, marginLeft: '85%'}}>
        <Ionicons name={rdv.sport.icon} size={45} color={'white'} />
        </View>
        <View style={styles.date}>
              <Text>{rdv.date} </Text>
            </View>
        
        <View style={styles.info}>
          <View ><Text numberOfLines={1} style={styles.name}>{rdv.name} </Text></View>
          <View style={styles.adressContainer}>
            <Text style={styles.adress}>{rdv.adress}</Text>
          </View>
          <View style={styles.flatList}>
          
            <View >
              <FlatList 
                data={firstmembers}
                renderItem={({item})=> (
                  <Image source={ item.image } style={styles.member} />

                )}
                horizontal={true} showsHorizontalScrollIndicator={false}
              />
            </View>

            {rdv.members.length > 2 ? renderMembersNumber() : console.log('') /* pur afficher le nombre de membres */}
            
          </View>
          
       
        </View>
        
      </View>
    
      </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container:{
    margin: 15,
    alignItems: 'flex-start',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 5,
    width: width - 60,
    height: 120,
    padding:0
  },

  imageContainer:{
    flex: 1,
    padding: '18%',
    
  },
  name:{
    fontSize: 24,
    fontWeight:'bold',
    fontStyle: 'italic',
    margin: 10,
    
  },
  info:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  member:{
    height: 35,
    width: 35,
    borderRadius: 35/2,
    justifyContent: 'center',
    margin: 5 ,
    
},
extra:{
  width: 35,
  height: 35,
  backgroundColor:'white',
  borderRadius:20,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  margin : 5
  
},
  flatList:{
    flex: 2 , 
    marginLeft: 5,
    flexDirection:'row',
    alignSelf:'flex-start'
  },
  adress:{
    fontSize: 14,
    
    
  },
  adressContainer:{
    alignSelf:'flex-start', 
    flex:1,
    marginLeft: 15,
    bottom: 5

  },
  date:{
    flex:1,
    
    top: 90,
    left:'60%'
  }
  });