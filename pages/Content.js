
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight } from 'react-native';

const Content = () => { // child component
    const data = {
        name: "bro",
        caption: "aaaa"
    };
    return (
        <ScrollView>
            <Text style={styles.name}>{data.name}</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{ width: '100%', height: 200}} 
                resizeMode="contain"/>
            <Text style={styles.name}>{data.caption}</Text>
        </ScrollView >
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

export default Content;