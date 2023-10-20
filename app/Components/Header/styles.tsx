import { StyleSheet } from "react-native"
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            verticalAlign: 'middle',
            textAlignVertical: 'center',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        title: {
            fontSize: 28,
            fontFamily: 'LSO',
            color: colors.mrGreen,

        },
        icon: {
            color: colors.mrPurple
        },
    }
);