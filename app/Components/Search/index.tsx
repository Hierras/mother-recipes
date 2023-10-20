import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

import { useDispatch } from "react-redux";
import { setSearchState } from '../../user/search';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

import { styles } from './styles';
import { colors } from '../../../assets/colors';




export default function SearchInput() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={(text)=>setValue(text)} placeholder='type keywords...' maxLength={30} style={styles.input}/>
            <Pressable onPress={()=>dispatch(setSearchState(value))} style={styles.searchButton}><FontAwesomeIcon color={colors.mrPurple} icon={faSearch}/></Pressable>
        </View>
    )
}   