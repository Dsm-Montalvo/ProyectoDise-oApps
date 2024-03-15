
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/Presentation/screen/Login/LoginScreen';
import RegisterScreen from './src/Presentation/screen/Register/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 export type RootSatckParamList = {
  loginScreen : undefined,
  RegisterScreen : undefined
 };

 const Stack = createNativeStackNavigator<RootSatckParamList>();

export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
