import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen';
import ContactScreen from './../screens/ContactScreen';
import ContactDetails from './../screens/ContactDetails';


const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                header: () => null,
            }} />
            <Stack.Screen name="ContactScreen" component={ContactScreen}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen name="ContactDetails" component={ContactDetails}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    )
}
