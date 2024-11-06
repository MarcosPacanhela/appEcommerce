import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    button: {
        alignItems: 'flex-end',
        marginVertical: 20
    },
    icon: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 8
    },
    iconModal: {
        paddingVertical: 18
    },
    form: {
        gap: 12
    },
    inputInline: {
        flexDirection: 'row',
        gap: 12
    },
    smallInput: {
        width: '48%'
    },
    circleMethodPagament: {
        borderWidth: 1,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    buttonFinish: {
        backgroundColor: '#181818',
        borderRadius: 30,
        paddingVertical: 18,
        paddingHorizontal: 120,
        marginTop: 130

    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    label: {
        paddingTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',

    },
    containerPicker: {
        height: 54,
        borderWidth: 1,
        borderColor: '#181818',
        borderRadius: 30,
        paddingHorizontal: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#181818',
        borderRadius: 30,
        paddingVertical: 18,
        paddingHorizontal: 50,
    },
    textButtonModal: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})