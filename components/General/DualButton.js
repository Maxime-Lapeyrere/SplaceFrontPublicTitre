import React,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity,SafeAreaView } from 'react-native';

var TopMargin = '7%'
if (Platform.OS === 'android'){
  var TopMargin = '8%'
}else if (Platform.OS === 'ios'){
  var TopMargin = '3%'
}

export default function DualButton(props){
  console.log(TopMargin);
  //selected color 
  let B1color ; 
  let B2color ;
  // si selected est 1 la premiere button sera selectioné sinon la deuxieme 
 
 const [SelectedView,setSelectedView]= useState(1);
 if (SelectedView == 1 ) {
  B1color = '#ffffff'
   B2color = '#FFA500'
   
 }else{
   B1color = '#FFA500'
   B2color = '#ffffff'
 }
  
  return(
    <SafeAreaView style={{backgroundColor: '#F5F2EC' , height:'100%',} }>
      {SelectedView == 1 ? props.screen1 : props.screen2}
      
    <View style={styles.container } >
    
    <TouchableOpacity style={styles.touchable}
    onPress={()=> setSelectedView(1)}hitSlop={{ top: 30, bottom: 30, left: 10, right: 10 }}
    >
        <View style={{backgroundColor : B1color,textAlign: 'center',borderRadius: 25,height:35}}>
        <Text style={styles.text} >{props.option1}</Text>
      </View>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.touchable}
    onPress={()=> setSelectedView(2)}hitSlop={{ top: 30, bottom: 30, left: 10, right: 10 }}
    >
      <View style={{backgroundColor : B2color,textAlign: 'center',borderRadius: 25,height:35}}>
        <Text style={styles.text} >{props.option2}</Text>
      </View>
    </TouchableOpacity> 
   
    </View>
    
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding : 22,
    paddingLeft: 5,
    paddingRight:5,
    borderRadius: 25,
    backgroundColor: '#FFA500',
    marginLeft: 100 , 
    marginRight: 100 , 
    marginTop: TopMargin,
    maxHeight: 22
  
    
   },
   touchable: {
     borderRadius: 25,
     flex : 1,
     justifyContent:'center'
    }
    ,
    text : {
      textAlign: 'center',
      marginTop : 9
    }
  
  });