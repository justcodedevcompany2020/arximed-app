import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Swipable({ leftSwipe, Item, setIsOpened }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={leftSwipe} overshootLeft={false} onSwipeableOpen={()=> setIsOpened(true)} onSwipeableClose={()=>setIsOpened(false) }>
                <Item />
            </Swipeable>
        </GestureHandlerRootView>
    );
}
