import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment'
import Timer   from './components/Timer'
import  RoundButton   from './components/RoundButton'
import  ButtonsRow   from './components/ButtonsRow'

export default function App(){
  return(
    <View style={styles.container}>
       <Timer/> 
       <ButtonsRow>  
        <RoundButton title='Reset' color='white' background='black'/>  
        <RoundButton title='Start' color='white' background='blue'/>
       </ButtonsRow>
    </View>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 130,
    paddingHorizontal:20,
  }
})