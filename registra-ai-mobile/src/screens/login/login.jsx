import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'; // Importando a fonte



function Login() {
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
        <View style={styles.containerMain}>
            <View >
                <Text style={styles.text}>Faça o Login</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Usuário" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true} />
            </View>
            <View style={styles.containerButton}>
                <Button text="Login" />

            </View>
        </View>
        <View style={styles.containerFooter}>

        </View>



    </View>
}

export default Login;