// app entry
import { AppRegistry, Platform } from "react-native";
import { Config } from "./config";
import App from './App';

// register the app
AppRegistry.registerComponent('example', () => App);

// register the web
if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root')
  });
}
