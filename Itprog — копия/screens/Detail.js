import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import Dot from '../components/Dot'
import SizeButton from '../components/SizeButton'
import CButton from '../components/CButton'
import Cart from 'react-native-vector-icons/AntDesign'

const Detail = ({navigation}) => {
    navigation.setOptions({
        headerTitle: ' ASICS GEL N 100',
       
    })
    return (
        <ScrollView style={styles.container}>
    
        <Image 
        source={require('../assets/Img/img1.jpg')}
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
           <Text style={styles.Title}>ASICS GEL N 100</Text>
           <Text style={styles.textConten}>ASICS is one of the most respected sports brands in the world, one of the top five manufacturers in the industry. The company was founded in Japan in 1949 by Kihachiro Onitsuka and was called at that moment Onitsuka Co. Ltd.
The company's brand name was "Onitsuka Tiger" or "Tigers" for short. In 1977, after the merger of Onitsuka Co. Ltd., GTO and Jelenk, ASICS Corporation was born.
            
             </Text >
           </View>
           <CButton />
        </View>
        </ScrollView>
    )
}

export default Detail

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