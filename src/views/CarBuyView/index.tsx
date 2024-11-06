import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { useCart } from '../../context/CartContext';

import { styles } from "./styles";

export default function CarBuyView({ navigation }: any) {
    const { cartItems, removeFromCart } = useCart();

    const handleDeleteFromCart = (id: number) => {
        removeFromCart(id);
    };

    function navToHome() {
        navigation.navigate('home');
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Itens no Carrinho</Text>
                {cartItems.length > 0 ? (
                    cartItems.map((cartItem) => (
                        <View style={styles.cartItem} key={cartItem.id}>
                            <Image source={{ uri: cartItem.image }} style={styles.image} />
                            <View>
                                <Text style={styles.productName}>{cartItem.name}</Text>
                                <Text style={styles.productDescription}>{cartItem.description}</Text>
                                <View style={styles.priceAndIcons}>
                                    <Text style={styles.productPrice}>{cartItem.price}</Text>
                                    <TouchableOpacity onPress={() => handleDeleteFromCart(cartItem.id)}>
                                        <AntDesign
                                            name='delete'
                                            size={24}
                                            color='#181818'
                                            style={{ paddingBottom: 10 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text style={[styles.textButton, { justifyContent: "center", marginTop: '60%' }]}>
                        Seu carrinho está vazio
                    </Text>
                )}

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buttonContinue} onPress={navToHome}>
                        <Text style={styles.textButton}>Continuar comprando</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFinish} onPress={() => navigation.navigate('finish')}>
                        <Text style={[styles.textButton, { color: '#fff' }]}>Finalizar compra</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
