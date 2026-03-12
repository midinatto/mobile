import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F0F4F8',
         alignItems: 'center', justifyContent: 'center', padding: 20 },
    title: { fontSize: 32, fontWeight: 'bold', color: '#1A365D', marginBottom: 10 },
    subtitle: { fontSize: 16, color: '#718096', textAlign: 'center', marginBottom: 40 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30, backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 12, elevation: 2 },
    label: { fontSize: 18, color: '#2D3748', fontWeight: 'bold', marginRight: 10 },
    input: { fontSize: 22, color: '#3182CE', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#CBD5E0', width: 60, textAlign: 'center' },
    clockContainer: { width: 250, height: 250, borderRadius: 125, borderWidth: 8, borderColor: '#3182CE', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', elevation: 10, marginBottom: 50 },
    clockText: { fontSize: 60, fontWeight: 'bold', color: '#1A365D' },
    buttonRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '60%' },
    button: { width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', elevation: 5 },
    buttonStart: { backgroundColor: '#3182CE' },
    buttonPause: { backgroundColor: '#E53E3E' }, // Vermelho para pausar
    buttonReset: { width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderWidth: 2, borderColor: '#3182CE', elevation: 5 }
});