
import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, Image, ActivityIndicator, ScrollView, TouchableOpacity, Linking, TextInput, Button } from 'react-native'
import { getSingleBar } from '../API/barApi'
import { getCommentsBar } from '../API/barApi'



class BarDetails extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            bar: undefined,
            comments: undefined,
            isLoading:true,
            //nbfav: comments.avis
            nbfav: 12
        }
    }

    componentDidMount() {
        //console.log(this.props.route.params)
        getSingleBar(this.props.route.params.idBar).then((data) => {
            this.setState({
                bar: data
            })        
        })
        getCommentsBar(this.props.route.params.idBar).then((data) => {
            this.setState({
                comments: data
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

    // _Vote(){
    //     const [nbfav, setCount] = useState(12) // valeur recup de la bdd ald => 12 this.state.comments.avis
    //     const onpress = () => setCount(nbfav + 1)

    //     return(
    //         <TouchableOpacity
    //             style={styles.title_text}
    //             onPress={onpress}>
    //             <Text style={styles.ad_text}>
    //                 <Image
    //                     style={styles.logo}
    //                     source={require('../Images/favorite.png')}
    //                 />{nbfav}</Text>
    //         </TouchableOpacity>
    //     )

    // }

    _displayDetailBar() {
        
        if (this.state.bar != undefined && this.state.comments != undefined ) {
            const { bar } = this.state
            console.log(bar)
            //const nbfav = this.comments.state.avis // valeur recup de la bdd ald => 12 
            const nbfav = this.state.nbfav
            const onpress = () => this.setState({ nbfav: this.state.nbfav + 1 })
            return (
                <ScrollView style={styles.scrollview_container}>
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <View>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                            <Text style={styles.ad_text}>{bar.adresse}</Text>
                            <Text style={styles.ad_text}>{bar.telephone}</Text>
                            </View>   
                        </View>
                        <View style={styles.descrip_container}>
                            <View style={styles.aside_container} >
                            <Text style={styles.default_text} numberOfLines={8}>{bar.horaire_jour}</Text>
                            </View>
                            <View style={styles.aside_container} >
                                <TouchableOpacity
                                style={styles.title_text}
                                onPress={onpress}>
                                <Text style={styles.ad_text}>
                                    <Image
                                        style={styles.logofav}
                                        source={require('../Images/favorite.png')}
                                    />{nbfav}</Text>
                                </TouchableOpacity>
                            </View>
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

            <ScrollView style={styles.scrollview_container}>
            <View>
                {this._displayDetailBar()}
                {this._displayReseau()}
                
            </View>
            </ScrollView >

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
        
    },
    descrip_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    aside_container: {
        flex:1,
        alignSelf:'center',
        alignItems: 'center'        

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
    },
    
    logofav: {
        width: 40,
        height: 40,
        padding: 2
    },
    style_input: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 15,
        margin: 5
    },
      
})


export default BarDetails