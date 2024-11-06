import React, { useState } from 'react';

import { TouchableOpacity, View, Text, Modal } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { Picker } from '@react-native-picker/picker';

import AntDesign from '@expo/vector-icons/AntDesign';

import { CreditCard, CARD_SIDE } from '../../components/credit-card'
import { Input } from '../../components/input';

import { styles } from './styles'

export default function FinishBuyView() {

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvvNumber, setCvvNumber] = useState('')
    const [selectedMethod, setSelectedMethod] = useState('credito');
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSucess, setSucess] = useState(false);

    const cardSide = useSharedValue(CARD_SIDE.front)

    function showFrontCard() {
        cardSide.value = CARD_SIDE.front
    }

    function showBackCard() {
        cardSide.value = CARD_SIDE.back
    }

    function handleFlipCard() {
        if (cardSide.value === CARD_SIDE.front) {
            showBackCard()
        } else {
            showFrontCard()
        }
    }

    function handleBuy() {
        if (!name || !cardNumber || !expiryDate || !cvvNumber) {
            setModalMessage('Erro! Verifique os dados inseridos.');
            setModalVisible(true);
            setSucess(false)
        } else {
            setModalMessage('Compra realizada com sucesso!');
            setModalVisible(true);
            setSucess(true)
        }
    }

    return (
        <View style={styles.container} >
            <CreditCard carSide={cardSide} data={{
                name,
                cardNumber: cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '),
                expiryDate,
                cvvNumber
            }} />

            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <AntDesign
                    name="retweet"
                    size={24}
                    color="black"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View style={styles.form}>
                <Input
                    placeholder='Nome do títular'
                    onChangeText={setName}
                    maxLength={29}
                    onFocus={showFrontCard}
                />
                <Input
                    placeholder='Número do cartão'
                    keyboardType='numeric'
                    maxLength={16}
                    onChangeText={setCardNumber}
                    onFocus={showBackCard}
                />
                <View style={styles.inputInline}>
                    <Input
                        placeholder='Validade'
                        style={styles.smallInput}
                        onChangeText={setExpiryDate}
                        maxLength={5}
                        onFocus={showBackCard}
                    />
                    <Input
                        placeholder='CVV'
                        style={styles.smallInput}
                        keyboardType='numeric'
                        maxLength={3}
                        onChangeText={setCvvNumber}
                        onFocus={showBackCard}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Método de pagamento</Text>
                    <View style={styles.containerPicker}>
                        <Picker
                            selectedValue={selectedMethod}
                            style={styles.picker}
                            onValueChange={(itemValue) => setSelectedMethod(itemValue)}
                        >
                            <Picker.Item label="Crédito" value="credito" />
                            <Picker.Item label="Débito" value="debito" />
                        </Picker>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonFinish} onPress={handleBuy}>
                <Text style={[styles.textButton, { color: '#fff' }]}>Pagar</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        {isSucess ?
                            <AntDesign
                                name="checkcircleo"
                                size={70}
                                color="green"
                                style={styles.iconModal}
                            />
                            :
                            <AntDesign
                                name="closecircleo"
                                size={70}
                                color="red"
                                style={styles.iconModal}
                            />

                        }
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textButtonModal}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}