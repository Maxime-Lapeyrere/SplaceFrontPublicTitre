import React,{useState} from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import {useTranslation} from 'react-i18next';
import {connect,useSelector,useDispatch} from 'react-redux';
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default function Filter({visible,setVisible,type}){

  const sports = useSelector(state => state.Sports.sports)
  const {t} = useTranslation();
  const [distance, setdistance] = useState(1)
  const [maxAge, setMaxAge] = useState(40)
  const [minAge,setMinAge] = useState(30)
  
  let nonCollidingMultiSliderValuesChange = (values) =>
    setNonCollidingMultiSliderValue(values);

    return(
      
      <View style={styles.container}>
          
          {type == 'people'? 
           <View style={{}}>
             <Text style={styles.text}>
            {t('age')+ ':' }
          </Text>
          <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'center' , marginLeft: 40, marginRight: 40}}>
            <Text style={{fontSize: 14,margin: 5}} > {minAge} </Text>
            <MultiSlider
              values={[
                minAge,
                maxAge,
              ]}
              
              onValuesChange={(values) => { setMinAge(values[0]) ; setMaxAge(values[1]) }}
              //onValuesChangeFinish={(values) => changeAgeRange(values)}
              //onValuesChangeStart={(values) => setMaxAge(value)}
              min={18}
              max={75}
              step={1}
              allowOverlap={false}
              snapped
              minMarkerOverlapDistance={18}
              trackStyle={{alignContent:'center' ,backgroundColor: "grey", height: 4,width: '50%' }}
              selectedStyle={{ backgroundColor: "orange", height: 3 ,}}
              
                  />
              <Text style={{fontSize: 14,margin: 5}} > {maxAge} </Text>
            </View>
          </View>
          : <View></View>  }
          <Text style={styles.text}>
            {t('search distance')+ ': ' + distance + ' km'}
          </Text>
           <Slider
            style={{width: '100%', height: 40}}
            minimumValue={1}
            maximumValue={25}
            minimumTrackTintColor="orange"
            maximumTrackTintColor="#000000"
            thumbTintColor={'orange'}
            value={distance}
            step={1}
            onValueChange={
              (distance) => setdistance(distance)
            }
          />
          <Text style={styles.text}>
            {t('select your sports')+ ' max 3'}
          </Text>
          <View style={{flexDirection: 'row',flexWrap: 'wrap', marginBottom: 30 , justifyContent: 'center'}}>
            
          
          {
            sports.map((sport) => {
              const [color, setColor] = useState('white');
              const [selected, setSelected] = useState(true)
              
              const select = ()=> {
                console.log(selected)
                setSelected(!selected)
                switch (selected) {
                  case true:
                    setColor('orange')
                    break;
                
                  case false :
                    setColor('white')
                    break; 
                }
              }
              return(
                
                <View style={{  alignItems: 'center', alignItems: 'center' , justifyContent: 'center',}}>
                    <TouchableOpacity onPress={select} >
                      <Image style={{...styles.logo, borderColor: color}} source={sport.logo} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 11,alignSelf:'center',marginRight: 5}}> {sport.name}</Text>
                </View>
              )
            } )
          }
           
          </View>
          <TouchableOpacity onPress={()=> setVisible(!visible)  } hitSlop={{ top: 10, bottom: 30, left: 10, right: 10 }} >
            <View flexDirection='row' justifyContent='center' style={styles.confirm} >
                  
                    <Text style={{marginTop: 5 , color: 'white', fontSize: 18}} >{t('confirm') } </Text>
                  
              </View>
          </TouchableOpacity>
          
      </View>
    )
    

}
const styles = StyleSheet.create({
   
  container: {
    
    maxWidth: '90%' 
  },
  logo:{
    width: 55,
    height: 55 ,
    //margin: 2,
    borderWidth: 3,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop : 5,
    margin: 7
  },
  text:{
    color: 'grey',
    fontSize: 20,
  },
  confirm: {
    backgroundColor: 'orange',
    marginBottom: -10,
    marginLeft: -10 ,
    marginRight: -10 ,
    height: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    
  }
  });