import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000', // Fundo preto de segurança caso a internet demore a carregar a foto
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent', // ISSO AQUI É O SEGREDO! Deixa o vidro limpo para ver a foto.
    },
    header: {
        paddingHorizontal: 25,
        paddingTop: 60,
        paddingBottom: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.75)', // Branco com 85% de transparência
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A365D',
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        marginTop: 5,
    }
});