import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/screens/Login';
import Splash from './src/screens/Splash';

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
    },
    Splash: {
      screen: Splash,
    },
  }),
);
