import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    // Container principal para ocupar a tela toda
    mainContainer: {
        flex: 1,
        backgroundColor: '#F0F4F8', // Azul bem clarinho de fundo
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    textWelcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A365D', // Azul marinho escuro
        marginBottom: 30,
    },
    container: {
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 25,
        // Sombra para iOS e Android
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    boxMid: {
        width: '100%',
    },
    labelInput: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 15,
        color: '#2D3748', // Cinza azulado
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#EDF2F7", // Azul acinzentado claro
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    boxInput: {
        height: 50,
        flex: 1,
        fontSize: 16,
        color: '#2D3748',
        marginLeft: 10
    },
    button: {
        backgroundColor: '#3182CE', // Azul Royal
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        elevation: 4,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    textBottom: {
        marginTop: 20,
        textAlign: 'center',
        color: '#4A5568',
        fontSize: 14
    },
    textBottomBold: {
        color: '#3182CE',
        fontWeight: 'bold'
    }
});