import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Text>Register Page</Text>
            
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    placeholder="username"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    placeholder="password"
                    secureTextEntry="true"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    placeholder="repassword"
                    secureTextEntry="true"
                    onChangeText={(repassword) => setRepassword(repassword)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },
    loginButton: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1943'
    }
});

export default Register;