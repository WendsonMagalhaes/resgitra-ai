import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo-white.png";
import { styles } from "./page-search.style.js";
import Button from "../../components/button/button.jsx";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'; // Importando a fonte



function PageSearch() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular, // Regular
        Poppins_700Bold,    // Bold
        Poppins_600SemiBold,


    });

    if (!fontsLoaded) {
        return null; // Ou um componente de carregamento
    }
    return <View style={styles.container}>

        <View style={styles.containerHeader}>
            <Image source={logo} style={styles.logo} />
        </View>
        <ScrollView style={styles.containerMain}>

            <View style={styles.containerInput}>
                <TextInput placeholder="Contrato/CPF" style={styles.input} />
                <View style={styles.containerButton}>
                    <Button text="Buscar" />

                </View>
            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Contrato</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
                <View>
                    <Text style={styles.text}>Data de Ativação</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput placeholder="Contrato/CPF" style={[styles.input, { width: 333 }]} /></View>

            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Endereço</Text>
                    <TextInput placeholder="Contrato/CPF" style={[styles.input, { width: 333 }]} /></View>

            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Bairro</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
                <View>
                    <Text style={styles.text}>Telefone</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Form.Pagamento</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
                <View>
                    <Text style={styles.text}>Venc.Antigo</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
            </View>
            <View style={styles.containerOutput}>
                <View>
                    <Text style={styles.text}>Quant.Parcelas</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
                <View>
                    <Text style={styles.text}>Débito</Text>
                    <TextInput placeholder="Contrato/CPF" style={styles.input} /></View>
            </View>





        </ScrollView>
        <View style={styles.containerFooter}>

        </View>



    </View>
}

export default PageSearch;