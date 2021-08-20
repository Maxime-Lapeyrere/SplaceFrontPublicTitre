import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,SafeAreaView,FlatList} from 'react-native';


export default function TeamCard({team}){

  return(
    <SafeAreaView>
      
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={team.image} style={styles.image}/>
        </View>
        <View style={styles.teamInfo}>
          <Text numberOfLines={1} style={styles.name}>{team.name}</Text>
          <FlatList 
            data={team.members}
            renderItem={({item})=> (
              <Image source={ item.images[0] } style={styles.member} />
            )}
            horizontal={true} showsHorizontalScrollIndicator={false}
        />

        </View>
      </View>
    
       
      </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container:{
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainer:{
    flex: 1,
    padding: '18%',
    
  },
  name:{
    fontSize: 24,
    fontWeight:'bold',
    fontStyle: 'italic',
    margin: 5
  },
  teamInfo:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  member:{
    height: 45,
    width: 45,
    borderRadius: 45/2,
    justifyContent: 'center',
    margin: 5 
}
 
  });