import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavagation";
// Definindo as rotas do seu App
// Definindo que as Props deste componente são do tipo 'Cadastro'
type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;
export default function Cadastro({ navigation }: Props) { 
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastro() {
        if (!nome || !email || !senha) {
            return Alert.alert("Atenção", "Preencha todos os campos para continuar.");
        }
        Alert.alert("Sucesso!", "Sua conta foi criada com sucesso.");
    }

    return (
        // KeyboardAvoidingView evita que o teclado cubra os inputs no iOS
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={style.container}>
                    <Text style={style.title}>Criar Conta</Text>
                    <Text style={style.subtitle}>Preencha os dados abaixo para começar</Text>

                    {/* Campo Nome */}
                    <Text style={style.label}>Nome Completo</Text>
                    <View style={style.inputContainer}>
                        <MaterialIcons name="person-outline" size={22} color="#3182CE" />
                        <TextInput
                            style={style.input}
                            value={nome}
                            onChangeText={setNome}
                            placeholder="Ex: João Silva"
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    {/* Campo Email */}
                    <Text style={style.label}>E-mail</Text>
                    <View style={style.inputContainer}>
                        <MaterialIcons name="mail-outline" size={22} color="#3182CE" />
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="seu@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    {/* Campo Senha */}
                    <Text style={style.label}>Senha</Text>
                    <View style={style.inputContainer}>
                        <MaterialIcons name="lock-outline" size={22} color="#3182CE" />
                        <TextInput
                            style={style.input}
                            value={senha}
                            onChangeText={setSenha}
                            placeholder="Crie uma senha forte"
                            secureTextEntry={true}
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    {/* Botão de Cadastro */}
                    <TouchableOpacity style={style.button} onPress={handleCadastro}>
                        <Text style={style.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>

                    {/* Voltar para o Login */}
                    <TouchableOpacity 
                        style={style.backButton} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={style.backButtonText}>
                            Já tem uma conta? <Text style={style.loginText}>Faça login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}