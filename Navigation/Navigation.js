
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from '@expo/vector-icons/Ionicons'
import BarsList from '../Components/BarsList'
import BarDetails from '../Components/BarDetails'
import SignUp from '../Components/SignUp'
import Login from '../Components/Login'
import Evenements from '../Components/Evenements'
import Comments from '../Components/Comments'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function LogNav() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        </Stack.Navigator>
    );
}
function SignNav() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }} />
        </Stack.Navigator>
    );
}

function Nav() {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Bars" component={BarsList} options={{ title: 'Home' }} />
            <Stack.Screen name="Details" component={EventBarNav} options={{ title: 'Details' }} />
        </Stack.Navigator>
    );
}

function EventBarNav(props) {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Details') {
                        iconName = focused ? 'ios-beer' : 'md-beer';
                    }
                    else if (route.name === 'Event') {
                        iconName = focused ? 'ios-calendar' : 'md-calendar';
                    }
                    else if (route.name === 'Comments') {
                        iconName = focused ? 'ios-text' : 'md-text';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize: 14 },
            }}
        >
            <Tab.Screen name="Details" component={BarDetails} initialParams={props.route.params} />
            <Tab.Screen name="Event" component={Evenements} initialParams={props.route.params} />
            <Tab.Screen name="Comments" component={Comments} initialParams={props.route.params} />

        </Tab.Navigator>

    )
}


function RightBar() {

    return (

        <Drawer.Navigator >
            <Drawer.Screen name="List" component={Nav} options={{ title: 'List' }} />
            <Drawer.Screen name="SignUp" component={SignNav} options={{ title: 'SignUp' }} />
            <Drawer.Screen name="Login" component={LogNav} options={{ title: 'Login' }} />
        </Drawer.Navigator>

    );
}

export default RightBar;
