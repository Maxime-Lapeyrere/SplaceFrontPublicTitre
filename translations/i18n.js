import * as Localization from 'expo-localization';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//internationalisation 

//  translations

const resources = {
  en: {
    translation: {
      'group chat' : 'group chat',
      'calendar' : 'Calendar',
      'history' : 'History',
      'create event' : 'Create event',
      'add a biography':'Add a biography',
      'add a description': 'Add a description',
      'my job': 'My job'                  ,
      'add my job' :  'Add my job' ,
      'i live here' : 'I live here' ,
      'add a city'  : 'Add a city'  , 
      'prefered days' : 'Preferred days' ,
      'points of interest': 'Points of interest',
      'modify my number': 'Modify my number',
      'add a number': 'Add a number',
      'modify my email' : 'Modify my email',
      'modify my location': 'Modify my location',
      'advanced settings' : 'Advanced settings',
      'connected accounts': 'Connected accounts',
      'my nickname' : 'My nickname',
      'manage notifications': 'Manage notifications',
      'share Splace' : 'Share Splace',
      'make my account private' : 'Make my account private',
      'search' : 'Search',
      'date' : 'Date',
      'hour' : 'Hour',
      'mixed': 'Mixed',
      'private event' : 'Private event',
      'people limit' : 'People limit',
      'event title' : 'Event title',
      'enter an adress' : 'Enter an adress',
      'go back' : 'Go back',
      'confirm' : 'Confirm',
      'description' : 'Description',
      'go to chat' : 'Go to chat',
      'leave event' : 'Leave event',
      'create my team' : 'Create my team',
      'team leader' : 'Team leader',
      'team members' : 'Team members',
      'group chat' : 'Group chat',
      'fake profile/spam': 'Fake profile/spam',
      'report' : 'Report',
      'inappropriate messages' : 'Inappropriate messages' ,
      'inappropriate profile picture': 'Inappropriate profile picture',
      'inappropriate bio' : 'Inappropriate bio' ,
      'minor user' : 'Minor user' ,
      'off-application behavior' : 'Off-application behavior' ,
      'someone is in danger' : 'Someone is in danger' ,
      'cancel' : 'Cancel',
      'sessions':  'Sessions',
      'create event here': 'Create an event here',
      'modify my preferences': 'Modify my preferences',
      'my favourite adresses': 'My favourite adresses',
      'suggested adresses' : 'Suggested adresses',
      'my favorites': 'My favorites',
      'i create my event' : 'I create my event',
      'date' : 'Date' ,
      'hour' : 'Hour',
      'mixed' : 'Mixed' ,
      'private' : 'Private event',
      'handisport access' : 'Handisport access',
      'people limit' : 'People limit',
      'event title' : 'Event title',
      'add a title' : 'Add a title',
      'enter an adress' : 'Enter an adress',
      'type an adress' : 'Type an adress',
      'map search' :  'Map search' ,
      'add freinds' : 'Add freinds',
      'search distance' :  'Search distance' ,
      'select your sports' : 'Select your sports',
      'favorite sports' :  'Favorite sports',
      'available' : 'Available'







    }
  },
  fr: {
    translation: {
      'group chat': 'Chat de groupe',
      'calendar' : 'Calendrier',
       'history' : 'Historique',
       'create event' : 'Créer un event',
       'add a biography':'Ajouter une biography',
       'add a description': 'Ajouter une description',
       'my job': 'Mon job'                  ,
       'add my job' :  'Ajouter mon job' ,
       'i live here' : 'Je vis ici ' ,
       'add a city'  : 'Ajouter ma ville'  , 
       'prefered days' : 'Jours preférés' ,
       'points of interest': 'Points d\'intérêt',
       'modify my number': 'Modifier mon numéro',
       'add a number': 'Ajouter un numéro',
       'modify my email':'Modifier mon email',
       'modify my location': 'Modifier mon emplacement',
       'advanced settings' : 'Paramètres avancés',
       'connected accounts': 'Mes comptes connectés',
       'my nickname' : 'Mon surnom',
       'manage notifications': 'Gérer les notifications',
       'share Splace' : 'Partager Splace',
       'make my account private' : 'Passer mon profil en privé',
       'search' : 'Rechercher',
       'go back' : 'Retour',
       'confirm' : 'Valider',
       'description' : 'Description',
       'go to chat' : 'Accéder au chat',
       'leave event' : 'Quitter la session',
       'create my team' : 'Créer ma team',
       'team leader' : 'Chef d\'equipe',
       'team members' : 'Les membres',
       'group chat' : 'Chat de group',
       'sessions':  'Les sessions',
       'create event here': 'Je creer un event ici',
       'modify my preferences': 'Modifier mes preferences',
       'my favourite adresses': 'mes adresses préférés',
       'suggested adresses' : 'Adresses suggérées',
       'my favorites': 'Mes favoris',
       'i create my event' : 'Je creer ma session',
       'date' : 'Date' ,
       'hour' : 'Heure',
       'mixed' : 'unisexe' ,
       'private event' : 'Évènement privé',
       'handisport access' : 'Accès handisport',
       'people limit' : 'Nombre de personnes max',
       'event title' : 'Event title',
       'add a title' : 'Titre de l’évènement',
       'enter an adress' : 'Entre une adresse',
       'type an adress' : 'Entre une adresse',
       'map search' :  'Chercher sur la map' ,
       'add freinds' : 'Ajoute des amis',
       'search distance' : 'Distance de recherche',
       'favorite sports' :  'Sports préferes',
       'available' : 'Surtout disponible'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:Localization.locale, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;