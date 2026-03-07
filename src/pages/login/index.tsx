import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { style } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';
import Home from '../home/index';
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavagation";
import { Input } from "../../components/input";

    type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}:Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function getLogin(){
        try {
            // 1. Validação básica
            if(!email || !password) {
                return Alert.alert('Atenção', 'Preencha todos os campos para entrar!');
            }

            // 2. Se estiver tudo ok, avisa e navega
            Alert.alert("Logado com sucesso!", "Bem-vindo de volta!", [
                {
                    text: "OK", 
                    onPress: () => navigation.navigate("Home") // Aqui ele vai para a Home
                }
            ]);

        } catch (error) {
            console.log('Erro ao logar:', error);
            Alert.alert("Erro", "Não foi possível realizar o login.");
        }
    }

    return (
        <View style={style.mainContainer}>
            <Image style={style.image} source={Logo} />
            
            {/* Notei uma tag <input/> solta aqui, se for um componente seu, lembre de usar <Input /> (Maiúsculo) */}
            
            <Text style={style.textWelcome}>Bem-vindo!</Text>

            <View style={style.container}>
                <View style={style.boxMid}>
                    
                    <Text style={style.labelInput}>Endereço de E-mail</Text>
                    <View style={style.inputArea}>
                        <MaterialIcons name="email" size={20} color="#3182CE" />
                        <TextInput
                            style={style.boxInput} 
                            value={email} 
                            onChangeText={setEmail}
                            placeholder="exemplo@email.com"
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    <Text style={style.labelInput}>Senha</Text>
                    <View style={style.inputArea}>
                        <MaterialIcons name="lock" size={20} color="#3182CE" />
                        <TextInput
                            style={style.boxInput} 
                            value={password} 
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="******"
                            placeholderTextColor="#A0AEC0"
                        />
                    </View>

                    {/* Ajustado para chamar a função de lógica */}
                    <TouchableOpacity style={style.button} onPress={getLogin}>
                        <Text style={style.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={style.textBottom}>
                            Não tem conta? <Text style={style.textBottomBold}>Cadastre-se aqui!</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}