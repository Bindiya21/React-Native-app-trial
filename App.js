import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
// import DeviceInfo from 'react-native-device-info';
import { useEffect, useState } from "react";
import { Klaviyo } from "klaviyo-react-native-sdk";


const deviceHeight = Dimensions.get("screen").height;
export default function App() {
  // const [userAgent, setUserAgen] = useState('');
  // useEffect(() => {
  //   DeviceInfo.getUserAgent().then(deviceInfo => {
  //     setUserAgen(deviceInfo+' PWAShell')
  //   })
  // },[])
  useEffect(() => { 
    Klaviyo.init({
      publicApiKey: 'pk_8e10b39134a9d92247ff800364ebb7aa6b' 
    });
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
