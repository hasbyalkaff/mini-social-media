// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  App  from './Beranda';
import  Content  from './Content';
import  Upload  from './Upload';
import  Login  from './Login';
import  Register  from './Register';
// import { App as AboutPage} from './pages/Upload';


const Routes = () => {
    return (
        <View><Text>Routes Page</Text></View>
    );
}



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={App} options={{title: 'Beranda'}} />
            <Stack.Screen name="Content" component={Content} options={{title: 'Content'}} />
            <Stack.Screen name="Upload" component={Upload} options={{title: 'Upload'}} />
            <Stack.Screen name="Routes" component={Routes} options={{title: 'Welcome'}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;