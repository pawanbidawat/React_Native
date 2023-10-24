import React from 'react';
import { View, Text, FlatList } from 'react-native';
import UserData from './components/UserData';

const App = () => {

  const users = [
    {
      name: "sam",
      id: 1
    },
    {
      name: "sam",
      id: 2
    },
    {
      name: "sam",
      id: 3
    },
    {
      name: "sam",
      id: 4
    },
  ]
  return (
    <View>
      <Text style={{ marginTop: 60 }}>Hello,Worls! hh</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData /*can pass item = {item} */data={item }
        /> } />
    </View>

  );
}


export default App;





