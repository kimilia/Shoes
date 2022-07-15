import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity, Image} from 'react-native'

const Shoes = (props) => {
   

    return(
        <TouchableOpacity style={styles.container} onPress={props.onClick} >
        <Image 
        source={props.img}
        style={styles.ShoesImg}
        />
        <Text style={styles.ShoesText}>
           {props.children}</Text>
        <Text style={styles.ShoesText}>{props.price}</Text>
        </TouchableOpacity>
        
        
    )
}

export default Shoes

const styles = StyleSheet.create({
    container:{
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
    },
    ShoesImg:{
    width: 200,
    height: 100
    }, 
    ShoesText: {
    fontSize: 15
    }
})