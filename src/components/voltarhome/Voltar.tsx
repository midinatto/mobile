import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../pages/AppNavagation'; // Confirma se o caminho está certo!

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function VoltarHome() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity 
            style={styles.botaoFlutuante} 
            onPress={() => navigation.navigate('Home')}
        >
            <MaterialIcons name="home" size={28} color="#3182CE" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoFlutuante: {
        position: 'absolute',
        // Aqui está a mágica: trocamos 'top' por 'bottom'
        bottom: Platform.OS === 'ios' ? 40 : 30, 
        left: 20,
        zIndex: 999, // Mantém o botão sempre por cima de tudo
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        // Sombrinha Premium Blue
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});