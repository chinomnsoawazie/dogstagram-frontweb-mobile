const react = require("react");

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-ui-kitten';

import AllResultsSCreen from '../screens/AllResultsScreen';
import DogResultsScreen from '../screens/DogResultsScreen';
import DogOwnersResultsScreen from '../screens/DogOwnersResultsScreen';

const SearchTabNavigator = createMaterialTopTabNavigator(
  {
    'All Results': {
      screen: AllResultsSCreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="home-outline"
            width={30}
            height={30}
            fill={focused ? '#111' : '#939393'}
          />
        ),
      },
    },
    Dogs: {
      screen: DogResultsScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="home-outline"
            width={30}
            height={30}
            fill={focused ? '#111' : '#939393'}
          />
        ),
      },
    },
    Owners: {
      screen: DogOwnersResultsScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="home-outline"
            width={30}
            height={30}
            fill={focused ? '#111' : '#939393'}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      showIcon: true,
      showLabel: true,
      style: {
        // marginTop: '10%',
        height: 60,
        width: '100%',
        // backgroundColor: 'orange',
      },
    },
  },
);

export default createAppContainer(SearchTabNavigator);
