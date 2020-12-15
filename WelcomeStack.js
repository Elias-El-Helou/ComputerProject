import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import WelcomeScreen from './WelcomeScreen';
import BusinessScreen from './BusinessLaptops';
import GamingScreen from './GamingLaptops';

const screens={
    Welcomescreen:{
        screen : WelcomeScreen
    },
    Businessscreen:{
        screen: BusinessScreen
    },
    Gamingscreen:{
        screen : GamingScreen
    }
}
const WelcomeStack=createStackNavigator(screens);

export default createAppContainer(WelcomeStack);