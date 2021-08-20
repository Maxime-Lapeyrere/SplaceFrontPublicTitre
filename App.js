import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  './translations/i18n' ; // translations 
import { FontAwesome,Ionicons } from "@expo/vector-icons";

// navigation 
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomePage } from './screens/HomeScreen/HomePage';
import {MyUser } from './screens/MyUserScreen/MyUser';
import {Swipe } from './screens/SwipeScreen/Swipe';
import {Community } from './screens/CommunityScreen/Community';
import {AntDesign } from '@expo/vector-icons';
import {Params} from './screens/MyUserScreen/Params';
import {Profile} from './screens/MyUserScreen/Profile'
import {FavoriteAdresses} from './screens/HomeScreen/FavoriteAdresses'
import {TeamPage} from './screens/CommunityScreen/TeamPage'
import TeamCreate from './screens/CommunityScreen/TeamCreate';
import {RdvDetails} from './screens/HomeScreen/RdvDetails'
import {userPictures} from './screens/MyUserScreen/userPictures'
import {AddContacts} from './screens/CommunityScreen/AddContacts'
import {ChatScreen} from './screens/CommunityScreen/ChatScreen'
import { inviteFriends } from './screens/CommunityScreen/inviteFriends';
import { ClubTeamPage } from './screens/CommunityScreen/ClubTeamPage';
import { Matches } from './screens/SwipeScreen/Matches' ;
import {ClubPage} from './screens/CommunityScreen/ClubPage'
import {Login} from './screens/OnBoardingScreen/Login';
import { Signup } from './screens/OnBoardingScreen/Signup';
import { PreniumTeam } from './screens/PreniumScreens/PreniumTeam';
import { PreniumProfile } from './screens/PreniumScreens/PreniumProfile';
import {FriendRequests} from './screens/CommunityScreen/FriendRequests'

//------------------------------------------------------------------------------------------------------------------------------

//redux   
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {ProfilesReducer} from "./reducers/ProfilesReducer";
import {EventsReducer} from "./reducers/EventsReducer";
import {UserInfoReducer} from "./reducers/UserInfoReducer";
import {RecentChatReducer} from "./reducers/RecentChatReducer";
import {TeamsReducer} from "./reducers/TeamsReducer";
import { SportsReducer} from "./reducers/SportsReducer";
import { RdvReducer} from "./reducers/RdvReducer";
import { PlacesReducer} from "./reducers/PlacesReducer";
import {UserFriendsReducer} from "./reducers/UserFriendsReducer";
import { ChatReducer } from './reducers/ChatReducer';
import { ClubTeamsReducer } from './reducers/ClubTeamsReducer';
import { MatchesReducer } from './reducers/MatchesReducer';
import { ClubsReducer } from './reducers/ClubsReducer';


//----------------------------------------------------------------
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//Reducers
const rootReducer = combineReducers({
Profiles : ProfilesReducer ,
Events : EventsReducer, 
UserInfo: UserInfoReducer ,
Chat: ChatReducer,
Teams : TeamsReducer,
Sports: SportsReducer,
RDV: RdvReducer,
Places : PlacesReducer,
UserFriends: UserFriendsReducer,
ClubTeams : ClubTeamsReducer,
Clubs : ClubsReducer,
Matches: MatchesReducer , 
})




const store = createStore(rootReducer);
const BottomNavigator = (props) => {
const navigation = useNavigation();

  return (

      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
              if (route.name == "HomePage"){
                return<FontAwesome name="globe" size={30} color={color} />; 
            } else if (route.name == "Swipe") {
              return <AntDesign name="swap" size={30} color={color} />;
            } else if (route.name == "Community") {
              return <FontAwesome name="group" size={30} color={color} />;
            }else if (route.name == "MyUser") {
              return <FontAwesome name="user" size={30} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F4B223',
          inactiveTintColor: '#D6D6D6',
          showLabel: false,
          style: {
            backgroundColor: '#F5F2EC',
          }
        }}
      >
        <Tab.Screen name="HomePage" component={HomePage} navigation={props.navigation} />
        <Tab.Screen name="Swipe" component={Swipe} navigation={props.navigation} />
        <Tab.Screen name="Community" component={Community} navigation={props.navigation} />
        <Tab.Screen name="MyUser" component={MyUser} navigation={props.navigation} />     
        
      </Tab.Navigator>
      
      );
    };


  export default function App(props) {
    
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} navigation={props.navigation} />
        <Stack.Screen name="Signup" component={Signup} navigation={props.navigation} />
        <Stack.Screen name="HomePage" component={BottomNavigator} navigation={props.navigation} />
        <Stack.Screen name="Community" component={Community} navigation={props.navigation} />
        <Stack.Screen name="MyUser" component={MyUser} navigation={props.navigation} />
        <Stack.Screen name="Swipe" component={Swipe} navigation={props.navigation} />
        <Stack.Screen name="Params" component={Params} navigation={props.navigation} />
        <Stack.Screen name="Profile" component={Profile} navigation={props.navigation} />
        <Stack.Screen name="FavoriteAdresses" component={FavoriteAdresses} navigation={props.navigation} />
        <Stack.Screen name="TeamPage" component={TeamPage} navigation={props.navigation} />
        <Stack.Screen name="TeamCreate" component={TeamCreate} navigation={props.navigation} />
        <Stack.Screen name="RdvDetails" component={RdvDetails} navigation={props.navigation} />
        <Stack.Screen name="UserPictures" component={userPictures} navigation={props.navigation} />
        <Stack.Screen name="AddContacts" component={AddContacts} navigation={props.navigation} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} navigation={props.navigation} />
        <Stack.Screen name="InviteFriends" component={inviteFriends} navigation={props.navigation} />
        <Stack.Screen name="ClubTeamPage" component={ClubTeamPage} navigation={props.navigation} />
        <Stack.Screen name="Matches" component={Matches} navigation={props.navigation} />
        <Stack.Screen name="ClubPage" component={ClubPage} navigation={props.navigation} />
        <Stack.Screen name="PreniumTeam" component={PreniumTeam} navigation={props.navigation} />
        <Stack.Screen name="PreniumProfile" component={PreniumProfile} navigation={props.navigation} />
        <Stack.Screen name="FriendRequests" component={FriendRequests} navigation={props.navigation} />

       
       </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });
