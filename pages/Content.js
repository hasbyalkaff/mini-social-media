
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableHighlight, TextInput, FlatList } from 'react-native';

// for post
const postComment = async (__text) => {
    var current = new Date();
    var date = current.getFullYear()+"-"+(current.getMonth()+1)+"-"+current.getDate();
    var time = current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
    const __body = JSON.stringify({
        "user": 3,
        "content": 2,
        "comment": __text,
        "created_at": date+" "+time
    });
    console.log(__body);
    try {
        const response = await fetch(
            'http://192.168.1.8:3000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: __body
            }
        );
        alert("Comment Added");
    } catch(error) {
        alert(error);
    }
}

const Comment = ({ name, comment }) => {
    return (
        <View style={styles.comment_container}>
            <View>
                <Text>{name}</Text>
            </View>
            <View style={styles.comment}>
                <Text>{comment}</Text>
            </View>
        </View>
    );
}

const CustCommentsList = ({ itemList }) => {
    return (
        <View>
            <FlatList data={itemList}
                renderItem={
                    ({ item }) => <Comment name={item.user.username} comment={item.comment} />
                }
            />
        </View>
    );
}

const Content = () => {

    const [contentList, setContentList] = useState([]);
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(
                    'http://192.168.1.8:3000/contents/2'
                );
                const json = await response.json();
                console.log(json);
                setContentList(json);
                setUsername(json.user.username);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{username}</Text>
            <Image source={{uri: contentList.image}}
                style={{ width: '100%', height: 200}} 
                resizeMode="contain"/>
            <Text style={styles.name}>{contentList.caption}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View>
                <CustCommentsList itemList={contentList.comment} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Write your though"
                    onChangeText={newText => setComment(newText)}
                    defaultValue={comment}
                />
                <Button title="send" onPress={() => {
                    var __upload = postComment(comment);
                    console.log(__upload);
                }}/>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
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
    },
    comment_container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    comment: {
        padding: 10,
        backgroundColor: 'rgba(210,210,210,0.5)',
        borderRadius: 4
    }
})

export default Content;