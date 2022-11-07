
import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
// const ImagePicker = require('react-native-image-picker');

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
                alert(text);
                // NavigationContainer.navigate('Profile', {name: 'Jane'});
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