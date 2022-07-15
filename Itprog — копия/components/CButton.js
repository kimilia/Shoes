import React from "react";
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native'

const CButton = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.Bcontainer}>
                <Text style={styles.title}>COMPRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CButton

const styles = StyleSheet.create({
    container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
    
    },
    Bcontainer:{
    width: '90%',
    height: 50,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%'
    
    },
    title:{
        fontSize: 17,
        color: '#FFF',
    }
})