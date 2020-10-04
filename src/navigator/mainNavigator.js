import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging125734Navigator from '../features/Messaging125734/navigator';
import CalendarView125733Navigator from '../features/CalendarView125733/navigator';
import EmailAuth125732Navigator from '../features/EmailAuth125732/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging125734: { screen: Messaging125734Navigator },
CalendarView125733: { screen: CalendarView125733Navigator },
EmailAuth125732: { screen: EmailAuth125732Navigator },

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
