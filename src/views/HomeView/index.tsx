import { View, Image, ScrollView, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

import CardProduct from "../../components/card-product";

import PakaLogoHome from '../../assets/image/pakaLogoHome.png';

import { useCart } from '../../context/CartContext';

import { pizzas, foods, bebidas } from '../../service/index';

import { styles } from "./styles";


export default function HomeView({ navigation }: any) {
    const { cartItems, addToCart } = useCart();

    const handleAddToCart = (name: string, description: string, price: string, image: string) => {
        const newProduct = {
            id: cartItems.length + 1,
            name,
            description,
            price,
            image,
        };
        addToCart(newProduct);
    };

    const navToCarBuy = () => {
        navigation.navigate('carBuy');
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={PakaLogoHome} />
                <AntDesign
                    name='shoppingcart'
                    size={30}
                    color='#181818'
                    style={{ marginTop: 25 }}
                    onPress={navToCarBuy}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Lanches</Text>
                {foods.map((food, index) => (
                    <View key={index}>
                        <CardProduct
                            name={food.nome}
                            description={food.descricao}
                            price={'R$ ' + food.vl_produto}
                            image={food.icone}
                            onAddToCart={handleAddToCart}
                        />
                    </View>
                ))}

                <Text style={styles.text}>Pizzas</Text>
                {pizzas.map((pizza, index) => (
                    <View key={index}>
                        <CardProduct
                            name={pizza.nome}
                            description={pizza.descricao}
                            price={'R$ ' + pizza.vl_produto}
                            image={pizza.icone}
                            onAddToCart={handleAddToCart}
                        />
                    </View>
                ))}

                <Text style={styles.text}>Bebidas</Text>
                {bebidas.map((bebida, index) => (
                    <View key={index}>
                        <CardProduct
                            name={bebida.nome}
                            description={bebida.descricao}
                            price={'R$ ' + bebida.vl_produto}
                            image={bebida.icone}
                            onAddToCart={handleAddToCart}
                        />
                    </View>
                ))}

            </ScrollView>

            <StatusBar style='auto' />
        </View>
    );
}
