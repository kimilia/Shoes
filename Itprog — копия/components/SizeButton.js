import React  from 'react'
import {View, StyleSheet, Text} from 'react-native'

const SizeButton = (props) => {
    return(
        <View style={[styles.container , {backgroundColor : props.bgColor || '#fff'}]}> 
        <Text style={[styles.TextStyle , {color: props.color || '#ddd'}]}>{props.children}</Text>
        </View>
    )
}

export default SizeButton

const styles = StyleSheet.create({
    container:{
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10
    },
    TextStyle:{
        color: 'white',
        fontSize:18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})