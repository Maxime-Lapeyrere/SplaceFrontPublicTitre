import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import { IconButton, Colors } from 'react-native-paper';
import DualButton from '../../components/General/DualButton' ;
import { Contacts } from './Contacts';
import { TeamsPage } from './TeamPage';
import TeamsList from  '../../components/Community/Teams/TeamsList'

export  function Community(props) { 

    
    return(
        <View>
           <DualButton screen1={<Contacts navigation={props.navigation}/>} screen2={<TeamsList navigation={ props.navigation }/>} option1={'Contacts'} option2={'Teams'} /> 

           
        </View>
    ); 

 }

 const styles = StyleSheet.create({
   
});