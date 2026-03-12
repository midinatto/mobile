import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        paddingHorizontal: 25,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    backButton: {
        marginRight: 15,
        padding: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A365D',
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        marginBottom: 30,
        marginLeft: 5,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: 8,
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 20,
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
    textAreaContainer: {
        height: 120,
        alignItems: 'flex-start', // Alinha o ícone no topo
    },
    textArea: {
        height: 100,
        marginTop: 12,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#3182CE',
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    priorityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    priorityButton: {
        flex: 1,
        height: 45,
        borderWidth: 1,
        borderColor: '#CBD5E0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#FFF',
    },
    priorityText: {
        fontSize: 15,
        color: '#718096',
        fontWeight: 'bold',
    },
    priorityTextSelected: {
        color: '#FFF', // O texto fica branco quando selecionado
    },
    priorityBaixa: {
        backgroundColor: '#48BB78', // Verde
        borderColor: '#48BB78',
    },
    priorityNormal: {
        backgroundColor: '#3182CE', // Azul
        borderColor: '#3182CE',
    },
    priorityAlta: {
        backgroundColor: '#E53E3E', // Vermelho
        borderColor: '#E53E3E',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        height: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 20,
    },
    labelSwitch: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D3748',
    },
});