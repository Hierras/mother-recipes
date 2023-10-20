import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import NotLoad from "../NotLoad";
import DishCardLoader from "./DishCardLoader";
import DishCardComponent from "./DishCardComponent";

import { styles } from "./styles";

import { APIPARAMS } from "../../assets/constants";


export default function DishCard() {
    /* Рисуем скелетон, если контент не загружается 5 секунд или выдаёт ошибку - пишем: не найдено */
    const [content, setContent] = useState<React.JSX.Element | null>(null);
    
    const [isLoading, setLoading] = useState(true);
    const { href, btn } = useLocalSearchParams();

    useEffect(()=>{
        const queryText = `${href}?type=public${APIPARAMS}`;
        fetch(queryText)
            .then(resp => {
                if (resp.ok && resp.status === 200)
                    return resp.json();
                else throw "Response isn't ok or status isn't 200";
            })
            .then(
                dishInfo => {
                    setContent(<DishCardComponent content={dishInfo.recipe} btype={Number(btn)} href={href}/>);
                    setLoading(false);
                }
            )
            .catch(e => {
                setContent(<NotLoad/>);
                setLoading(false);
                console.error(e + " error of fetch");
            })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <DishCardLoader/> : content} 
        </SafeAreaView>
    )
}