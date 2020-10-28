import React from 'react';
import {SafeareaView,View, Text} from 'react-native';
import Cat from './components/Cat'; 

const Cafe = () => {
    return (
        <View>
            <Cat 
            name='sa'
            />
            <Cat name='ma'/>
            <Cat name='na'/>
        </View>

    )
}


export default Cafe;
