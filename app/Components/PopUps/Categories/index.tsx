import React from "react";
import { Modal, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Checkbox from 'expo-checkbox';

import { useDispatch, useSelector } from "react-redux";
import { formRequestString, toggleCat, clearCat } from "../../../user/search";
import { categoriesChangeVisabilty } from "../../../user/modal";

import MothersButton from "../../Buttons";

import { styles } from './styles';
import { colors } from "../../../../assets/colors";




export default function Categories() {
    const visabilty = useSelector((state:any) => state.modalSlice.categories);
    
    const dispatch = useDispatch();
    const categories = useSelector((state: any) => state.searchSlice.searchParams);

    function doneButtonHandler() {
        dispatch(formRequestString());
        dispatch(categoriesChangeVisabilty());
    }
    function clearButtonHandler() {
        dispatch(clearCat());
    }

    let content = [];
    let i_index = 0;
    for (let i in categories) {
        let section = [];
        let title;
        switch (i) {
            case 'diet':
                title = 'Diet';
                break;
            case 'cuisineType':
                title = 'Cuisine type';
                break;
            case 'mealType':
                title = 'Meal type';
                break;
            case 'dishType':
                title = 'Dish type';
                break;
        }
        let j_index = 0;
        for (let j in categories[i]) {
            section.push(
                <View key={j_index} style={styles.lineContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={categories[i][j][2]}
                        onValueChange={
                            ()=>dispatch(toggleCat([i,j]))
                        }
                        color={categories[i][j][1] ?  colors.mrRed : undefined}
                    />
                    <Text style={styles.text}>{categories[i][j][1]}</Text>
                </View>
            );
            j_index++;
        }
        content.push(
            <View key={i_index} style={styles.sectionContainer}>
                <View><Text style={styles.title}>{title}</Text></View>
                <View style={styles.listContainer}>{section}</View>
            </View>
        );
        i_index++;
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visabilty}
            onRequestClose={()=>dispatch(categoriesChangeVisabilty())}
        >
            <ScrollView style={styles.container}>
                <View style={styles.buttonLine}>
                    <View style={styles.checkboxControlls}>
                        <View>
                            <MothersButton
                                text='Done'
                                handle={doneButtonHandler} 
                            />
                        </View>
                        <View style={styles.clearButton}>
                            <MothersButton 
                                handle={clearButtonHandler}
                                text="Clear"
                            />
                        </View>
                    </View>
                    <View style={styles.closeButton}>
                        <MothersButton 
                            text="Close"
                            handle={()=>dispatch(categoriesChangeVisabilty())}
                        />
                    </View>
                </View>
                {content}
            </ScrollView>  
        </Modal>
    );
}