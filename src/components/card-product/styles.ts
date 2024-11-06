import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15
    },
    textContainer: {
        padding: 10,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        paddingVertical: 10
    },
    productPrice: {
        fontSize: 16,
        color: '#000',
    },
    priceAndIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row',
        gap: 10
    }
})