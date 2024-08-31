import { Box, Text, View, Pressable, Circle, Alert, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/private.routes";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  titulo: string;
  icon?: any;
  sideColor?: string;
  backgroundColorIcon?: string;
  navigateTo?: any;
  width?: string;
}

export function MenuItem({
  titulo,
  icon,
  sideColor,
  backgroundColorIcon,
  navigateTo,
  width,
}: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();


  return (
    <>
    <Pressable
      borderRadius={10}
      bg="white"
      w={width}
      h={"25%"}
      shadow={4}
      flexDirection="column"
      p="2"
      my={2}
      onPress={() => navigation.navigate(navigateTo)}
      _pressed={{ opacity: 0.5 }}
    >
      <View
        flex={1}
        alignSelf="center"
        //centralizar o texto
        justifyContent="center"
        alignItems={width === "90%" ? "flex-start" : "center"}
        ml={width === "90%" ? 5 : 0}
      >
                <LinearGradient
           colors={["#0b2fe4", "#a21111"]}
            style={{
              borderRadius: 200,
            }}
        >
          <Circle
            bg={
              backgroundColorIcon !== "cyan.600"
                ? backgroundColorIcon
                : null
            }
            p="5"
          >
            {icon}
          </Circle>
        </LinearGradient>
        <Text
          color="gray.700"
          fontWeight="bold"
          fontSize={width === "90%" ? 20 : 15}
        >
          {titulo}
        </Text>
      </View>
    </Pressable>
    </>
  );
}
