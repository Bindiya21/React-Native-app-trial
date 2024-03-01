import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
// import DeviceInfo from 'react-native-device-info';
import { useEffect, useState } from "react";
import {Klaviyo} from 'react-native-klaviyo';


const deviceHeight = Dimensions.get("screen").height;
export default function App() {
  // const [userAgent, setUserAgen] = useState('');
  // useEffect(() => {
  //   DeviceInfo.getUserAgent().then(deviceInfo => {
  //     setUserAgen(deviceInfo+' PWAShell')
  //   })
  // },[])

  useEffect(() => { 
    Klaviyo.initialize('S2XXdy');
    Klaviyo.registerForPushNotifications();
  },[])
  
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://stageui.olivela.com/" }}
        style={{ flex: 1 }}
        userAgent="PWAShell"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
});
