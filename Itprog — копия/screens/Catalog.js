import React from 'react'
import {View, StyleSheet, Text, Image,ScrollView} from 'react-native'
import Shoes from '../components/Shoes'
import { useNavigation } from '@react-navigation/native'

const Catalog = () => {
const navigation = useNavigation()



    return (
        <View style={styles.container}>
            <View style={styles.Header}>
        <Image 
        source={require('../assets/Img/img.png')}
        style={styles.Img}
        />
        <Text style={styles.TextHeader}>Running shoes</Text>
        </View>
        <View style={styles.Line}>

        </View>
        <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
         <Shoes img={require('../assets/Img/img1.jpg')} price='$500'  onClick={() => navigation.navigate('Detail')} >
         ASICS GEL N 100
         </Shoes>

         <Shoes img={require('../assets/Img/img2.jpg')} price='$550' onClick={() => navigation.navigate('NikeZoom')}>
         Nike ZoomX Invincible Run
         </Shoes>
         
         </View>

         <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
         <Shoes img={require('../assets/Img/img3.jpg')} price='$600' onClick={() => navigation.navigate('NikeAir')}>
         Nike Air Zoom Pegasus 34 
         </Shoes>

         <Shoes img={require('../assets/Img/img4.jpg')} price='$650' onClick={() => navigation.navigate( 'UnderArmour')}>
         UNDER ARMOUR NXT
         </Shoes>
         
         </View>
         

         <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
         <Shoes img={require('../assets/Img/img5.jpg')} price='$700' onClick={() => navigation.navigate( 'Adidas')}>
          ADIDAS ULTRABOOST 
         </Shoes>

         <Shoes img={require('../assets/Img/img6.jpg')} price='$750' onClick={() => navigation.navigate( 'AsicsRun')}>
          Asics Run
         </Shoes>
         
         </View>
      
           
         <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
         <Shoes img={require('../assets/Img/img7.jpg')} price='$800' onClick={() => navigation.navigate( 'NikeRun')}>
          Nike Run
         </Shoes>

         <Shoes img={require('../assets/Img/img8.jpg')} price='$850' onClick={() => navigation.navigate( 'Sport')}>
          Asics Sport
         </Shoes>
         
         </View>

      
        </ScrollView>
        </View>
    )
}

export default Catalog

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    TextStyle:{
        marginTop: 40,
        fontSize: 25
    },
    Img: {
    width: '100%',
    height: 200
    },
    Header: {
    marginBottom: 8,
    },
    TextHeader: {
    marginTop: 10,
    fontSize:25,
    marginLeft: 15,
    },
    Line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    }
})