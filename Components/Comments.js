import React from 'react';
import { getCommentsBar} from '../API/barApi'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'


class Comments extends React.Component {

 constructor(props){
   super(props);{

     this.state = {
       comments: [],
       isLoading: false,
     }
   }
  };

  _getComment(){
   const { route , navigation } = this.props;
   const { id } = route.params.params.idBar;
    
    

   getCommentsBar(id).then( data => {
     console.log(data)
     this.setState({comments: data, isLoading:false});
     
    })
  }

 componentDidMount() {
   this.setState({ isLoading: true });
   console.log(route.params.params.idBar)
   this._getComment();
 };

 render() {
   
   const {isLoading, comments} = this.state
   console.log("this.state.comments", this.state.comments)

   if (isLoading ){
     return <View style ={{flex :1,justifyContent: 'center',}}>
     <ActivityIndicator size="large" color ="red"/>
     </View>
   }
   return (
    <View style={styles.containerMain}>
       <View style={styles.content_container}>
         <Text style={styles.title_text}>Commentaires :</Text>
         <FlatList
           data={this.state.comments}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) =>
             <View>
               <View style={styles.com_container}>
                 <Image
                   style={styles.logocom}
                   source={require('../Images/pen.png')}
                 />
                 <Text style={styles.date_text}>{"le : 10/02/2019, "}</Text>
                 <Text style={styles.user_text}>{item.login + " a dit :"}</Text>

               </View>
               <View style={styles.com_container}>
                 <Text style={styles.com_text}>
                   <Image
                     style={styles.logocom}
                     source={require('../Images/arrow.png')}
                   />
                   {item.content}
                 </Text>
               </View>
             </View>}
         />
        </View>
        <View style ={styles.containerInput}>
          <TextInput
          placeholder= ' pseudo'
          style={styles.input}
          />
          <TextInput
          placeholder= ' message'
          style={styles.input}
          />
          <Button title='submit' onPress={""} />
        </View>

    </View>
   )
 }
}

const styles = StyleSheet.create({

  containerMain : {
    flex :1,
  },
  container : {
    flex :3,
  },
  containerList : {
    flex :1,
  },
  containerInput : {
    flex :1,
    margin: 10,
  },
  com_container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
    padding: 5
  },

  pseudo:{
    textAlign: "center",
    backgroundColor : "gold",
    marginVertical : 5,
  },

  message:{
    paddingVertical:10,
    marginHorizontal:5,
  },

  input :{
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,

  },
  logocom: {
    width: 20,
    height: 20,
    padding: 2,
    marginRight: 5
  },


});
export default Comments
