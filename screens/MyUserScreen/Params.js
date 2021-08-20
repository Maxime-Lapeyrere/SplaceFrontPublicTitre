import React,{useState} from 'react';
import {connect,useSelector,useDispatch} from 'react-redux';
import {View,Text,Switch,FlatList,TextInput,StyleSheet,SafeAreaView,TouchableHighlight,ScrollView} from 'react-native'; 
import { Button } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import { IconButton, Colors } from 'react-native-paper';

export  function Params(props){
    const {t} = useTranslation();
    const userInfo =  useSelector(state => state.UserInfo.userInfo);
    const [isEnabled, setIsEnabled] = useState(false);// a adapter avec redux 
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <IconButton icon="arrow-left"
                color={Colors.orange400}
                size={55}
                onPress={() =>{props.navigation.goBack()}}
                style={ {right : 18}}
               />
            <Text style={styles.headerT} >{t('advanced settings') }</Text>
            
           
            </View>
            <ScrollView >
            <Text style={styles.titles} >{t('modify my number') }</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('add a number')+'...'}
                    value={userInfo.number}
                    style={styles.Tinput}
                />  
            <Text style={styles.titles} >{t('modify my email') }</Text>
                <TextInput
                    style={styles.input}
                    value={userInfo.email}
                    style={styles.Tinput}
                />   
            <Text style={styles.titles} >{t('modify my location') }</Text>
                <TextInput
                    style={styles.input}
                    
                    value={userInfo.location}
                    style={styles.Tinput}
                /> 
            <Text style={styles.titles} >{t('connected accounts') }</Text>
                <TextInput
                    style={styles.input}
                    
                    value={''}
                    style={styles.Tinput}
                /> 
            <Text style={styles.titles} >{t('my nickname') }</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'@'}
                    value={userInfo.nickname}
                    style={styles.Tinput}
                /> 
             
            <Button title={ t('manage notifications')}  buttonStyle={styles.buttons}/>
        
            <Button title={t('share Splace')}  buttonStyle={styles.buttons} />
            <View style={{alignItems: 'center' ,flexDirection:'row' , justifyContent: 'space-between',margin: 10}}>
                <Text style={styles.titles}> {t('make my account private')}</Text>
                <Switch
                trackColor={{ false: "#767577", true: "#F4B223" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F2EC'
        
    },
  
    titles: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold'
    },
    Tinput:{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,  
        elevation: 5,
        padding: 10,
        margin: 8
    },
    header:{
        flex: 1 ,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        marginBottom: 25
        
        
        
    },
    headerT: {
        fontSize: 21,
        color: 'orange',
        fontWeight: 'bold',
        marginTop: 30,
        right: 20
    },
    buttons:{
        margin: 15,
        borderRadius: 15,
        backgroundColor: "#F4B223"
    }

});