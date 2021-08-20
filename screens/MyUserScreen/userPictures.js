import React, { useState, useEffect } from 'react';
import { Text, Image, View, FlatList,Platform ,StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { IconButton, Colors } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import ImageBubble from '../../components/MyUser/ImageBubble';
import {connect,useSelector,useDispatch} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export  function userPictures({navigation}) { 
    
    const pictures = useSelector(state => state.UserInfo.images);
        
    

  
    return(
        <View style={{ flex: 1}}>
         <IconButton icon="arrow-left"
            color={Colors.orange400}
            size={45}
            onPress={() =>{navigation.goBack()}}
           />
            <ScrollView>
            <View style={styles.container}>
              <View style={styles.rows}>
                  <ImageBubble  index={0} image={pictures[0]} />
                  <ImageBubble  index={1} image={pictures[1]} />
              </View>
              
            </View>
            <View style={styles.container}>
              <View style={styles.rows}>
                  <ImageBubble index={2} image={pictures[2]} />
                  <ImageBubble  index={3} image={pictures[3]} />
              </View>
              
            </View>   
            <View style={styles.container}>
              <View style={styles.rows}>
                  <ImageBubble  index={4} image={pictures[4]} />
                  <ImageBubble  index={5} image={pictures[5]} />
              </View>
              
            </View>
            
            </ScrollView>
           
        
    </View>
    ); 

 }
 const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
    rows :{
        flexDirection : 'row',
        flex : 2
    }

});

 