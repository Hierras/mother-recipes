import { useState } from "react";
import { Text, View, TouchableHighlight, Image, Alert } from "react-native";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { addDish, deleteDish } from "../../user/registry";
import { reload } from "../../user/search";

import { styles } from "./styles";

import MothersButton from "../Buttons";



interface DishTumbnailInterface {
  label: string,
  image: string,
  href: string,
  calories: number,
  ingredients: number,
  buttonType: [string, number],
}

export default function DishTumbnail(props: DishTumbnailInterface) {
  const [stylesArray, setStylesArray] = useState<any>([styles.container]);

  const login = useSelector((state:any)=>state.loginSlice.login);
  const dispatch = useDispatch();

  function saveButtonHandler() {
    if (login === "z") {
      Alert.alert("Reg alert", "You have to reg your name to save dishes");
    }
    else {
      if (props.buttonType[1] === 2) {
        dispatch(addDish(
          {
            label: props.label,
            image: props.image,
            href: props.href,
            calories: props.calories,
            ingredients: props.ingredients,
            buttonType: props.buttonType
          }
        ));
        dispatch(reload());
      }
      else {
        dispatch(deleteDish(props.href));
        dispatch(reload());
      } 
    }
  }
  function selectDishHandle(isSelected: boolean){
    // select animation
    if (isSelected) {
      setStylesArray([...stylesArray, styles.containerOnPress]);
    }
    else
      setStylesArray([styles.container]);
  }

  return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={'white'}
        style={stylesArray}
        onLongPress={()=>{router.canGoBack; router.push(`/DishCard?btn=${props.buttonType[1]}&href=${props.href}`)}}
        onPressIn={()=>selectDishHandle(true)}
        onPressOut={()=>selectDishHandle(false)}
      >
        <View>
           <View><Image style={styles.image} alt={props.label} source={{uri:props.image}}/></View>
            <Text style={styles.dishName}>{props.label}</Text>
            <View style={styles.description}>
                <Text style={styles.descrText}>Calories: <Text style={styles.descrSpan}>{props.calories}</Text></Text>
                <Text style={styles.descrText}>Ingredients: <Text style={styles.descrSpan}>{props.ingredients}</Text></Text>
            </View>
            <View style={styles.buttonLine}>
              <MothersButton handle={saveButtonHandler} text={props.buttonType[0]} type={props.buttonType[1]}/>
            </View>
        </View>
      </TouchableHighlight>
  );
}

