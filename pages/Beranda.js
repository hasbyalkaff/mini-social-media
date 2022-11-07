/* eslint-disable prettier/prettier */
// view content

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight, TouchableOpacity, Icon } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Content = (data) => { // child component
    const navigation = useNavigation();
    return (
        <TouchableHighlight underlayColor="white" style={styles.card} onPress={() => {
            navigation.navigate('Content', { name: 'About Page' });
        }}>
        <View>
            <Text style={styles.name}>{data.name}</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{ width: '100%', height: 200}} 
                resizeMode="contain"/>
            <Text style={styles.name}>{data.caption}</Text>
        </View>
        </TouchableHighlight >
    );
}

const App = ({navigation}) => { // parent component
    return (
        <View>
        <ScrollView>
            <Content name="Mamad" image="" caption="aaa"/>
            <Content name="Joko" image="" caption="bb"/>
            <Content name="Budi" image="" caption="cc"/>
            <Button title="Click Here" onPress={() => navigation.navigate('Yoyo', { name: 'About Page' })}/>
        </ScrollView>
            
        <View>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 30,
                    right: 10,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100
                }}
                onPress={() => navigation.navigate('Upload', { name: 'About Page' })} >
                    {/* <Icon name="plus" size={30} color="#01a699" /> */}
                {/* <Image style={{width: 50, height:50,  resizeMode: 'contain'}} source={require('assets/imgs/group.png')} /> */}
                <Text>+</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: 'rgba(210,210,210,0.5)',
        borderRadius: 4
    },
    name: {
        marginBottom: 10
    },
    caption: {
        marginTop: 10
    }
})

export default App;