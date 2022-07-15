import React from 'react-native'
import {View, StyleSheet, Dimensions} from 'react-native'

const Dot = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
      
        </View>
    )
}

export default Dot

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        backgroundColor: 'red',
        borderRadius: Dimensions.get('window').width * 0.050/ 2,
        elevation: 5,
        marginLeft: 15,
        
    }
})