import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './Containers/ScreenA';
import ScreenB from './Containers/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = '';
            if (route.name === 'ScreenA') {
              iconName = 'autoprefixer';
            } else if (route.name === 'ScreenB') {
              iconName = 'btc';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="ScreenA"
    //       component={ScreenA}
    //       options={{header: () => null}}
    //     />
    //     <Stack.Screen name="ScreenB" component={ScreenB} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
