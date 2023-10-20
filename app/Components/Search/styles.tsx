import { StyleSheet } from "react-native"
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create(
    {
        container: {
            width: '80%',
            borderWidth: 1,
            borderColor: colors.mrPurple,
            borderRadius: 5,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            padding: 5
        },
        input: {
            fontFamily: 'Armata',
            textAlign: 'left',
            width: 280,
        },
        searchButton: {
            width: 30,
            height: '100%',
            paddingLeft: 10,
            paddingTop: 5
        }
    }
);