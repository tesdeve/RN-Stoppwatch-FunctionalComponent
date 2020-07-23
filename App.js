import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import moment from 'moment'
import Timer   from './components/Timer'
import  RoundButton   from './components/RoundButton'
import  ButtonsRow   from './components/ButtonsRow'
import  Lab from './components/Lab'
import  LabsTable  from './components/LabsTable'


export default function App(){

  //const DATA= {
  //  timer:1234567,
  //  laps: [12345, 123456, 12345677654, 9876543]
  //}
//

  return(
    <View style={styles.container}>
       <Timer/> 
       <ButtonsRow>  
        <RoundButton title='Reset' color='white' background='black'/>  
        <RoundButton title='Start' color='white' background='blue'/>
       </ButtonsRow>
       {/* <LabsTable /> */}
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