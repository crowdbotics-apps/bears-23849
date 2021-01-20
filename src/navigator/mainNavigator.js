import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn15194791Navigator from '../features/SignIn15194791/navigator';
import SignUp26194790Navigator from '../features/SignUp26194790/navigator';
import BlankScreen0194789Navigator from '../features/BlankScreen0194789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn15194791: { screen: SignIn15194791Navigator },
SignUp26194790: { screen: SignUp26194790Navigator },
BlankScreen0194789: { screen: BlankScreen0194789Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
