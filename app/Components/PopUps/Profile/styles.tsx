import { StyleSheet } from "react-native"
import { colors } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        backgroundColor: colors.mrPUBG,
        borderColor: colors.mrPUS,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 4,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: 165,
        marginRight: 25
    },
    // form styles
    input: {
        backgroundColor: colors.mrBG,
        borderColor: colors.mrPurple,
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'RC',
        fontSize: 14,
        color: colors.mrPurple,
        marginTop: 10,
    },
    formtext: {
        fontFamily: 'RC',
        fontSize: 14,
        color: colors.mrBText,
    },
    buttonLine: {
        marginTop: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    // profile form
    mainText: {
        fontFamily: 'RC',
        fontSize: 14,
        color: colors.mrBText,
    },
    nickname: {
        color: colors.mrRed
    },
    pressibleText: {
        marginTop: 10,
        fontFamily: 'RC',
        fontSize: 14,
        color: colors.mrBText,
        textDecorationLine: 'underline'
    }
})
