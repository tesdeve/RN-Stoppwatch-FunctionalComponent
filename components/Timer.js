import React from 'react';
import { StyleSheet,Text} from 'react-native';
import moment from 'moment'

export default function Timer() {

  const DATA= {
    timer:1234567,
    laps: [12345, 123456, 12345677654, 9876543]
  }
  

  const duration = moment.duration(DATA.timer) 
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
    fontSize: 20,
    fontWeight: '200',
  },
})

