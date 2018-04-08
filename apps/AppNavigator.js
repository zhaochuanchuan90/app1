
import { StackNavigator } from 'react-navigation';

import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';
import ThreePage from './containers/ThreePage';

const AppNavigator = StackNavigator({
  FirstPageScreen: {
    screen: FirstPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  SecondPageScreen: {
    screen: SecondPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  ThreePageScreen: {
    screen: ThreePage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
});
export default AppNavigator