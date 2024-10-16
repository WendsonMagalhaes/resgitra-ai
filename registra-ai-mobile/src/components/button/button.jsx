import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from "./button.style.js";
import { COLOR, FONT_SIZE } from "../../constants/theme.js";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'; // Importando a fonte




function Button(props) {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular, // Regular
        Poppins_700Bold,    // Bold
        Poppins_600SemiBold,


    });
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            onPressIn={() => setIsPressed(true)}   // Quando o botão é pressionado
            onPressOut={() => setIsPressed(false)} // Quando o botão é liberado
            style={({ pressed }) => [
                styles.btn,
                { backgroundColor: pressed ? COLOR.secundare_color : COLOR.primary_color } // Cor ao clicar
            ]}
        >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </Pressable>
    );
}

export default Button;

