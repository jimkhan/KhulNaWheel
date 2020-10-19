// // In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

//import Main from './screens/Main';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/DetailScreen';
import InfoScreen from './screens/InfoScreen';
import RentAcar from './screens/DrawerScreen/RentACar/RentACar';
import Ambulance from './screens/DrawerScreen/Ambulance/Ambulance'

import { color } from 'react-native-reanimated';

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const HomeStack = createStackNavigator();
const RentacarStack = createStackNavigator();
const AmbulanceStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStatusBarHeight: 15,
        headerStyle: {
          backgroundColor: '#14D0C5',
        },

        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyleInterpolator: forFade,
        // headerLeft: () => (
        //   <Icon.Button
        //     name="md-menu"
        //     size={35}
        //     backgroundColor='#14D0C5'
        //     onPress={() => navigation.openDrawer()}
        //     color="#3E2723"

        //   >
        //   </Icon.Button>

        // ),
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={35}
              backgroundColor='#14D0C5'
              onPress={() => navigation.openDrawer()}
              color="#3E2723"

            >
            </Icon.Button>

          ),

        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#14D0C5',
          },
        }}
      />

      <HomeStack.Screen
        name="Information"
        component={InfoScreen}
        options={{
          title: '',
        }}
      />
      <HomeStack.Screen
        name="RentAcar"
        component={RentAcar}
        options={{
          title: '',
        }}
      />
    </HomeStack.Navigator>
  );
}
function RentacarScreen({ navigation }) {
  return (
    <RentacarStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStatusBarHeight: 15,
        headerStyle: {
          backgroundColor: '#2ECC71',
        },

        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        //headerStyleInterpolator: forFade,
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={35}
            backgroundColor='#2ECC71'
            onPress={() => navigation.openDrawer()}
            color="#3E2723"

          >
          </Icon.Button>

        ),
      }}

    >
      <RentacarStack.Screen
        name="RentACar"
        component={RentAcar}
        options={{
          title: 'Rent A car',



        }}
      />

    </RentacarStack.Navigator>
  );
}
function AmbulanceScreen({ navigation }) {
  return (
    <AmbulanceStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStatusBarHeight: 15,
        headerStyle: {
          backgroundColor: '#DD5145',
        },

        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        //headerStyleInterpolator: forFade,
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={35}
            backgroundColor='#DD5145'
            onPress={() => navigation.openDrawer()}
            color="#3E2723"

          >
          </Icon.Button>

        ),
      }}

    >
      <AmbulanceStack.Screen
        name="Ambulance"
        component={Ambulance}
        options={{
          title: 'Ambulance',



        }}
      />

    </AmbulanceStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#14D0C5',
          // width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          //itemStyle: { marginVertical: 2 },
          labelStyle: {
            fontFamily: 'RussoOne-Regular',
            fontWeight: '200',
            fontSize: 18,
            // color: '#000',
          },
        }}


      >

        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Ambulance " component={AmbulanceScreen} />
        <Drawer.Screen name="Rent A Car" component={RentacarScreen} />
        <Drawer.Screen name="Tourism info." component={HomeStackScreen} />
        <Drawer.Screen name="Contact" component={HomeStackScreen} />
        <Drawer.Screen name="About us" component={HomeStackScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

