import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment'

function Timer() {
  const DATA= {
    timer:1234567,
    laps: [12345, 123456, 12345677654, 9876543]
  }
  
  const duration = moment.duration(DATA.timer)  /* {interval} */
  const centiseconds = Math.floor(duration.milliseconds()/10)

  return(
    <Text style={styles.timer}> 
      {duration.minutes()}:
      {duration.seconds()}:
      {centiseconds}        
    </Text>
    )
}

const styles = StyleSheet.create({
  timer: {
    color: 'green',
    fontSize: 40,
    fontWeight: '200',
  },
})


export default Timer

















//import { RoundButton} from './RoundButton'

//function  RoundButton({title, color, background}){
//  return(
//    <View style={[styles.button,  {backgroundColor: background}]} >
//      <Text style={{color}}>{Text}</Text>
//    </View>
//    )
//  }
//





  //RoundButton= ( title, color, background ) => {
  //  return(
  //    <View style={{ backgroundColor: background}} >
  //      <Text style={{color}}>{Text}</Text>
  //    </View>
//
  //  )
  //}
//

//function  RoundButton(title, color, background ){
//  return(
//    <View style={[styles.button,  {backgroundColor: background}]} >
//      <Text style={{color}}>{Text}</Text>
//    </View>
//    )
//  }

 // 
 // <View>  
 //     <Text style={styles.timer}> 
 //       {duration.minutes()}:
 //       {duration.seconds()}:
 //       {centiseconds}        
 //     </Text>
 //     <View>  
 //       <RoundButton title='Start' color='red' background='green'> </RoundButton>
 //     </View>
 // </View>
//