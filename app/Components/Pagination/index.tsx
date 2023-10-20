import { useEffect, useState } from "react"
import { View, Text } from "react-native"

import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

interface PaginationInterface {
    count: number,
    index: number
}

export function Pagination(props: PaginationInterface) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        pagElem: {
            width: 20,
            height: 8,
            backgroundColor: colors.mrLGreen,
            borderRadius: 2,
            borderColor: colors.mrLGreen,
            borderWidth: 1,
            marginLeft: 10
        },
        firstPagElem: {marginLeft: 0},
        pagSelected: {
            backgroundColor: colors.mrGreen,
            borderColor: colors.mrGreen,
        },
    
    });

    return (
        <View style={styles.container}>
            {
                [...Array(props.count)].map((_, i) => i).map(
                    (index)=>{
                        let styleArray = [];

                        if (index === 0) styleArray = [styles.pagElem, styles.firstPagElem];
                        else styleArray = [styles.pagElem];

                        return (index === props.index) ? 
                            <View style={[...styleArray, styles.pagSelected]} key={index}></View> 
                            : 
                            <View style={styleArray} key={index}></View>
                })
            }
        </View>
    )
}