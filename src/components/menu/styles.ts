import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
        padding: 25,
        marginTop: 10,
    },
    card: {
        // ✨ A MÁGICA DO VIDRO ACONTECE AQUI ✨
        backgroundColor: 'rgba(255, 255, 255, 0.75)', // Branco com 75% de transparência
        borderWidth: 1, // Bordinha fina
        borderColor: 'rgba(255, 255, 255, 0.6)', // Bordinha meio transparente para dar reflexo
        
        width: '47%', 
        aspectRatio: 1, 
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
        // Mantemos a sombra para o cartão não sumir no fundo escuro
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        // Dica: Os ícones continuam com as cores de fundo deles para dar um contraste bem bonito!
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1A365D', // Escureci um pouco o texto para ler melhor por cima do vidro
        textAlign: 'center',
    }
});