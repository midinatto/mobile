import React from "react";
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { style } from './styles';
import Menu from '../../components/menu/Menu';

// A Home já não precisa de passar o navigation para baixo
export default function Home() {
    return (
        <ImageBackground 
            source={require('../../assets/x.jpg')}
            style={style.background}
            resizeMode="cover" // Garante que a foto cubra a tela toda sem achatar
        >
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Olá, bem-vindo!</Text>
                <Text style={style.subtitle}>O que vamos fazer hoje?</Text>
            </View>
            
            {/* O Menu agora chama-se a si mesmo sem props */}
            <Menu />
        </SafeAreaView>
        </ImageBackground>
    );
}