import React from 'react'
import { getCommentsBar} from '../API/barApi'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'


class Comments extends React.Component {

 constructor(props){
   super(props)
     this.state = {
       comments: [],
       isLoading: false
     }
  }

  _getComment(){
    const { route , navigation } = this.props
    console.log("route",route)
    const { idBar } = route.params.params
    console.log("id" , idBar) 
    
    getCommentsBar(idBar).then( data => {
     console.log(data)
     this.setState({comments: data, isLoading:false})
     
    })
  }

 componentDidMount() {
   this.setState({ isLoading: true })
   console.log("id : ", this.props.route.params.params.idBar)
   this._getComment()
  }

  render() {
    
    const {isLoading, comments} = this.state

    if (isLoading ){
      return (<View style={{flex :1,justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="red"/>
              </View>
          )}

    return (
      <ScrollView>
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <Text style={styles.title_text}>Commentaires :</Text>
          <FlatList
            data={comments}
            keyExtractor={ (item, index) => index.toString()}
            renderItem={({ item }) =>
                        <View>
                          <View style={styles.user_container}>
                            <Image
                              style={styles.logocom}
                              source={require('../Images/pen.png')}
                            />
                            <Text style={styles.date_text}>{"le : 10/02/2019, "}</Text>
                            <Text style={styles.user_text}>{item.login + " a dit :"}</Text>
                          </View>
                          <View style={styles.com_container}>
                            <Image
                                style={styles.logocom}
                                source={require('../Images/arrow.png')}
                            />
                            <Text style={styles.com_text}>{item.content}</Text>
                          </View>
                        </View>
                      }
          />
        </View>
          
        <View style ={styles.containerInput}>
          <TextInput
          placeholder= 'pseudo'
          style={styles.input}
          />
          <TextInput
          placeholder= 'message'
          style={styles.input}
          />
          <Button title='submit' onPress={""} />
        </View>

      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  main_container: {
    flex: 1

  },

  com_container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginRight: 20
    

  },

  user_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D3D3D3'
    
  },
  containerInput: {
    flex: 1,
    margin: 10,
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 24,
    flexWrap: 'wrap',
    padding: 20
  },

  default_text: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666666'
  },

  user_text: {
    
  },
  style_input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 15,
    margin: 5
  },
  logocom: {
    width: 20,
    height: 20,
    marginHorizontal:10
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,

  },


})
   

export default Comments
