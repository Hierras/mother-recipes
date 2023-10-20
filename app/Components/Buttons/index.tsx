import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from '../../../assets/colors';
import { GestureResponderEvent } from 'react-native';

enum buttonTypes {
    defBtn,
    slctBtn,
    saveBtn,
}

interface buttonSettings {
    type?: buttonTypes | undefined,
    text: string,
    handle?: ()=>Function| null | undefined,
}

export default function MothersButton(props: buttonSettings) {
    let btnType, btnTextColor;
    switch (props.type){
        case buttonTypes.defBtn:
            btnType = styles.defaultButton;
            btnTextColor = 'white';
            break;
        case buttonTypes.slctBtn:
            btnType = styles.selectedButton;
            btnTextColor = colors.mrPurple;
            break;   
        case buttonTypes.saveBtn:
            btnType = styles.saveButton;
            btnTextColor = 'white';
            break;
        default:
            btnType = styles.defaultButton;
            btnTextColor = 'white';
            break;
    }
    return (
        <>
            <Pressable 
            style={ [styles.buttonStyles, btnType] }
            onPress={props.handle}
            >
                <Text style={ [styles.text, {color: btnTextColor}] }>{props.text}</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    buttonStyles: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 3,
        paddingTop: 3,
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'RC'
    },
    saveButton: {
        backgroundColor: colors.mrPurple,
        borderColor: colors.mrPurple,
        width: 80,
        alignSelf: 'center'
    },
    selectedButton: {
        backgroundColor: 'transparent',
        borderColor: colors.mrPurple,  
        width: 80,
        alignSelf: 'center'
    },
    defaultButton: {
        backgroundColor: colors.mrRed,
        borderColor: colors.mrRed,
    }
    
});