
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight, TextInput } from 'react-native';

const Comment = () => {
    return (
        <View>
            <View>
                <Text>Mamat</Text>
            </View>
            <View>
                <Text>Ini Komenrtar nya</Text>
            </View>
        </View>
    );
}

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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View>
                <Comment />
                <Comment />
                <Comment />
            </View>
            <View>
                <TextInput />
                <Button />
            </View>
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