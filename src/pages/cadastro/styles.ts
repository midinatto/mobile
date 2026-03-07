import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8', // Fundo azul clarinho consistente
        paddingHorizontal: 25,
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: '#1A365D',
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        textAlign: "center",
        marginBottom: 30,
    },
    label: {
        fontSize: 15,
        fontWeight: "600",
        color: '#2D3748',
        marginBottom: 8,
        marginTop: 15,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        // Sombra leve
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#2D3748',
        marginLeft: 10,
    },
    button: {
        marginTop: 35,
        backgroundColor: "#3182CE",
        height: 55,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    backButton: {
        marginTop: 20,
        alignItems: "center",
    },
    backButtonText: {
        color: '#4A5568',
        fontSize: 15,
    },
    loginText: {
        color: '#3182CE',
        fontWeight: 'bold',
    }
});