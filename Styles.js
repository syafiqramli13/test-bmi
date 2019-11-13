import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', //vertically
        alignItems: 'center', //horizontally
        backgroundColor: '#00ff7f',

    },
    myHeader: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        margin: 10,
    },
    contents: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInput: {
        textAlign: 'center',
        borderWidth: 5,
        borderColor: 'black',
        alignItems: 'stretch',
        padding: 10,
        margin: 10,
    },
    image: {
        height: 100,
        width: 100,
    }

});