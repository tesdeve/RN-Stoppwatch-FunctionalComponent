import React from 'react';
import Lab from './Lab'
import {ScrollView, StyleSheet} from 'react-native'


function LapsTable() {
   const DATA= {
       timer:1234567,
       laps: [12345, 123456, 12345677654, 9876543]
     }
    return(
      <ScrollView style={styles.scrollView}>
        {DATA.laps.map((lap, index) => (
          <Lap number={index} interval={lap}
          />
        ))}
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    scrollView: {
        alignSelf: 'stretch',
      },
  })

  export default LapsTable