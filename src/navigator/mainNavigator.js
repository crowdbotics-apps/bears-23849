import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps221256Navigator from '../features/Maps221256/navigator';
import Additem221255Navigator from '../features/Additem221255/navigator';
import Maps221251Navigator from '../features/Maps221251/navigator';
import UserProfile221247Navigator from '../features/UserProfile221247/navigator';
import UserProfile221224Navigator from '../features/UserProfile221224/navigator';
import Maps221205Navigator from '../features/Maps221205/navigator';
import Settings221183Navigator from '../features/Settings221183/navigator';
import Settings221168Navigator from '../features/Settings221168/navigator';
import NotificationList221167Navigator from '../features/NotificationList221167/navigator';
import Maps221166Navigator from '../features/Maps221166/navigator';
import BlankScreen11220458Navigator from '../features/BlankScreen11220458/navigator';
import BlankScreen10220457Navigator from '../features/BlankScreen10220457/navigator';
import BlankScreen9220456Navigator from '../features/BlankScreen9220456/navigator';
import BlankScreen9197975Navigator from '../features/BlankScreen9197975/navigator';
import SignIn15194791Navigator from '../features/SignIn15194791/navigator';
import SignUp26194790Navigator from '../features/SignUp26194790/navigator';
import BlankScreen0194789Navigator from '../features/BlankScreen0194789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps221256: { screen: Maps221256Navigator },
Additem221255: { screen: Additem221255Navigator },
Maps221251: { screen: Maps221251Navigator },
UserProfile221247: { screen: UserProfile221247Navigator },
UserProfile221224: { screen: UserProfile221224Navigator },
Maps221205: { screen: Maps221205Navigator },
Settings221183: { screen: Settings221183Navigator },
Settings221168: { screen: Settings221168Navigator },
NotificationList221167: { screen: NotificationList221167Navigator },
Maps221166: { screen: Maps221166Navigator },
BlankScreen11220458: { screen: BlankScreen11220458Navigator },
BlankScreen10220457: { screen: BlankScreen10220457Navigator },
BlankScreen9220456: { screen: BlankScreen9220456Navigator },
BlankScreen9197975: { screen: BlankScreen9197975Navigator },
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
