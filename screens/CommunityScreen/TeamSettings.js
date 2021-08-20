import React from 'react';
import {View,Text,TextInput} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';


 function TeamSettings() { 


    return(
        <View>
            <View>
                <IconButton icon="keyboard_backspace"
                    color={Colors.orange500}
                    size={20}
                    onPress={() =>{/*screen navigation to Teams*/}}/>
                <Image/>

            </View>
            <Text>Nommez un chef d'équoe adjoint</Text>
            <Memebers/>
            <Text>ajouter une description </Text>
            <TextInput
            value={"description"}
            />
        </View>
    ); 

 }

 const styles = StyleSheet.create({
   
});