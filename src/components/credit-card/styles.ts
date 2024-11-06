import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        padding: 24,
        marginTop: 15,
        justifyContent: 'space-between'
    },
    front: {
        backgroundColor: '#101010',
        backfaceVisibility: 'hidden',
        position: 'absolute'
    },
    back: {
        backgroundColor: '#202020',
        backfaceVisibility: 'hidden'
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12
    },
    logo: {
        backgroundColor: '#8795A0'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flag: {
        flexDirection: 'row'
    },
    red: {
        backgroundColor: 'red'
    },
    orange: {
        backgroundColor: 'orange'
    },
    label: {
        fontSize: 14,
        color: '#fff'
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }

})