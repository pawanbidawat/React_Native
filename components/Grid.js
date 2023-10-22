import React from 'react';
import {View, Text, StyleSheet ,FlatList, ScrollView} from 'react-native';

const Grid = () => {

  const users = [
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1},
    {name : "sam",
    id:1}
  ];
  return(
    <View>
      <Text style={{fontSize:30,textAlign:'center' , marginTop:60}}>Grid With map function and flex property</Text>
   
    <View style={{marginBottom:100, flex:1, flexDirection:'row',flexWrap:'wrap'}}>
    {
        users.map((detail,i)=><Text style={[styles.item,styles.data]} key={i}>{detail.name}</Text>)
      }
      
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create(
  { item : {
    backgroundColor:'black',
    padding:10,
    color:'white',
    marginBottom:10,
    width:98,
    height:80
  },
  data:{
    borderRadius:20,
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:20
  }
}
)

export default Grid;
