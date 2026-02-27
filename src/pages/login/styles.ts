import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "#a2c785",
        borderRadius: 20
    },
    boxTop: {
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 100,
        marginBottom: 30
    },
    textWelcome: {
        fontFamily: 'PTSerif-Bold',
        fontSize: 24,
        fontWeight: 'bold', // Muda o peso da fonte
        marginTop: 10,
        color: '#333'
    },
    boxMid: {
        marginTop: 10,
        paddingHorizontal: 80, // Melhor que marginLeft para centralizar
        height: Dimensions.get("window").height / 3,
    },
    labelInput: {
        fontFamily: 'PTSerif-Regular',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 15,
        color: '#444'
    },
    boxInput: {
        height: 50,
        width: '100%',
        borderRadius: 10, // Arredondado mais suave
        backgroundColor: "#f8f4e4",
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16
    },
    button: {
        backgroundColor: '#4CAF50', // Cor sólida bonita
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        elevation: 3, // Sombrinha no Android
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});