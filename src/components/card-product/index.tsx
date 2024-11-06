import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons'

import { styles } from "./styles";
import { CardProductProps } from "./types";

export default function CardProduct({ name, description, price, image, onAddToCart }: CardProductProps) {
    const [isClick, setIsClick] = useState(false)

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(name, description, price, image);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productDescription}>{description}</Text>
                <View style={styles.priceAndIcons}>
                    <Text style={styles.productPrice}>{price}</Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => setIsClick(!isClick)}>
                            <AntDesign
                                name={isClick ? 'heart' : 'hearto'}
                                size={24}
                                color={!isClick ? '#181818' : '#F52445'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAddToCart}>
                            <AntDesign
                                name='shoppingcart'
                                size={24}
                                color='#181818'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}