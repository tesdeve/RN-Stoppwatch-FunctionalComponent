import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

function Lap({ number, interval}) {

    return(
      <View style={styles.lap}>
        <Text style={styles.labText}> lap { number } </Text>
        <Text style={styles.labText}> { interval }   </Text> 
      </View>
    )
  }

  const styles = StyleSheet.create({
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: 'white',
        paddingVertical: 17,
      },
      lapText: {
        color: 'gray',
        fontSize: 20,
        width: 27,    
      },
  })

  export default Lap