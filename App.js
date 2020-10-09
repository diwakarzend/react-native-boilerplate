import React, {useState} from 'react';
import { StyleSheet, Text, View, Button , TextInput } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  const[UserName, SetUName]= useState ('#U1');
  const[Name, SetName]= useState ('Swapnil')
  const[Age, SetAge]= useState('21')
  const[Address, SetAddress]= useState('Gorakhpur')
  const[Saved, SavedData]= useState ('' )
const clickHandler = () => {
  SetName('name data is saved !');
  SetName('saved!');
  SetAddress('saved!');
  SavedData('You have Registered!!!')
  
}

return(
  <View style={styles.container}>
    <Text style= {styles.Header}>username of the students, {UserName} is requested to fill data to edit </Text>
    <Text> enter username:</Text>
    <Text>{SavedData}</Text>
    <TextInput 
              style= {styles.input}
              placeholder= 'e.g. johndoe36'
              onChangeText={(val) => SetUName(val)}/>

     <Text> enter your name:</Text>
    <TextInput multiline 
              style = {styles.input}
              placeholder= 'e.g. johndoe#36'
              onChangeText={(val) => SetName(val)} />

    <Text> enter age:</Text>
    <TextInput keyboardType='numeric'
              style={styles.input}
              placeholder= 'e.g. 19'
              onChangeText={ (val) => SetAge(val)}
              />
  <Text> enter address:</Text>
    <TextInput multiline 
              style ={styles.input}
              placeholder= 'e.g. delhi'
              onChangeText={ (val) => SetAddress(val)} 
              />
     <Text> Username: {UserName} , name: {Name} , age : {Age} , address: {Address} </Text>
     <Button title='Submit'  onPress= {clickHandler} />
  </View>   
);
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  Header: {
    margin: -20,
    padding: 30,
    backgroundColor: 'yellow',
    width: 300,
   },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
   },
});
