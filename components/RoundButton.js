import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

function RoundButton( {title, color, background} ){
  return(
    <View style={[ styles.button, {backgroundColor: background}]} >
      <View style={styles.buttonBorder}>  
        <Text style={[styles.buttonText, {color}]}>{title}</Text> 
      </View>
    </View>
    )
}

const styles = StyleSheet.create({    
  button: {
    width: 80,
    height: 80,
    borderRadius:40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonBorder: {
    width: 77,
    height: 77,
    borderWidth: 3,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'white'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: '400',
  }
})

export default RoundButton