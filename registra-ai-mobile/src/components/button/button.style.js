import { COLOR, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    btn: {
        width: "60%",
        backgroundColor: COLOR.primary_color,
        borderRadius: 6,
        padding: 12
    },

    text: {
        color: "#fff",
        fontSize: FONT_SIZE.md,
        textAlign: "center",
        fontFamily: 'Poppins_400Regular',

    },
    '@media (hover: hover)': { // Pseudo-classe para hover
        btn: {
            ':hover': {
                backgroundColor: COLOR.secundare_color, // Cor alterada no hover
            }
        }
    }

}