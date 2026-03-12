import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import VoltarHome from '../../components/voltarhome/Voltar';

export default function Foco() {
    // Estados do nosso cronômetro
    const [minutosIniciais, setMinutosIniciais] = useState('25'); // Começa com 25 por padrão
    const [tempoRestante, setTempoRestante] = useState(25 * 60); // Tempo em segundos
    const [rodando, setRodando] = useState(false);

    // Efeito para fazer o relógio rodar
    useEffect(() => {
        let intervalo: ReturnType<typeof setInterval>;
        if (rodando && tempoRestante > 0) {
            intervalo = setInterval(() => {
                setTempoRestante((tempoAnterior) => tempoAnterior - 1);
            }, 1000);
        } else if (tempoRestante === 0 && rodando) {
            // Quando o tempo zera!
            setRodando(false);
            buscarConselho();
        }
        return () => clearInterval(intervalo);
    }, [rodando, tempoRestante]);

    // Função que consome a API quando o tempo acaba
    const buscarConselho = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            Alert.alert("Tempo Esgotado! 🎉", `Você focou muito bem! Aqui vai um conselho:\n\n"${data.slip.advice}"`);
        } catch (error) {
            Alert.alert("Tempo Esgotado! 🎉", "Hora de fazer uma pausa e tomar uma água!");
        }
    };

    // Funções dos botões
    const iniciarPausar = () => {
        // Se estiver pausado e o tempo for o inicial, converte o texto do input para segundos
        if (!rodando && tempoRestante === parseInt(minutosIniciais) * 60) {
            setTempoRestante(parseInt(minutosIniciais) * 60);
        }
        setRodando(!rodando);
    };

    const resetar = () => {
        setRodando(false);
        setTempoRestante(parseInt(minutosIniciais) * 60 || 25 * 60);
    };

    // Atualiza o tempo quando o usuário digita um novo valor
    const mudarTempo = (texto:string) => {
        setMinutosIniciais(texto);
        setRodando(false); // Pausa se estiver rodando
        const novosMinutos = parseInt(texto);
        if (!isNaN(novosMinutos) && novosMinutos > 0) {
            setTempoRestante(novosMinutos * 60);
        }
    };

    // Formatação para mostrar na tela (MM:SS)
    const minutos = Math.floor(tempoRestante / 60).toString().padStart(2, '0');
    const segundos = (tempoRestante % 60).toString().padStart(2, '0');

    return (
        <View style={styles.container}>
            <VoltarHome />
            <Text style={styles.title}>Modo Foco</Text>
            <Text style={styles.subtitle}>Defina o tempo e concentre-se na sua tarefa!</Text>

            {/* Input para editar o tempo */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Minutos:</Text>
                <TextInput
                    style={styles.input}
                    value={minutosIniciais}
                    onChangeText={mudarTempo}
                    keyboardType="numeric"
                    maxLength={3}
                    editable={!rodando} // Bloqueia edição enquanto o relógio roda
                />
            </View>

            {/* Relógio Gigante */}
            <View style={styles.clockContainer}>
                <Text style={styles.clockText}>{minutos}:{segundos}</Text>
            </View>

            {/* Botões de Ação */}
            <View style={styles.buttonRow}>
                <TouchableOpacity 
                    style={[styles.button, rodando ? styles.buttonPause : styles.buttonStart]} 
                    onPress={iniciarPausar}
                >
                    <MaterialIcons name={rodando ? "pause" : "play-arrow"} size={30} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonReset} onPress={resetar}>
                    <MaterialIcons name="refresh" size={30} color="#3182CE" />
                </TouchableOpacity>
            </View>
        </View>
    );
}