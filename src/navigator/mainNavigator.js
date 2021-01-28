import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7197972Navigator from '../features/BlankScreen7197972/navigator';
import SignIn15194791Navigator from '../features/SignIn15194791/navigator';
import SignUp26194790Navigator from '../features/SignUp26194790/navigator';
import BlankScreen0194789Navigator from '../features/BlankScreen0194789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7197972: { screen: BlankScreen7197972Navigator },
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
