import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import List from '../List';
import Config from '../Config';

export default createBottomTabNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: 'Atestados',
      },
    },
    Config: {
      screen: Config,
      navigationOptions: {
        title: 'Meu Perfil',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'List') {
          iconName = `profile${focused ? '' : ''}`;
        } else if (routeName === 'Config') {
          iconName = 'setting';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
    },
  },
);

//outline
