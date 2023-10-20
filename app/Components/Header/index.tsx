import React, {useState} from "react";
import { Text, View, Pressable} from 'react-native';
import { Link } from "expo-router";

import { useDispatch } from "react-redux";
import { profileChangeVisabilty } from "../../user/modal";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";

import Categories from '../PopUps/Categories';
import Profile from "../PopUps/Profile";

import { styles } from './styles';




export default function Header() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View>
                <Link href='/Home'>
                    <Text style={styles.title}>Mother's recipes</Text>
                </Link>
            </View>    
            <Pressable onPress={()=>dispatch(profileChangeVisabilty())}>
                <FontAwesomeIcon 
                    style={styles.icon}
                    icon={faUserCircle}
                    size={24}
                />
            </Pressable>
            <Profile/>
            <Categories/>  
        </View>
    );
}