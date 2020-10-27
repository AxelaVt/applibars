
import React from 'react'
import { StyleSheet, FlatList, Text, View, ScrollView, StatusBar, Image } from 'react-native'
import { getBar } from '../API/barApi'
import BarItem from './BarItem'
import BarDetails from './BarDetails'

class BarsList extends React.Component {
  
    
    constructor(props) {
        super(props)
        this.state = {
            bars : [],
            titre: "Never'sBar"
        }
    }

    componentDidMount() {
        getBar().then((data) => {
            this.setState({
                bars: data
            })
        }) 
    }

    _displayDetailBar = (idBar) => {
        console.log("Display bar " + idBar)
        this.props.navigation.navigate('Details', {
            screen: 'Details',
            params: { idBar: idBar },
        })
        
       }
    
    
    render() {
        
        console.log(this.state)

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
                        data={this.state.bars}
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