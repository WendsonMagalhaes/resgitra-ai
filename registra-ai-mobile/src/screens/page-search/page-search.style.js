import { COLOR, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLOR.background_color,
        flex: 1,
        justifyContent: "space-between"
    },
    containerHeader: {
        alignItems: "center",
        backgroundColor: COLOR.primary_color
    },
    containerMain: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // para Android
        width: '95%',
        marginHorizontal: 'auto', // Usar margem horizontal
        marginTop: 10, // Use um número em vez de '10rem'
        padding: 20,
        marginBottom: 10
    },
    input: {
        backgroundColor: COLOR.white,
        padding: 5,
        borderRadius: 6,
        width: 150, // Alterado para 100% para ocupar a largura total
        fontSize: FONT_SIZE.md,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: COLOR.primary_color,
        color: COLOR.primary_color
    },
    containerInput: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between", // Adicione esta linha
        width: '100%', // Certifique-se de que a largura esteja definida
        gap: 60,
        marginBottom: 20

    },
    containerButton: {
        marginLeft: 10, // Adicione algum espaço entre o input e o botão
        width: 150
    },
    containerOutput: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between", // Adicione esta linha
        width: '100%', // Certifique-se de que a largura esteja definida
        gap: 20,
        marginBottom: 5
    },
    containerFooter: {
        width: "100%",
        height: 80,
        alignItems: "center",
        backgroundColor: COLOR.primary_color,
        marginTop: 5
    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginTop: 30,
        padding: 10,
        marginBottom: 5

    },


    text: {
        color: COLOR.primary_color,
        fontSize: FONT_SIZE.sm,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: -5
    }

}