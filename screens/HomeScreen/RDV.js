import React,{useState} from 'react';
import { FontAwesome,Ionicons } from "@expo/vector-icons";
import {View,Text,StyleSheet,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native'; 
import { SearchBar } from 'react-native-elements';
import {connect,useSelector,useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import RDVCARD from '../../components/HomePage/RDV/RdvCard'
import { FlatList } from 'react-native-gesture-handler';

var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}

export default function RDV(props) { 
    const {t} = useTranslation(); // traduction 
    const [search,updateSearch] = useState('');
    const Rdvs = useSelector(state => state.RDV.rdv);
    return(
        <SafeAreaView  style={{...StyleSheet.absoluteFillObject}}>
            
            
            <View style={styles.search}>
            <SearchBar
            placeholder={t('search') + "..."}
            onChangeText={()=> updateSearch(search)}
            value={search}
            round={true}
            lightTheme={true}
            inputStyle={{backgroundColor: 'white',borderRadius:20}}
            inputContainerStyle={{backgroundColor: 'white',borderRadius:20}}
            containerStyle={{ backgroundColor: '#F5F2EC', borderColor: '#F5F2EC',marginTop: 10}}
            />
             
            </View>
            
            <View style={{flex: 1 }} >
            
            <FlatList 
                data={Rdvs}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={() =>props.navigation.navigate('RdvDetails',{rdv: item}) }>
                        <View  style={{alignItems: 'center'}} >
                            <RDVCARD rdv={item} /> 
                        </View>
                    </TouchableOpacity>
                )}
            
                 
            />

             </View>
            
        </SafeAreaView>

    ); 

 }

 const styles = StyleSheet.create({
     buttons: {
         flex: 1 ,
         flexDirection: 'row',
         justifyContent: 'space-between',
         margin: 12,
         marginTop: TopMargin,
     },
     search:{
         flexDirection: "column",
         justifyContent: 'flex-start',
         marginTop: '20%'
        //backgroundColor: 'yellow'
     },
     chatContainer:{
         flex: 1,
         flexDirection: 'row',
         maxHeight: 80,
         borderRadius: 50,
         backgroundColor: 'pink',
         alignItems: 'center',
         margin:15,
         width : 380
         
         
     },
     friendImage:{
        height: 45,
        width: 45,
        borderRadius: 45/2,
        justifyContent: 'center',
        margin: 15 
    },
    textContainer:{
        bottom: 8,
        width: 380,
        justifyContent: 'space-between',
    }
   
});