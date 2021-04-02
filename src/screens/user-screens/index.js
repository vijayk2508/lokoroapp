import { DrawerNavigator } from "react-navigation";
import BuzzScreen from '../buzz/BuzzScreen.js';
import GolokoScreen from '../goloko/GolokoScreen.js';
import ListingScreen from '../list/ListingScreen.js';

const UserScreenRouter = DrawerNavigator(
  {
    Buzz: { screen: BuzzScreen },
    Goloko: { screen: GolokoScreen },
    Listing: { screen: ListingScreen }
  },
  {
   // contentComponent: props => <SideBar {...props} />
  }
);
export default UserScreenRouter;