import { COLOR, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLOR.white,
        flex: 1,
        justifyContent: "space-between"
    },
    containerHeader: {
        alignItems: "center",
        marginTop: 30,
        padding: 20
    },
    containerMain: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // para Android
        width: '90%',
        maxWidth: 400,
        textAlign: 'center',
        margin: 'auto',
        marginTop: '10rem',
        padding: 20
    },
    containerFooter: {
        width: "100%",
        height: 80,
        alignItems: "center",
        backgroundColor: COLOR.primary_color,
    },
    logo: {
        width: 350,
        height: 80,
        resizeMode: 'contain' // Mantém a proporção da imagem

    },

    input: {
        backgroundColor: COLOR.white,
        padding: 15,
        borderRadius: 6,
        width: 300,
        fontSize: FONT_SIZE.md,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: 'solid', // Define o estilo da borda
        borderColor: COLOR.primary_color, // Define a cor da borda
        color: COLOR.primary_color // Define a cor da borda

    },
    text: {
        marginBottom: 30,
        color: COLOR.primary_color,
        fontSize: FONT_SIZE.lg,
        textAlign: "center",
        fontFamily: 'Poppins_600SemiBold'
    },
    containerInput: {
        marginBottom: 15
    },
    containerButton: {
        marginTop: 40,
        width: "100%",
        alignItems: "center",
    }

}