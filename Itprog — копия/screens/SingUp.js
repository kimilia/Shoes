
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { StyleSheet, Text, View,Button, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';


const SingUp = ({navigation})  => {
    function navigate(){
        navigation.navigate('SingIn')
    }
   return (
    <View style={styles.MainView}>
    <View style={styles.TopView}></View>
    <Image style={styles.Image} source={require('../assets/Img/im.png')}/>
    <ScrollView style={styles.BottomView}>
        <Icon style={styles.Icon} name='left' size={40} color='#fff'
        onPress={navigate}
        />
        <Text style={styles.Heading}>
            Create {'\n'}
            account
        </Text>
       <View style={styles.FormView}>
       <TextInput 
       placeholderTextColor={'#fff'}
       placeholder={'Email'}
       style={styles.TextInput} />
              <TextInput 
       placeholderTextColor={'#fff'}
       placeholder={'Full name'}
       style={styles.TextInput} />
              <TextInput
             secureTextEntry
       placeholderTextColor={'#fff'}
       placeholder={'Password'}
       style={styles.TextInput} />
        <TextInput 
        secureTextEntry
       placeholderTextColor={'#fff'}
       placeholder={'Confirm Password'}
       style={styles.TextInput} />
       <TouchableOpacity style={styles.Button}>
        <Text style={styles.TextButton}>
        Sing up
        </Text>
        </TouchableOpacity>
       </View>
    </ScrollView>
    </View>
   )
}
export default SingUp


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
    width: '90%',
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    },
    BottomView: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000'
    },
    Image:{
    width: '100%',
    
    },
    Heading:{
      color: '#fff',
      fontSize: 50,
      marginTop: 5,
      marginLeft:15
    },
    TextInput: {
    width: '100%',
    borderWidth:1,
    height: 45,
    borderColor: '#fff',
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 10,
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
    },
    Icon:{
        marginTop: 20,
        marginLeft: 10
    }
  });
  
