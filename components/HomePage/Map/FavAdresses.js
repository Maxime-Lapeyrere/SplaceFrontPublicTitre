import React,{useState} from 'react';
import { StyleSheet,Switch, Text, View,SafeAreaView, TextInput ,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useTranslation} from 'react-i18next';
import { Button } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Place from '../../General/Place';

export default function FavAdresses(props){
  const {t} = useTranslation();
  const [search,updateSearch] = useState('');// pour la bar de recherche 
  const [isEnabled, setIsEnabled] = useState(true);// a adapter avec redux 
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView 
      style={{
        backgroundColor: '#F5F2EC',
        padding: 16,
        height:700,
      }}
    > 
      
      <Text style={styles.title}>  {t('my favourite adresses').toUpperCase()}  </Text>
      <View style={styles.form}>
        <Text style={styles.text}>{ t('modify my preferences') }</Text>
      </View>
      <View style={styles.form}>
      <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={props.favSports}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={() => console.log(item)}>
                        <Text style={styles.sports}>{item}</Text>
                    </TouchableOpacity>
                )}
      
        />
      </View>
      <SearchBar
            placeholder={t('search') + "..."}
            onChangeText={()=> updateSearch(search)}
            value={search}
            round={true}
            lightTheme={true}
            inputStyle={{backgroundColor: 'white',borderRadius:20}}
            inputContainerStyle={{backgroundColor: 'white',borderRadius:20}}
            containerStyle={{ backgroundColor: '#F5F2EC', borderColor: '#F5F2EC',marginTop: '5%'}}
            />
      <View style={styles.form}>
            <Text style={styles.text} >{t('suggested adresses')}</Text>
            
      </View>
      <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={props.places}
                renderItem={({item})=> (
                  <TouchableOpacity onPress={()=> console.log(item.name)} >
                      <Place place={item} />
                   </TouchableOpacity>
                )}
      
        />
        <View style={{alignItems:'center'}}>
        <Button  onPress={() => props.navigation.navigate('FavoriteAdresses',{event: false})}
            title={ t('my favorites')}
            icon={<Icon name="heart" size={25} color="#ffffff" />}
            
            buttonStyle={{
              flexDirection:'column', 
              backgroundColor: "#F95C59",
              borderRadius: 50,
              width: 120,
              height: 80,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

           
            }}
            
            type="solid" />
        </View>
     
      
    
      
     
     
      
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
      margin: 10,
      textAlign: 'center'

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
       color: 'orange'

    }
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


  sports:{
    fontSize:16,
    backgroundColor: 'pink',
    borderRadius: 25,
    paddingLeft : 10,
    paddingRight: 10 , 
    padding : 3,
    margin : 5
  }
    
   })