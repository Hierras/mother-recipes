import { useState, useEffect, useRef } from "react";
import { View, ScrollView, Text } from "react-native";

import { useSelector } from "react-redux";

import DishTumbnail  from "../../DishTumbnail/";
import DishLoader from "../../DishTumbnail/DishLoader";
import NotLoad from "../../../NotLoad";
import DishCarousel from "../DishCarousel";

import { styles } from "./styles";

import { APIPARAMS, APIHOST } from "../../../../assets/constants";


export default function DishList() {
    // Дописать пустую страницу
    const q = useSelector((state:any)=>state.searchSlice.q);
    const queryLine = useSelector((state:any) => state.searchSlice.queryLine);
    const reload = useSelector((state:any)=>state.searchSlice.reload);

    const savedDishes = useSelector((state:any)=>state.loginSlice.dishes);


    const [isLoading, setLoading] = useState<boolean>(true);
    const [recipes, setRecipes] = useState<React.JSX.Element | null | []>([]);
    const buttonType = useRef<[string, number]>(['Save', 2]);

    

    let skeletonslist:any[] = [];
    for (let i:number = 0; i < 6; i++) {
        skeletonslist = [...skeletonslist, <DishLoader key={i}/>];
    }

    useEffect(()=>{
        const reqText = `${APIHOST}?type=public&q=${q}${APIPARAMS}${queryLine}&imageSize=REGULAR&field=uri&field=label&field=image&field=source&field=ingredients&field=calories&field=totalWeight&field=totalTime&field=mealType&field=dishType&field=tags`;
        fetch(reqText)
            .then(
                resp => {
                    if (resp.ok && resp.status === 200)
                        return resp.json();
                    else throw "Response isn't ok or status isn't 200";
                }
            )
            .then(arr=>{
                if (!arr.count) {
                    setRecipes(<NotLoad/>);
                }
                else {
                    setRecipes(arr.hits.map((el:any, index:number) => {
                        let i = 0;
                        for (i = 0; i < savedDishes.length; i++)
                            if (savedDishes[i].label === el.recipe.label) break;

                        if (i === savedDishes.length) buttonType.current = ['Save', 2];
                        else buttonType.current = ['Saved', 1];
                        const dish = <DishTumbnail
                                        label={el.recipe.label}
                                        image={el.recipe.image}
                                        href={el._links.self.href}
                                        calories={Math.round(el.recipe.calories)}
                                        ingredients={el.recipe.ingredients.length}
                                        buttonType={buttonType.current}
                        />
                        return <View key={index}>{dish}</View>
                    }));
                    
                }
                setLoading(false);
                
            })
            .catch(err=>{
                setRecipes(<NotLoad/>);
                setLoading(false);
                console.error(err + " error of fetch");
            })

     }, [q, queryLine, reload])
    
    return (
        <ScrollView>
            <DishCarousel/>
            <View style={styles.allDishesContainer}><Text style={styles.allDishesText}>All Dishes</Text></View>
            <View style={styles.tableContainer}>
                {isLoading ? skeletonslist : recipes}
            </View>
            
        </ScrollView>
    )

}