import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
                    ({ item }) => <Content name={item.user.username} image={item.image} caption={item.caption} />
                }
            />
        </View>
    );
}

const App = ({navigation}) => { // parent component
    const [contentList, setContentList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://192.168.1.8:3000/contents'
                );
                const json = await response.json();
                setContentList(json);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <View>
            <View>
                <CustListView itemList={contentList} />
            </View>
                
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
                    onPress={() => navigation.navigate('Upload', { name: 'About Page' })} 
                >
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