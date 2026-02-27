import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { style } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';
import { useState } from "react";
import { themas } from "../../global/themes";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Image style={style.image} source={Logo} />
            <Text style={style.textWelcome}>Bem Vindo ao Login!</Text>

            <View style={style.container}>


                <View style={style.boxMid}>
                    <Text style={style.labelInput}>Endereço de E-mail</Text>
                    <TextInput
                        style={style.boxInput} value={email} onChangeText={(e) => setEmail(e)}
                        placeholder="exemplo@email.com"
                    />
                    <MaterialIcons name="email" size={24} color={themas.colors.gray} />

                    <Text style={style.labelInput}>Coloque sua Senha!</Text>
                    <TextInput
                        style={style.boxInput} value={password} onChangeText={(e) => setPassword(e)}
                        secureTextEntry={true} // Esconde a senha
                        placeholder="******"
                    />
                    <MaterialIcons name="password" size={24} color={themas.colors.gray} />
                    <TouchableOpacity style={style.button} onPress={() => console.log('Logado!')}>
                        <Text style={style.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}