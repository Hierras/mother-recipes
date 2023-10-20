import { Text, View, Image, Pressable, LogBox } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Table, Rows } from 'react-native-table-component';
import { useDispatch } from "react-redux";
import { addDish, deleteDish } from "../../user/registry";

import MothersButton from "../../Components/Buttons";
import DishCardProportionComponent from "./DishCardProportionComponent";

import { styles } from "./styles";

export default function DishCardComponent(props: {content: any, btype: number, href: string}) {
    LogBox.ignoreLogs(['Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object']);

    const [buttonType, setButtonType] = useState(props.btype);

    const dispatch = useDispatch();
    function saveButtonHandler() {
        if (buttonType === 2) {
            setButtonType(1);
            dispatch(addDish({
                label: props.content.label,
                image: props.content.image,
                href: props.href,
                calories: Math.round(props.content.calories),
                ingredients: props.content.ingredientLines.length
            }));
        }
        else if (buttonType === 1) {
            setButtonType(2);
            dispatch(deleteDish(props.href));
        }
        
    }

    const healthLabels = props.content.healthLabels.map(
        (el:string, index:number)=>{
            let line: React.JSX.Element;
            if (index === props.content.healthLabels.length-1)
                line = <Text style={styles.healthLabelsWord}>
                    {el}
                </Text>;
            else 
                line = <Text>
                            <Text style={styles.healthLabelsWord}>{el}</Text>
                            {', '}
                        </Text>;
            
            return <Pressable key={index}>{line}</Pressable>
        }
    );

    const ingredientLines = props.content.ingredientLines.map(
        (el:string, index:number) => <Text
                                        style={styles.ingredients}
                                        key={index}
                                    >
                                            {el}
                                    </Text>
    );

    const totalNutrients = [];
    const nutritionProportion = {
        fat: 1,
        carbs: 1,
        protein: 1,
        mass: 1
    };
    let totalMass = 0;
    for (let key in props.content.totalNutrients) {
        const label = props.content.totalNutrients[key].label;
        const quantity = props.content.totalNutrients[key].quantity;
        if (label === 'Fat' || label === 'Protein' || label === 'Carbs') {
            totalMass += quantity;
            switch (label) {
                case 'Fat':
                    nutritionProportion.fat = quantity;
                    break;
                case 'Protein':
                    nutritionProportion.protein = quantity;
                    break;
                case 'Carbs':
                    nutritionProportion.carbs = quantity;
                    break;
            }
        }
        totalNutrients.push([
            props.content.totalNutrients[key].label,
            Math.round(props.content.totalNutrients[key].quantity),
            props.content.totalNutrients[key].unit
        ]);
    }
    nutritionProportion.fat = totalMass/nutritionProportion.fat;
    nutritionProportion.carbs = totalMass/nutritionProportion.carbs;
    nutritionProportion.protein = totalMass/nutritionProportion.protein;
    nutritionProportion.mass = totalMass;

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    alt={props.content.label}
                    source={{uri: props.content.image}}
                />
            </View>
            <View style={styles.titleBlock}>
                <View><Text style={styles.titleText}>{props.content.label}</Text></View>
                <View>
                    {
                        (buttonType === 1) ? 
                            <MothersButton handle={saveButtonHandler} text="Saved" type={1}/>
                            :
                            <MothersButton handle={saveButtonHandler} text="Save" type={2}/>
                    }   
                </View>
            </View>
            <View><Text style={styles.healthLabels}>{healthLabels}</Text></View>
            <View style={styles.fullRecipeContainer}>
                <Link href={props.content.url}>
                    <Text style={styles.fullRecipe}>Full Recipe on {props.content.source}</Text>
                </Link>
            </View>
            <View style={styles.ingredientsContainer}>
                <View>
                    <Text style={styles.ingredientsTitle}>
                        {props.content.ingredientLines.length} ingredients
                    </Text>
                </View>
                <View style={styles.decorUnderLine}></View>
                {ingredientLines}
            </View>
            <View style={styles.ingredientsContainer}>
                <View><Text style={styles.ingredientsTitle}>Nutrition</Text></View>
                <View style={styles.decorUnderLine}></View>
                <View style={styles.proportion}><DishCardProportionComponent proportion={nutritionProportion}/></View>
                <Table>
                    <Rows
                        style={styles.tableData}
                        textStyle={styles.tableText}
                        data={totalNutrients}
                        flexArr={[3, 1, 1]}
                    />
                </Table>
            </View>
        </ScrollView>
    )
}   