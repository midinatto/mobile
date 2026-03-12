import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp} from "@react-navigation/native-stack"
import { RootStackParamList } from "../../pages/AppNavagation";
import { TouchableOpacity } from "react-native";
import { style } from "./styles";
import { View, Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Menu() {

const navigation = useNavigation<NavigationProps>();
return (<View style={style.menuContainer}>
            {/* Botão 1: Listar Tarefas */}
            <TouchableOpacity 
                style={style.card} 
                onPress={() => navigation.navigate('ListaTarefas')}
            >
                <View style={[style.iconContainer, { backgroundColor: '#EBF8FF' }]}>
                    <MaterialIcons name="format-list-bulleted" size={32} color="#3182CE" />
                </View>
                <Text style={style.cardTitle}>Minhas Tarefas</Text>
            </TouchableOpacity>

            {/* Botão 2: Nova Tarefa */}
            <TouchableOpacity 
                style={style.card} 
                onPress={() => navigation.navigate('NovaTarefa')}
            >
                <View style={[style.iconContainer, { backgroundColor: '#E6FFFA' }]}>
                    <MaterialIcons name="add-task" size={32} color="#38B2AC" />
                </View>
                <Text style={style.cardTitle}>Nova Tarefa</Text>
            </TouchableOpacity>

            {/* Botão 3: Modo Foco (Cronómetro) */}
            <TouchableOpacity 
                style={style.card} 
                onPress={() => navigation.navigate('Foco')}
            >
                <View style={[style.iconContainer, { backgroundColor: '#FFF5F5' }]}>
                    <MaterialIcons name="timer" size={32} color="#E53E3E" />
                </View>
                <Text style={style.cardTitle}>Modo Foco</Text>
            </TouchableOpacity>

            {/* Botão 4: Perfil */}
            <TouchableOpacity 
                style={style.card} 
                onPress={() => navigation.navigate('Perfil')}
            >
                <View style={[style.iconContainer, { backgroundColor: '#FAF5FF' }]}>
                    <MaterialIcons name="person-search" size={32} color="#805AD5" />
                </View>
                <Text style={style.cardTitle}>Buscar Perfil</Text>
            </TouchableOpacity>
        </View>
   
);}