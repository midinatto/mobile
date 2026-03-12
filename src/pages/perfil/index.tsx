import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Alert, Keyboard } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // FontAwesome pro ícone do GitHub
import {styles} from './styles';
import VoltarHome from '../../components/voltarhome/Voltar';

export default function Perfil() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // Função que faz a mágica de buscar os dados na API
    const buscarPerfil = async () => {
        if (!username.trim()) {
            return Alert.alert('Atenção', 'Digite um nome de usuário do GitHub!');
        }

        setLoading(true);
        Keyboard.dismiss(); // Esconde o teclado na hora da busca

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            // Se o usuário não existir no GitHub
            if (response.status === 404) {
                setUserData(null);
                setLoading(false);
                return Alert.alert('Ops!', 'Usuário não encontrado. Tente outro.');
            }

            const data = await response.json();
            setUserData(data);
            setLoading(false);

        } catch (error) {
            console.log("Erro ao buscar API:", error);
            setLoading(false);
            Alert.alert('Erro', 'Verifique sua conexão de internet.');
        }
    };

    return (
        <View style={styles.container}>
            <VoltarHome />
            <Text style={styles.title}>Buscar Perfil</Text>
            <Text style={styles.subtitle}>Encontre desenvolvedores no GitHub para colaborar!</Text>

            {/* Barra de Busca */}
            <View style={styles.searchContainer}>
                <FontAwesome5 name="github" size={24} color="#3182CE" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Digite o @ do usuário"
                    placeholderTextColor="#A0AEC0"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.searchButton} onPress={buscarPerfil}>
                    <MaterialIcons name="search" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Mostra o Spinner de carregamento enquanto a API responde */}
            {loading && <ActivityIndicator size="large" color="#3182CE" style={{ marginTop: 50 }} />}

            {/* Cartão de Perfil (Só aparece se tivermos os dados) */}
            {userData && !loading && (
                <View style={styles.profileCard}>
                    <Image 
                        source={{ uri: userData.avatar_url }} 
                        style={styles.avatar} 
                    />
                    
                    <Text style={styles.name}>{userData.name || userData.login}</Text>
                    <Text style={styles.userLogin}>@{userData.login}</Text>

                    {userData.bio && (
                        <Text style={styles.bio} numberOfLines={3}>{userData.bio}</Text>
                    )}

                    <View style={styles.statsContainer}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>{userData.public_repos}</Text>
                            <Text style={styles.statLabel}>Repositórios</Text>
                        </View>
                        
                        <View style={styles.divider} />
                        
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>{userData.followers}</Text>
                            <Text style={styles.statLabel}>Seguidores</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}
