import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useNavigation } from "@react-navigation/native";

import React from "react";

import { Home } from "@screens/Home";
import { Guides } from "@screens/Guides";


export type AppRoutes = {
  Home: undefined;
  Guides: undefined;
  RegisterUpdate: undefined;
  FamilyGroup: undefined;
  Warnings: undefined;
  AcessKey: undefined;
  Camera: undefined;
  Deliveries: undefined;
  Ocurrences: undefined;
  Panic: undefined;
  Phone: undefined;
  Questions: undefined;
  Releases: undefined;
  Reservations: undefined;
  WarningSingle: { data: any }
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

// const Drawer = createDrawerNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Guides: undefined;
      RegisterUpdate: undefined;
      FamilyGroup: undefined;
      Warnings: undefined;
      AcessKey: undefined;
      Camera: undefined;
      Deliveries: undefined;
      Ocurrences: undefined;
      Panic: undefined;
      Phone: undefined;
      Questions: undefined;
      Releases: undefined;
      Reservations: undefined;
      WarningSingle: { data: any }
    }
  }
}

export function PrivateRoutes() {
  const navigation = useNavigation();

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Guides" component={Guides} />
      </Navigator>
    </>
  );
}
