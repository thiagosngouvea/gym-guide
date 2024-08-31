import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import {
  useFonts,
  Inter_300Light,
  // Inter_400Regular,
  Inter_700Bold,
  Inter_700Bold as Inter_700Regular,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import 'react-native-gesture-handler';
// import  AppLoading  from '@components/AppLoading';

import { Routes } from '@routes/index';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_300Light,
    // Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    Inter_700Regular,
  });

  const THEME = extendTheme({
    // colors: {
    //   primary: {
    //     50: "#e5f6f0",
    //     100: "#ccede1",
    //     200: "#99dbc3",
    //     300: "#66caa6",
    //     400: "#32b888",
    //     500: "#19af79",
    //     600: "#00a76b",
    //     700: "#009660",
    //     800: "#00744a",
    //     900: "#005335",
    //   },
    // },
    fontConfig: {
      Inter: {
        300: {
          normal: "Inter_300Light",
        },
        // 400: {
        //   normal: "Inter_400Regular",
        // },
        700: {
          normal: "Inter_700Bold",
        },
        900: {
          normal: "Inter_900Black",
        },
      },
    },
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Inter",
      body: "Inter",
      mono: "Inter",
    },
  });

  console.log('fontsLoaded', fontsLoaded);

  return (
    <NativeBaseProvider theme={THEME}>
      {/* <StatusBar
        translucent
      /> */}
      {fontsLoaded ? <Routes /> : <Text>Teste</Text>}
      {/* <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
      </View> */}
    </NativeBaseProvider>
  );
}
