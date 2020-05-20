import React from 'react';
import { StyleSheet, View } from 'react-native'

const ButtonsRow = ({children}) => {
  return (  
    <View style={styles.buttonsRow}>
        {children}
    </View>
  );
}
 
const styles = StyleSheet.create({
    buttonsRow: {
      flexDirection: 'row',
      alignSelf: "stretch",
      justifyContent: 'space-between',
      marginTop: 15,
    }

})


export default ButtonsRow;