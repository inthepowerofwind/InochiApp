import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../app/login';
import Register from '../app/register';
import Home from '../app/home';

const Stack = createStackNavigator();

// Main index file
const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}

export default App;
