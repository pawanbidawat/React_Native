import React,{useState} from 'react'
import {View,Button,TextInput,Text,StyleSheet} from 'react-native';

export default function App ()
{
  const[name,setName] = useState("");
  const[email, setEmail] = useState("");
  const[password,setPass] = useState("");

  const[print , setprint] = useState(false);



  return(
    <View>
      <Text style={{fontSize:30 , color:'yellow'}}>Simple Form</Text>
      <TextInput placeholder='Enter Your Name' value={name} onChangeText={(text)=>setName(text)} style={styles.textBox}/>

      <TextInput placeholder='Enter Your Email' value={email} onChangeText={(text)=>setEmail(text) }  style={styles.textBox} />

      <TextInput secureTextEntry placeholder='Enter Your Password' value={password} onChangeText={(text)=>setPass(text)}  style={styles.textBox}/>
     
      <View  style={{marginBottom:20}}>
        <Button title='Get Detail' color='green' onPress={()=>setprint(true)} />
      </View>
      
        <Button title='Clear Detail' onPress={
          ()=>{setName('') ; setEmail('') ; setPass('') ;setprint(false)}
        } />
       
       
<View>
  { 
  print?
  <View>
   <Text style={{fontSize:20}}>{name}</Text>
   <Text style={{fontSize:20}}>{email}</Text>
   <Text style={{fontSize:20}}>{password}</Text>
    </View> :null
  }
</View>
   
   
    </View> 
  
  ); 
}

const styles = StyleSheet.create(
  {
    textBox:{
      backgroundColor:'grey',
      marginBottom:10,
      color:'white',
      borderRadius:20,
    }
  }
)
