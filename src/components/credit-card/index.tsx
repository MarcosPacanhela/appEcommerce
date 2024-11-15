import { View, Text } from "react-native";
import Animated, { useAnimatedStyle, SharedValue, interpolate, withTiming } from "react-native-reanimated";

import { styles } from "./styles";

type CreditCardProps = {
    carSide: SharedValue<number>,
    data: {
        name: string,
        cardNumber: string,
        expiryDate: string,
        cvvNumber: string,
    }


}

export enum CARD_SIDE {
    front = 0,
    back = 1
}

export function CreditCard({ carSide, data }: CreditCardProps) {

    const frontAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(carSide.value, [CARD_SIDE.front, CARD_SIDE.back], [0, 180])

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }
            ]
        }
    })

    const backAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(carSide.value, [CARD_SIDE.front, CARD_SIDE.back], [180, 360])

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }
            ]
        }
    })

    return (
        <View>
            <Animated.View style={[styles.card, styles.front, frontAnimatedStyles]}>
                <View style={styles.header}>
                    <View style={[styles.circle, styles.logo]} />
                    <Text style={styles.label}>Meu Cartão</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.flag}>
                        <View style={[styles.circle, styles.red, { marginRight: -12 }]} />
                        <View style={[styles.circle, styles.orange]} />
                    </View>
                </View>
            </Animated.View>

            <Animated.View style={[styles.card, styles.back, backAnimatedStyles]}>
                <View>
                    <Text style={styles.label}>Número do cartão</Text>
                    <Text style={styles.value}>{data.cardNumber}</Text>
                </View>
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.label}>Validade</Text>
                        <Text style={styles.value}>{data.expiryDate}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>CVV</Text>
                        <Text style={styles.value}>{data.cvvNumber}</Text>
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}