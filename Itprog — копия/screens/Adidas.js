import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import Dot from '../components/Dot'
import SizeButton from '../components/SizeButton'
import CButton from '../components/CButton'
import Cart from 'react-native-vector-icons/AntDesign'


const Adidas = ({navigation}) => {
    navigation.setOptions({
        headerTitle:'ADIDAS ULTRABOOST ',
       
    })
    return (
        <ScrollView style={styles.container}>
    
        <Image 
        source={require('../assets/Img/img5.jpg')}
        style={styles.img}
        />
        <View>

           <View style={styles.Dot}>
           <Dot color='blue'/>
           <Dot color='gray'/>
           <Dot color='orange'/>
           <Dot color='black'/>
           </View>


           <View style={styles.dimensions}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor='#17181a' color='#fff'>40</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>42</SizeButton>
            <SizeButton>43</SizeButton>
            </ScrollView>
           </View>


           <View style={styles.textConten}> 
           <Text style={styles.Title}>Adidas</Text>
           <Text style={styles.textConten}>
           Casual and boring are completely different things. These adidas sneakers will help you create a relaxed yet stylish sporty look. The special mesh will help your feet feel less tired during the day.
             </Text >
           </View>
           <CButton />
        </View>
        </ScrollView>
    )
}

export default Adidas

const styles = StyleSheet.create({
    container:{
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
    },
    img:{
    width: '100%',
    height:200
    
    },
    Title:{
    fontSize: 30,
    paddingHorizontal: '2%'
    },
    Dot:{
        marginVertical: '5%',
        flexDirection: 'row',
    },
    dimensions:{
        width: '100%',
        flexDirection: 'row',

    },
    textConten: {
        fontSize: 18,
       paddingHorizontal: '2%',
        marginVertical: '2%'
    },

})