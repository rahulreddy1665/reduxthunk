import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenNames} from '../constants/Constants';
import Dashboard from './Dashboard';
import {HomeIcon} from '../../images/icons/HomeIcon';
import ReduxEx from '../ReduxEx';
import dummy from './dummy';
import Next from './Next';
import {SearchIcon} from '../../images/icons/SearchIcon';
import {UserIcon} from '../../images/icons/UserIcon';
import {FilmIcon} from '../../images/icons/FilmIcon';
import Monitor from './Monitor';
import TvIcon from '../../images/icons/TvIcon';

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          bottom: 0,
          elevation: 0,
          backgroundColor: '#091A2B',
          borderTopWidth: 0,
          height: 52,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={ScreenNames.DASHBOARD}
        component={Dashboard}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <HomeIcon stroke={focused ? '#DC0C13' : '#6C7984'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.REDUX_EXAMPLE}
        component={ReduxEx}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <SearchIcon stroke={focused ? '#DC0C13' : '#6C7984'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.DUMMY}
        component={dummy}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <FilmIcon stroke={focused ? '#DC0C13' : '#6C7984'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.MONITOR}
        component={Monitor}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TvIcon stroke={focused ? '#DC0C13' : '#6C7984'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.NEXT}
        component={Next}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <UserIcon stroke={focused ? '#DC0C13' : '#6C7984'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#091A2B',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
