import { COLOR, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    containerHeader: {
        backgroundColor: COLOR.primary_color,
        alignItems: "center", // Centraliza itens no eixo transversal (horizontal no layout padrão de coluna)
        justifyContent: "center", // Centraliza no eixo principal (vertical no layout padrão de coluna)
        width: "105vw",
        flex: 1, // Garante que o header ocupe todo o espaço disponível
        padding: 0, // Remove qualquer padding indesejado
        margin: 0, // Remove qualquer margem
        marginLeft: -18

    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',



    },
}