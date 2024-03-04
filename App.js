import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
// import DeviceInfo from 'react-native-device-info';
import { useEffect, useState } from "react";
// import { Klaviyo } from "klaviyo-react-native-sdk";
import { LogLevel, OneSignal } from 'react-native-onesignal';
import Constants from "expo-constants";

const deviceHeight = Dimensions.get("screen").height;

// export const initialize = async () => {
//   try {
//     Klaviyo.initialize('S2XXdy');
//     Klaviyo.registerForPushNotifications();
//   } catch (e) {
//     console.log("klaviyo err",e);
//   }
// }

export default function App() {
  // const [userAgent, setUserAgen] = useState('');
  // useEffect(() => {
  //   DeviceInfo.getUserAgent().then(deviceInfo => {
  //     setUserAgen(deviceInfo+' PWAShell')
  //   })
  // },[])

  // useEffect(() => { 
  //   initialize();
  // },[])
  
  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

    // Also need enable notifications to complete OneSignal setup
    // OneSignal.Notifications.requestPermission(true);

  }, []);
  
  return (
    <View style={styles.container}>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
});
