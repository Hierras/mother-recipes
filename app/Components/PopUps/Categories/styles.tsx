import { StyleSheet } from "react-native"
import { colors } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: colors.mrPUBG,
        borderColor: colors.mrPUS,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 4,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: '100%',
    },
    buttonLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkboxControlls: {
        flexDirection: 'row',
    },
    closeButton: {

    },
    clearButton: {
        marginLeft: 20
    },
    title: {
        fontFamily: 'Armata',
        fontSize: 18,
        color: colors.mrBText
    },
    sectionContainer: {
        marginTop: 15

    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    lineContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10
    },
    checkbox: {

    },
    text: {
        marginLeft: 5,
        color: colors.mrLText,
        fontFamily: 'RC',
        fontSize: 16
    }
})
