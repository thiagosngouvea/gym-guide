import React from "react";
import { Heading, Text, View, HStack, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import { Entypo, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { AppNavigatorRoutesProps } from "@routes/private.routes";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  titulo: string;
  headerType?: "default" | "start" | "back";
  hideTitle?: boolean;
  hideButton?: boolean;
};

export function Header({ titulo, headerType = "default", hideTitle = false, hideButton = false }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const renderStartHeader = () => (
    <HStack minHeight={250} px={6} alignItems="center">
      <LinearGradient
        colors={["#B31C31", "#B31C31"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, height: "100%" }}
      />
      <View flex={1} alignSelf="center">
        <Heading color="white" fontSize="lg" fontFamily="heading" alignSelf="center">
          {titulo}
        </Heading>
        <Text color="white" fontSize="md" fontWeight="bold" alignSelf="center">
          Bem vindo(a), Thiago
        </Text>
      </View>
      <View position="absolute" right={4} top={12}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </HStack>
  );

  const renderDefaultHeader = () => (
    <HStack pt={12} pb={5} px={6} alignItems="center">
      <LinearGradient
        colors={["#B31C31", "#B31C31"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, height: 100 }}
      />
      <View pr={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Heading color="white" fontSize="lg" fontFamily="heading" alignSelf="flex-start">
          {titulo}
        </Heading>
      </View>
    </HStack>
  );

  const renderBackHeader = () => (
    <HStack bg="cyan.200" pt={12} pb={5} px={6} alignItems="center">
      <LinearGradient
        colors={["#00B4DB", "#0083B0"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, height: 90 }}
      />
      <View mr={2} position="absolute" top={10} mt={1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View flexDirection="row" alignItems="center">
            <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
            <Text color="white" fontSize="md" fontWeight="medium">
              Voltar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Heading color="white" fontSize="lg" fontFamily="heading" alignSelf="center">
          {!hideTitle && titulo}
        </Heading>
      </View>
      <View mr={2} position="absolute" top={10} right={4} mt={2}>
        <TouchableOpacity onPress={() => console.log("delete")}>
          {!hideButton && <FontAwesome5 name="trash" size={24} color="white" />}
        </TouchableOpacity>
      </View>
    </HStack>
  );

  switch (headerType) {
    case "start":
      return renderStartHeader();
    case "back":
      return renderBackHeader();
    default:
      return renderDefaultHeader();
  }
}
