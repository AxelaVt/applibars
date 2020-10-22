import React from 'react'
import { StyleSheet, FlatList, Text, View, SafeAreaView, StatusBar, Image, ActivityIndicator, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { getSingleBar } from '../API/barApi'



class BarDetails extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            bar: undefined,
            isLoading:true            
        }
    }

    componentDidMount() {
        //console.log(this.props.route.params);
        getSingleBar(this.props.route.params.idBar).then((data) => {
            this.setState({
                bar: data
            })        
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayReseau() {
        
        if (this.state.bar != undefined && this.state.bar.reseau_sociaux != undefined) {
            const { bar } = this.state
            const { reseau } = bar.reseau_sociaux
            return (
            <TouchableOpacity
                onPress={() => Linking.openURL(bar.reseau_sociaux.substr(11))}>
                <Image
                    style={styles.logo}
                    source={require('../Images/facebook.png')}
                />
            </TouchableOpacity>
            )
        } else {
            return (
                <Text style={styles.default_text}>Aucun réseau social enregistré</Text>
            )
        }
    
    }

    _displayDetailBar() {
        
        if (this.state.bar != undefined) {
            const { bar } = this.state
            return (
                <ScrollView style={styles.scrollview_container}>
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                            <Text style={styles.ad_text}>{bar.adresse}</Text>
                            <Text style={styles.ad_text}>{bar.telephone}</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.default_text} numberOfLines={8}>{bar.horaire_jour}</Text>
                        </View>
                    </View>
                    
                    
                </ScrollView>
            );
        }
    }
    render() {
        const { navigation, route } = this.props
        const {idBar} = route.params
        console.log(idBar)
        return(

            <View>
                {this._displayDetailBar()}
                {this._displayReseau()}
            </View>

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
        padding: 3

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
    reseau_container: {
        flex: 1,
        fontStyle: 'italic',
        color: 'blue'
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 5
    }
})


export default BarDetails