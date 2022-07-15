import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View,Button, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';


const SingIn = ({navigation})  => {
  function navigate() {
   navigation.navigate(' Catalog')
  }

   return (
    <View style={styles.MainView}>
    <View style={styles.TopView}></View>
    <Image style={styles.Image} source={require('../assets/Img/im.png')}/>
    <ScrollView style={styles.BottomView}>
        <Text style={styles.Heading}>
            Welcome {'\n'}
            back
        </Text>
       <View style={styles.FormView}>
       <TextInput 
       placeholderTextColor={'#fff'}
       placeholder={'Email'}
       style={styles.TextInput} />
        <TextInput 
        secureTextEntry
       placeholderTextColor={'#fff'}
       placeholder={'Password'}
       style={styles.TextInput} />
       <TouchableOpacity style={styles.Button} onPress={navigate}>
        <Text style={styles.TextButton}>
        Sing in
        </Text>
        </TouchableOpacity>
       </View>
       <TouchableOpacity style={styles.ButtonText} onPress={navigate}>
       <Text style={styles.TextSingup}>
        Sing up
       </Text>
       </TouchableOpacity>
    </ScrollView>
    </View>
   )
}
export default SingIn


const styles = StyleSheet.create({
  MainView: {
  flex: 1,
  marginTop: 40,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
  },
  Textstyle: {
    color:'blue'
  },
  TopView:{
  width: '100%',
  height: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  },
  BottomView: {
    width: '100%',
    height: '60%',
    backgroundColor: '#000'
  },
  Image:{
  width: '100%',
  
  },
  Heading:{
    color: '#fff',
    fontSize: 50,
    marginTop: 40,
    marginLeft:15
  },
  TextInput: {
  width: '100%',
  borderWidth:1,
  height: 45,
  borderColor: '#fff',
  borderRadius: 10,
  paddingLeft: 5,
  marginTop: 15,
  color: '#fff'
  },
  FormView:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  Button:{
    width: '100%',
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextButton: {
    fontSize: 18,

  },
  TextSingup:{
    color: 'gray',
  },
  ButtonText: {
    alignItems:'center',
    display: 'flex',
    width: '100%',
    marginTop: 15,
    borderRadius: 10,
  }
});
