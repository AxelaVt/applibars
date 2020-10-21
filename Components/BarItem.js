import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
// import FadeIn from '../Animations/FadeIn'

class BarItem extends React.Component {


    render() {
        
        const { bar, displayDetailBar } = this.props
        // console.log(bar.id)
        return (
            // <FadeIn>
                <TouchableOpacity
                     style={styles.main_container}
                     onPress={() => displayDetailBar(bar.id)}>
                    
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                            <Text style={styles.ad_text}>{bar.adresse}</Text>
                            <Text style={styles.ad_text}>{bar.telephone}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
            // </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: "red",
        borderBottomWidth: 2
    },
    content_container: {
        margin: 5
    },
    header_container: {
        flex: 6,
        padding:3
        
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 24,
        flexWrap: 'wrap',
        padding: 5
    },
    ad_text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    description_container: {
        flex: 7,
        padding: 3
    },
    default_text: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#666666'
    },
    reseau_container:{
        flex: 1,
        fontStyle: 'italic',
        color: 'blue'
    },    
    favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
    }
})

export default BarItem