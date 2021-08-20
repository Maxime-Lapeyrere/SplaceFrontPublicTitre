import React, { useState, useEffect } from 'react';
import { Text, Image, View, Dimensions,Platform ,StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch , useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import { addImage } from '../../actions/userActions';

export default function ImageBubble(props) { 
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserInfo.userInfo);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            // alert quelque chose 
            
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 6],
      quality: 1,
    });
    console.log(image)
    console.log(result);

    if (!result.cancelled) {
      dispatch(addImage(image, propss.index)) // à adapter avec le backend 
      console.log(userInfo)
    }
  };
  const removeImage = (index) => {
        console.log('backend only')
  }
   const renderEmptyBubble = ()=>{
       return(
           <View  style={styles.empty} >
            
           </View>
       )
   }
    return(
        <View style={{ flex: 1}}>
        
            <View style={ {alignItems:'center'}}>

               
                    { props.image == null ? renderEmptyBubble():<Image source={props.image} style={styles.image}/>}
                

                    { props.image == null ? 
                    <TouchableOpacity style={{position:'absolute', alignSelf:'flex-end'}}hitSlop={{ top: 10, bottom: 20, left: 20, right: 20 }} onPress={pickImage}>
                        <Icon name="plus-circle" size={30} color="orange" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{position:'absolute', alignSelf:'flex-end'}}hitSlop={{ top: 10, bottom: 20, left: 20, right: 20 }} onPress={removeImage}>
                        <Icon name="times-circle" size={30} color="orange" />
                    </TouchableOpacity>}
                

                       

            </View>
        
    </View>
    ); 

 }
 const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
    empty:{
        
        borderWidth : 3 ,
        borderRadius: 25 ,
        borderColor: 'orange',
        width: Dimensions.get('window').width * 0.42 , 
        height : 250,
        //backgroundColor : 'pink',
        borderStyle:'dashed',
        margin : 5,
        
        
    },
    image:{
        borderRadius: 25 ,
        width: Dimensions.get('window').width * 0.42 , 
        height : 250,
        margin : 5,
    }
    
});

 