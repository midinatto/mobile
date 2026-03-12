import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import VoltarHome from '../../components/voltarhome/Voltar'; // Confirme se o caminho está certinho!

export default function ListaTarefas({ navigation }: any) {
    const [tarefas, setTarefas] = useState<any[]>([]);

    useFocusEffect(
        useCallback(() => {
            carregarTarefas();
        }, [])
    );

    const carregarTarefas = async () => {
        try {
            const tarefasSalvas = await AsyncStorage.getItem('@tarefas');
            if (tarefasSalvas) {
                setTarefas(JSON.parse(tarefasSalvas));
            }
        } catch (error) {
            console.log("Erro ao carregar tarefas", error);
        }
    };

    const deletarTarefa = async (id: string) => {
        Alert.alert("Atenção", "Deseja mesmo excluir essa tarefa?", [
            { text: "Cancelar", style: "cancel" },
            { 
                text: "Excluir", 
                style: "destructive",
                onPress: async () => {
                    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
                    setTarefas(novasTarefas);
                    await AsyncStorage.setItem('@tarefas', JSON.stringify(novasTarefas));
                }
            }
        ]);
    };

    const alternarStatus = async (id: string) => {
        const tarefasAtualizadas = tarefas.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida };
            }
            return tarefa;
        });
        setTarefas(tarefasAtualizadas);
        await AsyncStorage.setItem('@tarefas', JSON.stringify(tarefasAtualizadas));
    };

    // Função para definir a cor da borda com base na prioridade
    const getCorPrioridade = (prioridade: string) => {
        if (prioridade === 'alta') return '#E53E3E'; // Vermelho
        if (prioridade === 'baixa') return '#48BB78'; // Verde
        return '#3182CE'; // Azul (Normal ou se não tiver prioridade)
    };

    const renderItem = ({ item }: any) => (
        // Adicionamos a borda colorida dinâmica aqui no cartão principal!
        <View style={[styles.cardTarefa, { borderLeftWidth: 6, borderLeftColor: getCorPrioridade(item.prioridade) }]}>
            
            <TouchableOpacity onPress={() => alternarStatus(item.id)} style={styles.checkButton}>
                <MaterialIcons 
                    name={item.concluida ? "check-circle" : "radio-button-unchecked"} 
                    size={28} 
                    color={item.concluida ? "#4CAF50" : "#A0AEC0"} 
                />
            </TouchableOpacity>

            <View style={styles.textoContainer}>
                <Text style={[styles.tituloTarefa, item.concluida && styles.textoRiscado]}>
                    {item.titulo}
                </Text>
                
                {item.descricao ? (
                    <Text style={styles.descTarefa} numberOfLines={2}>{item.descricao}</Text>
                ) : null}

                {/* MÁGICA: Foto do Colaborador + Nome organizados juntos */}
                {item.colaborador ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Image 
                            source={{ uri: `https://github.com/${item.colaborador}.png` }} 
                            style={{ width: 24, height: 24, borderRadius: 12, marginRight: 8, borderWidth: 1, borderColor: '#CBD5E0' }}
                        />
                        <Text style={{ fontSize: 13, color: '#4A5568', fontWeight: 'bold' }}>
                            @{item.colaborador}
                        </Text>
                    </View>
                ) : null}
            </View>

            <TouchableOpacity onPress={() => deletarTarefa(item.id)} style={styles.deleteButton}>
                <MaterialIcons name="delete-outline" size={24} color="#E53E3E" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <VoltarHome />
            <Text style={[styles.title, { marginTop: 40 }]}>Minhas Tarefas</Text>
            
            {tarefas.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <MaterialIcons name="assignment" size={60} color="#CBD5E0" />
                    <Text style={styles.emptyText}>Nenhuma tarefa por aqui ainda.</Text>
                    <Text style={styles.emptySubtext}>Clique no + para adicionar!</Text>
                </View>
            ) : (
                <FlatList
                    data={tarefas}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}

            <TouchableOpacity 
                style={styles.fab} 
                onPress={() => navigation.navigate('NovaTarefa')}
            >
                <MaterialIcons name="add" size={32} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}