// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  App  from './Beranda';
import  Content  from './Content';
import  Upload  from './Upload';
// import { App as AboutPage} from './pages/Upload';


const Yuhuua = () => {
    return (
        <View><Text>HAHAHA</Text></View>
    );
}



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={App} options={{title: 'Welcome'}} />
            <Stack.Screen name="Yoyo" component={Yuhuua} options={{title: 'Welcome'}} />
            <Stack.Screen name="Content" component={Content} />
            <Stack.Screen name="Upload" component={Upload} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;