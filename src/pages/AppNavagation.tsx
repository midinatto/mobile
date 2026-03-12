import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. As importações que você já tinha (Ajuste as pastas se precisar)
import Login from '../pages/login'; 
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';

// 2. IMPORTAR AS 4 TELAS NOVAS AQUI!
import ListaTarefas from '../pages/lista'; 
import NovaTarefa from '../pages/tarefa';
import Foco from '../pages/foco';
import Perfil from '../pages/perfil';

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    ListaTarefas: undefined;
    NovaTarefa: undefined;
    Foco: undefined;
    Perfil: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            {/* Telas antigas */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />

            {/* 3. ADICIONAR AS NOVAS TELAS NO MAPA (STACK) AQUI 👇 */}
            <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
            <Stack.Screen name="NovaTarefa" component={NovaTarefa} />
            <Stack.Screen name="Foco" component={Foco} />
            <Stack.Screen name="Perfil" component={Perfil} />
            
        </Stack.Navigator>
    );
}