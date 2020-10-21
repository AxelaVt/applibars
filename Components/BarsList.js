
import React from 'react'
import { StyleSheet, FlatList, Text, View, ScrollView, StatusBar, Image } from 'react-native'
import bars from '../Helpers/bars'
import BarItem from './BarItem'


class BarsList extends React.Component {
  
    
    constructor(props) {
        super(props)
        this.state = {
            titre: "Never'sBar"
        }
    }
    
    _displayDetailBar = (idBar) => {
        console.log("Display bar " + idBar)
        this.props.navigation.push('BarDetails', { idBar: idBar })
       }
    
    
    render() {
        
        return (

            <View style={styles.container}>
                <View style={styles.title_container}>              
                    <Text style={styles.title}>{this.state.titre}</Text>
                    <Image
                        style={styles.logo}
                        source={require('../Images/bar-sf.png')}
                    />
                </View>
                <ScrollView>
                    <FlatList
                        data={bars}
                        keyExtractor={(item) => item.id.toString() }
                        renderItem={({ item }) => <BarItem bar={item} displayDetailBar={this._displayDetailBar} />}
                    />       
                </ScrollView>
            
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    title_container: {
        height: 80,
        marginHorizontal: 4,
        flexDirection: 'row',
        justifyContent: "space-around",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'red'
    },
    title: {
        fontSize: 32,
        alignItems: 'center',
        textAlignVertical: "center", 
    },
    logo: {
        width:80,
        height:80
        
    }
});


export default BarsList