/* eslint-disable prettier/prettier */
// view content

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// for get
const getContentList = async () => {
    try {
        const response = await fetch(
            'http://localhost:3000/content'
        );
        const json = await response.json();
        return json;
    } catch(error) {
        alert(error);
        return null;
    }
}

// for post
const postContentList = async () => {
    try {
        const response = await fetch(
            'http://localhost:3000/content', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                firstParam: 'value',
                secondParam: 'value'
                })
            }
        );
        const json = await response.json();
        return json;
    } catch(error) {
        alert(error);
        return null;
    }
}

const Content = ({ name, image, caption }) => { // child component
    const navigation = useNavigation();
    return (
        <TouchableHighlight underlayColor="white" style={styles.card} onPress={() => {
            navigation.navigate('Content', { name: 'About Page' });
        }}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Image source={{uri: image}}
                    style={{ width: '100%', height: 200}} 
                    resizeMode="contain"/>
                <Text style={styles.name}>{caption}</Text>
            </View>
        </TouchableHighlight >
    );
}

const CustListView = ({ itemList }) => {
    return (
        <View>
            <FlatList data={itemList}
                renderItem={
                    ({ item }) => <Content name={item.name} image={item.image} caption={item.caption} />
                }
            />
        </View>
    );
}

const App = ({navigation}) => { // parent component
    return (
        <View>
        <ScrollView>
            <CustListView itemList={getContentList} />
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