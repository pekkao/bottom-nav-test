import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';
import Home from './Home';
import Cart from './Cart';
import Image from './Image';
import Profile from './Profile';

const HomeScreen = () => {
  return(
      <Home />
  );
}

const CartScreen  = () => {
  return(
      <Cart />
  );
}

const ImageScreen = () => {
  return(
      <Image />
  );
}

const ProfileScreen = () => {
  return(
      <Profile />
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
              let iconName;
              let iconColor;
              let iconSize = 20;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home',
                iconColor = focused ? 'black' : 'gray'
              } else if (route.name === 'Cart') {
                iconName = focused ? 'shoppingcart' : 'shoppingcart'
                iconColor = focused ? 'black' : 'gray'
              }
              else if (route.name === 'Image') {
                iconName = focused ? 'picture' : 'picture'
                iconColor = focused ? 'black' : 'gray'
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user'
                iconColor = focused ? 'black' : 'gray'
              }

              return <AntDesign name={iconName} size={iconSize} color={iconColor} />
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveBackgroundColor: 'white',
            tabBarShowLabel: false,
            tabBarStyle: {position: 'absolute'}
          })}
        >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Cart' component={CartScreen} />
        <Tab.Screen name='Image' component={ImageScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  text: {
      fontSize:20,
  },
});