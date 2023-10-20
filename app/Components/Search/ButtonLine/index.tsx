import React from "react";
import { View } from 'react-native';

import { useDispatch } from "react-redux";
import { categoriesChangeVisabilty } from "../../../user/modal";

import MothersButton from "../../Buttons";


export default function Filter() {
    const dispatch = useDispatch();
    return (
        <View style={{flexDirection: 'row'}}>
            <View>
                <MothersButton 
                    text="Categories ▼"
                    handle={()=>dispatch(categoriesChangeVisabilty())}
                />
            </View>
            <View style={{marginLeft: 20}}><MothersButton text="Saved"/></View>       
        </View>
        
    );
}