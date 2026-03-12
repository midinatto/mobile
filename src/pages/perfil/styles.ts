
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        paddingHorizontal: 25,
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A365D',
        alignSelf: 'flex-start',
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        marginBottom: 25,
        alignSelf: 'flex-start',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        height: 55,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        marginBottom: 30,
    },
    icon: {
        marginLeft: 15,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#2D3748',
    },
    searchButton: {
        backgroundColor: '#3182CE',
        height: 55,
        width: 55,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileCard: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#E2E8F0',
        marginBottom: 15,
        marginTop: -10, // Sobe um pouquinho a foto pra dar estilo
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A365D',
        textAlign: 'center',
    },
    userLogin: {
        fontSize: 16,
        color: '#3182CE',
        marginBottom: 15,
    },
    bio: {
        fontSize: 15,
        color: '#4A5568',
        textAlign: 'center',
        marginBottom: 20,
        fontStyle: 'italic',
    },
    statsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#F7FAFC',
        borderRadius: 12,
        padding: 15,
        marginTop: 10,
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    statLabel: {
        fontSize: 14,
        color: '#718096',
        marginTop: 4,
    },
    divider: {
        width: 1,
        backgroundColor: '#CBD5E0',
        height: '100%',
    }
});