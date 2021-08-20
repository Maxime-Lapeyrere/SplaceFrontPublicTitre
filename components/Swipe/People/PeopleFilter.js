import React,{useState} from 'react';
import { StyleSheet, Text, View,Pressable,ScrollView  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Button,Overlay } from 'react-native-elements';
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MultiSwitch from  "react-native-multi-switch";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import DefaultMarker from '../General/DefaultMarker';
import Slider from "@react-native-community/slider";
import CustomLabel from '../General/CustomLabel';
import _ from "lodash";
import { render } from 'react-dom';

export default function PeopleFilter(props){
    const [kilometer,setKilometer]=  useState(10000);
    const [showOverlay,setShowoverlay]=  useState(false);
    const changeDistanceSearch = (obj) => {
        if (!props.preferences) {
          return;
        }
        const copy = { ...props.preferences };
        copy.distanceSearch = Math.round(obj.value / 1000);
        props.savePreferences(copy);
      };
      const changeAgeRange = (values) => {
        setBlockScroll(true);
        if (!props.preferences) {
          return;
        }
        const copy = { ...props.preferences };
        copy.ageRange[0] = values[0];
        copy.ageRange[1] = values[1];
        props.savePreferences(copy);
      };
      const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
      ] = useState([18, 28]);
      let nonCollidingMultiSliderValuesChange = (values) =>
      setNonCollidingMultiSliderValue(values);
      let selectedIndex = 0
      const generateGender = null
    const handlePickFilter = (idx) => {
      if (!props.preferences) {
        return;
      }
      const copy = { ...props.preferences };
      const copySports = copy.favoriteSports;
      copySports[idx].isPicked = !copySports[idx].isPicked;
      props.savePreferences(copy);
    };
    const renderOverlay = ()=>{
        return(
            <Overlay
            overlayStyle={{
            width: "90%",
            height: "70%",
            borderRadius: 25,
            backgroundColor: "white",
            opacity: 0.95,
          }}
          isVisible={showOverlay}
        >
          <ScrollView scrollEnabled={showOverlay}>
            <View
              style={{
                alignSelf: "center",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <MultiSwitch
                choiceSize={50}
                activeItemStyle={[
                  { color: "white" },
                  { color: "black" },
                  { color: "white" },
                  { color: "black" },
                ]}
                layout={{ vertical: 0, horizontal: -1 }}
                containerStyles={_.times(4, () => ({
                  backgroundColor: "white",
                  borderRadius: 25,
                  borderWidth: 1,
                  borderColor: "#F4B223",
                  justifyContent: "space-between",
                }))}
                active={1}
              >
                <Feather
                  name="sunrise"
                  style={{ fontSize: 20, color: "#F4B223" }}
                />
                <Feather
                  name="sun"
                  style={{ fontSize: 20, color: "#F4B223" }}
                />
                <Feather
                  name="sunset"
                  style={{ fontSize: 20, color: "#F4B223" }}
                />
                <MaterialIcons
                  name="nightlight-round"
                  style={{ fontSize: 20, color: "#F4B223" }}
                />
              </MultiSwitch>
            </View>
            <Text style={{ marginTop: 20 }}>
              Distance de recherche: {Math.round(kilometer)} km
            </Text>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              value={2 * 1000}
              maximumValue={20000}
              step={0.01}
              minimumTrackTintColor="#F4B223"
              maximumTrackTintColor="#2a3234"
              onSlidingComplete={(v) => changeDistanceSearch({ value: v })}
              onValueChange={(v) => setKilometer(v / 1000)}
            />
            {selectedIndex == 0 && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: 320,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {generateGender}
              </View>
            )}
            {selectedIndex == 0 && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    width: 50,
                    justifyContent: "center",
                    bottom: 15,
                    left: 30,
                  }}
                >
                  {nonCollidingMultiSliderValue[0]} ans
                </Text>
                <MultiSlider
                  values={[
                    nonCollidingMultiSliderValue[0],
                    nonCollidingMultiSliderValue[1],
                  ]}
                  sliderLength={280}
                  onValuesChange={nonCollidingMultiSliderValuesChange}
                  onValuesChangeFinish={(values) => changeAgeRange(values)}
                  onValuesChangeStart={() => setBlockScroll(false)}
                  min={18}
                  max={75}
                  step={1}
                  allowOverlap={false}
                  snapped
                  minMarkerOverlapDistance={18}
                  customMarker={DefaultMarker}
                  customLabel={CustomLabel}
                  trackStyle={{ backgroundColor: "orange", height: 4 }}
                  selectedStyle={{ backgroundColor: "red", height: 4 }}
                  valueSuffix="ans"
                />
                <Text
                  style={{
                    width: 50,
                    justifyContent: "center",
                    bottom: 15,
                    right: 30,
                  }}
                >
                  {nonCollidingMultiSliderValue[1]} ans
                </Text>
              </View>
              
            )}

            <Text style={{ marginTop: 20 }}>Filtre ton ou tes sports: </Text>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            
            </View>
            <Button
              onPress={()=> setShowoverlay(false)}
              title="Confirmer"
              buttonStyle={{
                borderRadius: 20,
                backgroundColor: "#F4B223",
                width: 100,
                marginLeft: 225,
              }}
            />
          </ScrollView>
          </Overlay>
        )
    }
    
    return(
        <View>
            {renderOverlay()}
            <Button 
          onPress={() => setShowoverlay(!showOverlay) }
          icon={<Icon name="filter" size={25} color="#ffffff" />}
          buttonStyle={{
            backgroundColor: "#F4B223",
            borderRadius: 50,
            width: 55,
            height: 55,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          }}
          
          type="solid"
        />
        </View>
    )

}
const styles = StyleSheet.create({
   
  });