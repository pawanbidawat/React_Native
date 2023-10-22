import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
export default UserData = (props) => {
    const item = props.data;
    /* const item = props.item   */
    return(
      <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}> {item.id}</Text>
          </View>
    )
  }
  const styles = StyleSheet.create(
    {
      item:{
        fontSize:20,
        color:"green",
        flex:1,
        borderWidth:2,
        textAlign:"center",
        textAlignVertical:"center",
      },
      box :{
        flexDirection:"row",
        borderWidth:2,
        borderColor:"red",
        marginBottom:10
      }
    }
  )