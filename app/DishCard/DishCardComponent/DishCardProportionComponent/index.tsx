import { View, StyleSheet, Pressable, Alert} from "react-native";
import { colors } from "../../../../assets/colors";


interface DishCardProportionComponentInterface {
    mass: number,
    fat: number,
    carbs: number,
    protein: number
}
export default function DishCardProportionComponent(props: {proportion:DishCardProportionComponentInterface}) {
    /// Подсказка при нажатии
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row'
        },
        fat: {
            backgroundColor: colors.mrRed,
            height: 15,
            width: 120/props.proportion.fat,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderWidth: 1,
            borderColor: colors.mrRed,
        },
        carbs: {
            backgroundColor: colors.mrPurple,
            height: 15,
            width: 120/props.proportion.carbs,
            marginLeft: 2,
        },
        protein: {
            marginLeft: 2,
            backgroundColor: colors.mrGreen,
            height: 15,
            width: 120/props.proportion.protein,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderWidth: 1,
            borderColor: colors.mrGreen,
        }
    });
    const proportionTotalStrings = [
        `Fat: ${props.proportion.fat}`,
        `Carbs: ${props.proportion.carbs}`,
        `Protein: ${props.proportion.protein}`,
]
    return (
        <View style={styles.container}>
            <Pressable onPress={()=>Alert.alert('Info', proportionTotalStrings[0])} style={styles.fat}></Pressable>
            <Pressable onPress={()=>Alert.alert('Info', proportionTotalStrings[1])} style={styles.carbs}></Pressable>
            <Pressable onPress={()=>Alert.alert('Info', proportionTotalStrings[2])} style={styles.protein}></Pressable>
        </View>
    )
}