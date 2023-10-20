import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    tableContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        rowGap: 10,
        paddingBottom: 100,
        marginTop: 10,
    },
    allDishesText: {
        fontFamily: 'Armata',
        fontSize: 18,
        color: colors.mrRed,
    },
    allDishesContainer: {
        width: '80%',
        alignSelf: 'center',
        
    }
});