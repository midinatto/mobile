
import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A365D',
        marginBottom: 20,
    },
    cardTarefa: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    checkButton: {
        marginRight: 15,
    },
    textoContainer: {
        flex: 1,
    },
    tituloTarefa: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    textoRiscado: {
        textDecorationLine: 'line-through',
        color: '#A0AEC0',
    },
    descTarefa: {
        fontSize: 14,
        color: '#718096',
        marginTop: 4,
    },
    deleteButton: {
        padding: 5,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 25,
        backgroundColor: '#3182CE',
        width: 65,
        height: 65,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#4A5568',
        fontWeight: 'bold',
        marginTop: 15,
    },
    emptySubtext: {
        fontSize: 15,
        color: '#A0AEC0',
        marginTop: 5,
    }
});