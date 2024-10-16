import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageSearch from "../page-search/page-search.jsx";
import Login from "../login/login.jsx";
import logo from "../../assets/logo-white.png";
import { Image, Text, View } from 'react-native';
import { styles } from "./main.js";

import { COLOR, FONT_SIZE } from "../../constants/theme.js";





const Tab = createBottomTabNavigator();




function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLOR.primary_color, // Cor de fundo da barra inferior
                },
                tabBarActiveTintColor: COLOR.secundare_color, // Cor do ícone/texto ativo
                tabBarInactiveTintColor: '#fff', // Cor do ícone/texto inativo
            }}>
                <Tab.Screen name="Home" component={PageSearch} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <View style={styles.containerHeader}>
                            <Image source={logo} style={styles.logo} />
                        </View>
                    }
                }} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Home-01" component={PageSearch} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Main;