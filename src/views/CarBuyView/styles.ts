import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    containerButton: {
        paddingTop: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonContinue: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#181818',
        paddingVertical: 15,
        paddingHorizontal: 100,
        marginBottom: 15
    },
    buttonFinish: {
        backgroundColor: '#181818',
        borderRadius: 30,
        paddingVertical: 18,
        paddingHorizontal: 120,
        marginBottom: 15
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cartItem: {
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
    productName: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        paddingVertical: 10
    },
    productPrice: {
        paddingBottom: 10,
        fontSize: 16,
        color: '#000',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 25
    },
    priceAndIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});