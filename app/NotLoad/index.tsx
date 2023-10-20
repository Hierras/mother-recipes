import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default function NotLoad() {
    return (
        <View style={styles.container}>
            <Text style={styles.smile}>🥺</Text>
            <Text style={styles.text}>Nothing was found!</Text>
            <Text style={styles.text}>Try to check internet-connection or reload app 💜</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        alignSelf: 'center'
    },
    text: {
        fontFamily: 'Armata',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center'
    },
    smile: {
        fontSize: 32,
        textAlign: 'center'
    }   
});