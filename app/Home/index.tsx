import React from "react";
import { Text, View } from 'react-native';
import { Link } from "expo-router";

import DishList  from "../Components/DishLists/DishTable";
import SearchInput from "../Components/Search";
import Filter from "../Components/Search/ButtonLine";   

import { styles } from "./styles";


export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.search}><SearchInput/></View>
                <View style={styles.filter}><Filter/></View>
                <DishList/>
            </View>
        </>
    );
}