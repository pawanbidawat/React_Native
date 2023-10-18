import React from 'react';
import {FlatList, Text , View} from 'react-native';

const List = () => {
    const user = [
        { 
            name:'sam',
         id:23},
         { 
            name:'peter',
         id:2},

    ];
 return(
        <View>
            <Text>Hello World</Text>
            <FlatList
            data={user}
            renderItem={({item})=><Text>{item.name}</Text> } />

        </View>
    
 );
}
export default List;