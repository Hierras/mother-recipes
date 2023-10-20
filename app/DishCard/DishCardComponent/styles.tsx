import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 70
    },
    image: {
        width: 320,
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    titleBlock: {
        width: "80%",
        alignSelf: 'center',
        flexWrap: 'wrap',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    titleText: {
        color: colors.mrPurple,
        fontFamily: 'Armata',
        fontSize: 20,
    },
    healthLabels: {
        fontFamily: 'RC',
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center',
        width: '80%',
        color: colors.mrBText,
    },
    healthLabelsWord: {
        textDecorationLine: 'underline'
    },
    fullRecipeContainer: {
        marginTop: 10,
        alignSelf: 'center',
    },
    fullRecipe: {
        color: colors.mrPurple,
        fontSize: 14,
        fontFamily: 'Armata',
        textAlign: 'center',        
        textDecorationLine: 'underline',
    },
    ingredientsContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    ingredientsTitle: {
        color: colors.mrGreen,
        fontFamily: 'RC',
        fontSize: 14
    },
    decorUnderLine: {
        width: 115,
        borderBottomWidth: 1,
        borderBottomColor: colors.mrLText,
        marginTop: 5,
    },
    proportion: {
        marginTop: 10,
        marginBottom: 20,
    },
    ingredients: {
        marginTop: 10,
        fontSize: 14,
        color: colors.mrBText,
    },
    tableData: {
        padding: 5
    },
    tableText: {
        fontSize: 14,
        fontFamily: 'RC',
        color: colors.mrBText,
    },
    button: {
        alignSelf: 'center',
        marginTop: 20
    }
});