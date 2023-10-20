import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";


export const styles = StyleSheet.create({
    container: {
        width: 150,
        backgroundColor: 'white',
        paddingBottom: 12,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        borderRadius: 5,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'white'
    },
    containerOnPress: {
        borderColor: colors.mrGreen
    },
    image: {
        width: 140,
        height: 130,
        alignSelf: 'center',
        resizeMode: 'stretch',
        marginBottom: 5
    },
    dishName: {
        fontFamily: 'Armata',
        fontSize: 16,
        color: colors.mrBText,
        marginBottom: 5
    },
    descrText: {
       fontFamily: 'RC',
       fontSize: 14,
       color: colors.mrLText,
       marginBottom: 2,
    },
    descrSpan: {
        color: colors.mrGreen,
    },
    description: {
        fontFamily: 'RC',
        fontSize: 14,
        marginBottom: 10
    },
    buttonLine: {
        width: '100%',
        marginBottom: 10
    }
});