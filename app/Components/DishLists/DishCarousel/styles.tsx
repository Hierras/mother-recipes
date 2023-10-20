import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginBottom: 20
    },
    carouselContainer: {
        borderWidth: 1,
        marginTop: 10
    },
    title: {
        fontFamily: 'Armata',
        fontSize: 18,
        color: colors.mrRed,
        marginBottom: 10
    },
    carouselPare: {
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
    pags: {
        marginTop: 10,
    }
});