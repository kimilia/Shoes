import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import Dot from '../components/Dot'
import SizeButton from '../components/SizeButton'
import CButton from '../components/CButton'
import Cart from 'react-native-vector-icons/AntDesign'


const NikeRun = ({navigation}) => {
    navigation.setOptions({
        headerTitle:'Nike Run ',
       
    })
    return (
        <ScrollView style={styles.container}>
    
        <Image 
        source={require('../assets/Img/img7.jpg')}
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
           <Text style={styles.Title}>Nike Run</Text>
           <Text style={styles.textConten}>
           Designed for running shoes, the Max Air in the heel demands unsurpassed cushioning.
Soft, low-profile collar gives you a comfortable feel.
Traditional rubber waffle outsole provides traction and durability.
Stitched overlays and TPU details on the lacing panel and heel for all your favorite '90s looks.
             </Text >
           </View>
           <CButton />
        </View>
        </ScrollView>
    )
}

export default NikeRun

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