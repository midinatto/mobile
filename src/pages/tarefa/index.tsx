import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import VoltarHome from '../../components/voltarhome/Voltar';

export default function NovaTarefa({ navigation }: any) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [colaborador, setColaborador] = useState('');
    const [prioridade, setPrioridade] = useState('normal');
    const [concluida, setConcluida] = useState(false);

    const guardarTarefa = async () => {
        if (!titulo.trim()) {
            return Alert.alert('Atenção', 'Por favor, dê um título à sua tarefa!');
        }

        try {
            // Objeto certinho com todas as informações!
            const novaTarefa = {
                id: Date.now().toString(),
                titulo: titulo,
                descricao: descricao,
                colaborador: colaborador, 
                prioridade: prioridade, 
                concluida: concluida    
            };

            const tarefasGuardadas = await AsyncStorage.getItem('@tarefas');
            let arrayDeTarefas = tarefasGuardadas ? JSON.parse(tarefasGuardadas) : [];

            arrayDeTarefas.unshift(novaTarefa);
            await AsyncStorage.setItem('@tarefas', JSON.stringify(arrayDeTarefas));

            Alert.alert('Sucesso!', 'A sua tarefa foi guardada.', [
                { text: 'OK', onPress: () => navigation.goBack() }
            ]);

        } catch (error) {
            console.log("Erro ao guardar a tarefa:", error);
            Alert.alert('Erro', 'Não foi possível guardar a tarefa.');
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <VoltarHome />
                    
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <MaterialIcons name="arrow-back" size={28} color="#1A365D" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Nova Tarefa</Text>
                    </View>

                    <Text style={styles.subtitle}>O que precisas de fazer hoje?</Text>

                    {/* Título */}
                    <Text style={styles.label}>Título da Tarefa</Text>
                    <View style={styles.inputContainer}>
                        <MaterialIcons name="title" size={22} color="#3182CE" />
                        <TextInput
                            style={styles.input}
                            value={titulo}
                            onChangeText={setTitulo}
                            placeholder="Ex: Comprar pão"
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    {/* Descrição */}
                    <Text style={styles.label}>Descrição (Opcional)</Text>
                    <View style={[styles.inputContainer, styles.textAreaContainer]}>
                        <MaterialIcons name="notes" size={22} color="#3182CE" style={{ marginTop: 15 }} />
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={descricao}
                            onChangeText={setDescricao}
                            placeholder="Detalhes da tarefa..."
                            placeholderTextColor="#A0AEC0"
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                    </View>

                    {/* Colaborador (GitHub) */}
                    <Text style={styles.label}>Responsável (GitHub) - Opcional</Text>
                    <View style={styles.inputContainer}>
                        <MaterialIcons name="person" size={22} color="#3182CE" />
                        <TextInput
                            style={styles.input}
                            value={colaborador}
                            onChangeText={setColaborador}
                            placeholder="Ex: octocat"
                            placeholderTextColor="#A0AEC0"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Prioridade */}
                    <Text style={styles.label}>Prioridade</Text>
                    <View style={styles.priorityContainer}>
                        <TouchableOpacity 
                            style={[styles.priorityButton, prioridade === 'baixa' && styles.priorityBaixa]} 
                            onPress={() => setPrioridade('baixa')}
                        >
                            <Text style={[styles.priorityText, prioridade === 'baixa' && styles.priorityTextSelected]}>Baixa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.priorityButton, prioridade === 'normal' && styles.priorityNormal]} 
                            onPress={() => setPrioridade('normal')}
                        >
                            <Text style={[styles.priorityText, prioridade === 'normal' && styles.priorityTextSelected]}>Normal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.priorityButton, prioridade === 'alta' && styles.priorityAlta]} 
                            onPress={() => setPrioridade('alta')}
                        >
                            <Text style={[styles.priorityText, prioridade === 'alta' && styles.priorityTextSelected]}>Alta</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={guardarTarefa}>
                        <Text style={styles.buttonText}>CRIAR TAREFA</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}