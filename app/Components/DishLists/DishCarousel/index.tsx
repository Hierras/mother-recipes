import { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { useSelector } from 'react-redux';

import { styles } from "./styles";
import DishTumbnail from '../../DishTumbnail';
import { Pagination } from '../../Pagination';



export default function DishCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    function pareDishes(dishes:any) {
        let pares: any[][] = [];
        const pareCount =  Math.round(dishes.length/2);
        for (let i = 0; i < pareCount; i++) {
            let pare: any = [];
            for (let j = 0; j < 2; j++) {
                if (dishes[j+i*2])
                    pare = [...pare, dishes[j+i*2]];
            }
            pares = [...pares, pare];
        }
        return pares;
    }

    function renderPare(item:any) {
        let pare:any = [];
        for (let i = 0; i < item.length; i++) {
            let temp = <View key={i}>
                <DishTumbnail
                    label={item[i].label}
                    image={item[i].image}
                    href={item[i].href}
                    calories={item[i].calories}
                    ingredients={item[i].ingredients}
                    buttonType={['Saved', 1]}
                />
            </View>
            pare = [...pare, temp];
        }
        return pare
    }

    const width = Dimensions.get('window').width;

    const savedDishes = useSelector((state: any)=>state.loginSlice.dishes);

    return (
        
        <View style={styles.container}>
            <View><Text style={styles.title}>Saved Dishes</Text></View>
            {
                (savedDishes.length) ?
                    <>
                    <Carousel
                        onSnapToItem={(index)=>setCurrentIndex(index)}
                        loop={false}
                        width={width*0.8}
                        height={300}
                        autoPlay={false}
                        data={pareDishes(savedDishes)}
                        scrollAnimationDuration={1000}
                        renderItem={({item, index}) => (
                            <View style={styles.carouselPare} key={index}>
                                {renderPare(item)}
                            </View>
                        )}
                    />
                    <View style={styles.pags}><Pagination count={Math.round(savedDishes.length/2)} index={currentIndex}/></View>
                    
                    </>
                    
                :
                    <View><Text>No saved dishes yet</Text></View>
            }
            
        </View>
    )
}
