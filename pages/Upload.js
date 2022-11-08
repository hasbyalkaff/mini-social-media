
import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
// const ImagePicker = require('react-native-image-picker');

// for post
const postContentList = async (caption) => {
    var current = new Date();
    var date = current.getFullYear()+"-"+(current.getMonth()+1)+"-"+current.getDate();
    var time = current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
    const __body = JSON.stringify({
        "id": 3,
        "user_id": 3,
        "image": "qwer",
        "caption": caption,
        "created_at": date+" "+time
    });
    console.log(__body);
    try {
        const response = await fetch(
            'http://192.168.1.8:3000/contents', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: __body
            }
        );
        alert("Content Added");
    } catch(error) {
        alert(error);
    }
}

const Upload = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleChooseImage = () => {
        ImagePicker.launchImageLibrary({ noData: true }, (response) => {
            if(response) {
                setImage(response);
            }
        });
    };

    return (
        <View>
            {image && (
                <>
                    <Image source={{ uri: image.uri }} style={{ width: 300, height: 300 }} />
                    <Button title='Upload Image' />
                </>
            )}
            <Button title='Choose Image' onPress={handleChooseImage} />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder="Write your though"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Button title="Send" onPress={() => {
                var __upload = postContentList(text);
                console.log(__upload);
            }} />
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        justifyContent: 'center'
    }
});

export default Upload;