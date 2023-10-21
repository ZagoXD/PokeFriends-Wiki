import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Togekiss from './src/screens/Togekiss';
import Salamence from './src/screens/Salamence';
import Dusknoir from './src/screens/Dusknoir';
import Boss from './src/screens/Boss';
import Quests from './src/screens/Quests';
import Pidgeot from './src/screens/Pidgeot';
import Mega from './src/screens/Mega';
import Moltres from './src/screens/Moltres';
import Metagross from './src/screens/Metagross';
import Tangrowth from './src/screens/Tangrowth';
import Magmortar from './src/screens/Magmortar';
import Electivire from './src/screens/Electivire';
import Rypherior from './src/screens/Rypherior';
import Milotic from './src/screens/Milotic';
import Scizor from './src/screens/Scizor';
import Slaking from './src/screens/Slaking';
import Greninja from './src/screens/Greninja';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular'}, headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Boss" component={Boss} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Boss'}}/>
        <Stack.Screen name="Mega" component={Mega} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Megas'}}/>
        <Stack.Screen name="Quests" component={Quests} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Quests'}}/>
        <Stack.Screen name="Moltres" component={Moltres} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Moltres'}}/>
        <Stack.Screen name="Pidgeot" component={Pidgeot} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Pidgeot'}}/>
        <Stack.Screen name="Togekiss" component={Togekiss} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Togekiss'}}/>
        <Stack.Screen name="Salamence" component={Salamence} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Salamence'}}/>
        <Stack.Screen name="Dusknoir" component={Dusknoir} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Dusknoir'}}/>
        <Stack.Screen name="Metagross" component={Metagross} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Metagross'}}/>
        <Stack.Screen name="Tangrowth" component={Tangrowth} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Tangrowth'}}/>
        <Stack.Screen name="Magmortar" component={Magmortar} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Magmortar'}}/>
        <Stack.Screen name="Electivire" component={Electivire} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Electivire'}}/>
        <Stack.Screen name="Rypherior" component={Rypherior} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Rypherior'}}/>
        <Stack.Screen name="Milotic" component={Milotic} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Milotic'}}/>
        <Stack.Screen name="Slaking" component={Slaking} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Slaking'}}/>
        <Stack.Screen name="Scizor" component={Scizor} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Scizor'}}/>
        <Stack.Screen name="Greninja" component={Greninja} options={{headerShown: true, headerTintColor: 'white', headerTitle: 'Greninja'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;