import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import Dot from '../components/Dot'
import SizeButton from '../components/SizeButton'
import CButton from '../components/CButton'
import Cart from 'react-native-vector-icons/AntDesign'


const UnderArmour = ({navigation}) => {
    navigation.setOptions({
        headerTitle:'UNDER ARMOUR NXT ',
       
    })
    return (
        <ScrollView style={styles.container}>
    
        <Image 
        source={require('../assets/Img/img4.jpg')}
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
           <Text style={styles.Title}>UNDER ARMOUR NXT </Text>
           <Text style={styles.textConten}>
           Sneakers are made of textile and polymer material. UA HOVR™ technology provides a "feeling of weightlessness", supports energy return, helps to avoid impacts. Energy Web compression mesh contains and shapes UA HOVR™ foam to return the energy you put in. Breathable upper with strategic synthetic overlays for added support and durability where you need it most. 3D foam molded footbed for maximum 
             </Text >
           </View>
           <CButton />
        </View>
        </ScrollView>
    )
}

export default UnderArmour

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