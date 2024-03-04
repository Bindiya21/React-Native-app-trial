import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
// import DeviceInfo from 'react-native-device-info';
import { useEffect, useState } from "react";
// import { Klaviyo } from "klaviyo-react-native-sdk";
import { ActivityIndicator } from "react-native";
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

export default function App() {
  // const [userAgent, setUserAgen] = useState('');
  // useEffect(() => {
  //   DeviceInfo.getUserAgent().then(deviceInfo => {
  //     setUserAgen(deviceInfo+' PWAShell')
  //   })
  // },[])

  const [visible, setVisible] = useState(true);
  const hideSpinner = () => {
    setVisible(false);
  };
  // useEffect(() => {
  //   Klaviyo.init({
  //     publicApiKey: "pk_8e10b39134a9d92247ff800364ebb7aa6b",
  //   });
  //   Klaviyo.registerForPushNotifications();
  // }, []);

  return (
    <View style={styles.container}>
      <WebView
        onLoad={() => {
          hideSpinner();
        }}
        source={{ uri: "https://stageui.olivela.com/" }}
        style={{ flex: 1 }}
        userAgent="PWAShell"
      />
      {visible && (
        <ActivityIndicator
          style={{
            position: "absolute",
            top: deviceHeight / 2,
            left: deviceWidth / 2,
          }}
          size="large"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
});
