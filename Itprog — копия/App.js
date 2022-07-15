import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SingIn from './screens/SingIn';
import SingUp from './screens/SingUp';
import Catalog from './screens/Catalog';
import Detail from './screens/Detail';
import CAT from 'react-native-vector-icons/AntDesign'
import NikeZoom from './screens/Nike Zoom';
import NikeAir from './screens/Nike Air';
import UnderArmour from './screens/Under Armour';
import Adidas from './screens/Adidas';
import AsicsRun from './screens/Asics Run';
import NikeRun from './screens/Nike Run';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SingIn" component={SingIn} options={{headerShown: false}}  />
      <Stack.Screen name="SingUp" component={SingUp}  options={{headerShown: false}} />
      <Stack.Screen name="Catalog" component={Catalog} options={{headerShown: false}}/>
      <Stack.Screen name="NikeZoom" component={NikeZoom} />
      <Stack.Screen name="NikeAir" component={NikeAir} />
      <Stack.Screen name="UnderArmour" component={UnderArmour} />
      <Stack.Screen name="Adidas" component={Adidas} />
      <Stack.Screen name="NikeRun" component={NikeRun} />
      <Stack.Screen name="AsicsRun " component={AsicsRun } />
      <Stack.Screen name="Detail" component={Detail} options={{
        headerRight: () => (
          <TouchableOpacity>
          <CAT
          name= 'shoppingcart'
          size={30}
          color= '#000'
          />
          </TouchableOpacity>
        )
      }}/>
    </Stack.Navigator>
  </NavigationContainer>

    
  );
}

