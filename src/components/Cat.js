import React from 'react';
import {SafeareaView,View, Text} from 'react-native';

const Cat = (props) =>{
    return(
        <View>
            <Text>Hello I am {props.name}</Text>
        </View>
    )
}

export default Cat;