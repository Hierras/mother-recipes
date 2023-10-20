import React, { useState} from "react";
import { Modal, Pressable, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../../user/registry";
import { profileChangeVisabilty } from "../../../user/modal";

import { styles } from './styles';
import { colors } from "../../../../assets/colors";

import MothersButton from "../../Buttons";

export default function Profile() {
    const [signOrHello, changeFormType] = useState<boolean>(false);
    
    const visabilty = useSelector((state:any) => state.modalSlice.profile);
    const dispatch = useDispatch();

    return (
       <Modal
            animationType="fade"
            transparent={true}
            visible={visabilty}
            onRequestClose={()=>dispatch(profileChangeVisabilty())}
       >
        <View style={styles.container}>
            { (!signOrHello) ? <SignInForm changeFormType={changeFormType}/> : <ProfileForm changeFormType={changeFormType}/> }
        </View>  
       </Modal>
    );
}

function ProfileForm(props: {changeFormType: Function}) {
    const nickname = useSelector((state: any) => state.loginSlice.login);
    const dispatch = useDispatch();

    function logOutButtonHandle() {
        dispatch(registration(''));
        props.changeFormType(false);
    }
    return (
        <View>
            <Text style={styles.mainText}>Wanna eat,
            <Text style={styles.nickname}> {nickname}?</Text>
            </Text>
            
            <Pressable><Text style={styles.pressibleText}>About us</Text></Pressable>
            <Pressable onPress={logOutButtonHandle}><Text style={styles.pressibleText}>Logout</Text></Pressable>
            <View style={styles.buttonLine}>
                <MothersButton handle={()=>dispatch(profileChangeVisabilty())} text="Close"/>
            </View>
        </View>
    )
}

function SignInForm(props: {changeFormType: Function}) {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    function signInButtonHandle() {
        dispatch(registration(inputText));
        props.changeFormType(true);
    }

    return (
        <View>
            <Text style={styles.formtext}>What's your name?</Text>
            <TextInput 
                placeholder="Input your name" 
                style={styles.input}
                maxLength={20}
                textAlign="center"
                cursorColor={colors.mrPurple}
                onChangeText={(value)=>setInputText(value)}
            />
            <View style={styles.buttonLine}>
                <MothersButton handle={signInButtonHandle} text="Sign In"/>
                <MothersButton handle={()=>dispatch(profileChangeVisabilty())} text="Close"/> 
            </View>
        </View>
    )
}