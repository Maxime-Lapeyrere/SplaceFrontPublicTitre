
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput, Image , TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from 'react-native-elements';


export default function Post({post}){
    const {t} = useTranslation(); // traduction 
    const [comment, setComment] = useState('');
    const [showInput,setShowInput]  = useState(false);  

    const commentHandler = () => {

       
    }
    return(
        <View style={styles.container}>
             <View style={styles.header}>
             <Image style={styles.image} source={post.poster.images[0]}/>
             <View styles={{marginLeft: 5}}>
                 <Text style={styles.title}>{post.poster.name}</Text>
                 <Text style={{...styles.title,color:'grey'}}>{post.date}</Text>
             </View>
             </View>
             <Text style={styles.content}>{post.content}</Text>
            <View style={{flexDirection: 'row', alignSelf:'center', }}>
                <View marginRight={30}>
                    <Text style={{color:'orange'}}> {post.comments.length + ' ' + t('comments')}</Text> 

                </View>
               
                <View style={{flexDirection: 'row',alignItems:'center',}}>
                    <Text style={{color:'orange'}}>{post.likes }  <Icon name="heart" size={15} color="orange" /> </Text>
                </View>

            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.like_comment}> <Icon name="heart" size={14} color="grey" />{t('like')} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ setShowInput(true)}}>
                    <Text style={styles.like_comment}> {t('comment')} </Text>
                </TouchableOpacity>
                </View>
                { showInput ?
                    <View >
                        <Input
                   
                        rightIcon={
                            <TouchableOpacity onPress={()=> commentHandler()}>
                                <Icon
                                    name='send'
                                    size={16}
                                    color='grey'
                                />
                            </TouchableOpacity>
                        }
                        containerStyle={styles.Tinput}
                        onChangeText={setComment}
                        value={comment}
                        />
                    </View>
                    : <View></View>
                }
                {post.comments.length > 0? 
                    post.comments.map((comment) => {
                        return(
                            <Post post= {comment}/>

                        )
                    })
                    :
                    <View></View>
                }
        </View>
    )

}
const styles = StyleSheet.create({
   container: {
        flex: 1 ,
        margin :  10 ,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,  
        elevation: 2,
        
   },
   header: {
       flexDirection: 'row' ,
       margin: 10 ,
       marginLeft: 15
   },
   image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 3,
    marginRight: 5 
},
 title:{
     marginLeft: 5,

 },
 content: {
     marginLeft: 15,
     marginRight: 15,
     marginBottom: 10,
    fontSize: 12
 },
 footer:{
     flexDirection: 'row', 
     borderColor:'grey' ,
     borderTopWidth : 0.5,
     alignItems : 'center',
     margin: 10,
     justifyContent:'space-evenly'
 },
 like_comment:{
     color: 'grey', 
     fontWeight: '800',
     margin : 5
 }, 
 Tinput:{
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 5,
    
    
    borderRadius: 25,
    width:'85%',
    alignSelf: 'center',
    height: 50,
    marginBottom: 15
}
  });