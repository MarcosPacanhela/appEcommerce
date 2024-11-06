import React, { useState } from "react";

import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image, Modal } from "react-native";

import { StatusBar } from "expo-status-bar";
import AntDesign from '@expo/vector-icons/AntDesign';

import FotoLogin from '../../assets/image/fotoLogin.png'

import { styles } from "./styles";

export default function LoginView({ navigation }: any) {
    const [messageLogin, setMessageLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);

    function navToHome() {
        navigation.navigate('home');
    }

    function handleLogin(email: string, password: string) {

        const validateEmail = 'pacanhela.marcos@gmail.com'
        const validatePassword = '1029'

        if (email === validateEmail && password === validatePassword) {
            navToHome();
        } else {
            setModalVisible(true)
            setMessageLogin('Credenciais inválidas. Tente novamente.')
        }

    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={FotoLogin}
                style={styles.backgroundImage}
            >
                <View style={styles.loginContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Bem-vindo</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.input}
                            placeholder='Digite seu email'
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            placeholder='Digite sua senha'
                            secureTextEntry
                            autoCapitalize='none'
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => handleLogin(email, password)}>
                        <Text style={[styles.textButton, { color: '#fff' }]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <AntDesign
                            name="closecircleo"
                            size={70}
                            color="red"
                            style={styles.iconModal}
                        />
                        <Text style={styles.modalText}>{messageLogin}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textButtonModal}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <StatusBar style='light' />
        </View>
    )

}