
import React from 'react'
import { StyleSheet, FlatList, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import bars from '../Helpers/bars'
//import films from '../Helpers/filmsData'
import BarItem from './BarItem'


class BarsList extends React.Component {
  
    
    constructor(props) {
        super(props)
        this.state = {
            titre: "Liste des bars"

        }
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
                <SafeAreaView>
                    <FlatList
                        data={bars}
                        keyExtractor={(item) => item.id.toString() }
                        renderItem={({ item }) => <BarItem bar={item} />}
                    />       
                </SafeAreaView>
            
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
        height:80,
        textAlignVertical: "center",
    }
});


export default BarsList