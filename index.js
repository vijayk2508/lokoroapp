/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRouter from './src/router';
AppRegistry.registerComponent(appName, () => AppRouter);

