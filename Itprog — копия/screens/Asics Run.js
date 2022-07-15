import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import Dot from '../components/Dot'
import SizeButton from '../components/SizeButton'
import CButton from '../components/CButton'
import Cart from 'react-native-vector-icons/AntDesign'


const AsicsRun = ({navigation}) => {
    navigation.setOptions({
        headerTitle: 'Asics Run ',
       
    })
    return (
        <ScrollView style={styles.container}>
    
        <Image 
        source={require('../assets/Img/img6.jpg')}
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
           <Text style={styles.Title}>Asics Run</Text>
           <Text style={styles.textConten}>
           Designed to help runners move on, the PATRIOT™ 12 running shoe delivers a springy, plush feel. The breathable mesh upper promotes better air circulation and helps keep feet cool. With EVA midsole technology for responsive responsiveness, this shoe is also great at absorbing shock. Finally, the use of a molded rubber outsole provides additional support with an internal heel counter to keep feet in shape when running long distances.
             </Text >
           </View>
           <CButton />
        </View>
        </ScrollView>
    )
}

export default AsicsRun

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