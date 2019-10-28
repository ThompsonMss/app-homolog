import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

export default createAppContainer(
  createStackNavigator({
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
        title: 'Splash',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        title: 'Login',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Cadastro',
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detalhe do Atestado',
      },
    },
  }),
);
