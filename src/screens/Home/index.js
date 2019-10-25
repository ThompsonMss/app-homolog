import {createBottomTabNavigator} from 'react-navigation-tabs';

import List from '../List';
import Config from '../Config';

export default createBottomTabNavigator({
  List: {
    screen: List,
  },
  Config: {
    screen: Config,
  },
});
