import {
  Center,
  Image,
  Pressable,
  Switch,
  Text,
  VStack,
  View,
} from "native-base";
import Logo from "@assets/logo_tela_login.png";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/private.routes";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type MenuItemsProps = {
  titulo: string;
  icon: JSX.Element;
  navigator?: "RegisterUpdate" | "Home" | "FamilyGroup";
};

const MENU_ITEMS: MenuItemsProps[] = [
  {
    titulo: "Visualizar grupo familiar",
    icon: <FontAwesome5 name="eye" size={24} color="gray" />,
    navigator: "FamilyGroup",
  },
  {
    titulo: "Atualizar cadastro",
    icon: <FontAwesome5 name="user-edit" size={24} color="gray" />,
    navigator: "RegisterUpdate",
  },
  {
    titulo: "Zelador",
    icon: <FontAwesome5 name="broom" size={24} color="gray" />,
  },
  {
    titulo: "Mudar senha",
    icon: <FontAwesome5 name="unlock" size={24} color="gray" />,
  },
  {
    titulo: "Sair",
    icon: <FontAwesome5 name="sign-out-alt" size={24} color="gray" />,
  },
];

export function DrawerContent() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  return (
    <VStack flex={1}>
      <Center py={8}>
        <LinearGradient
          colors={["#00B4DB", "#0083B0"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 250,
          }}
        />
        <Image
          source={Logo}
          alt="Alternate Text"
          size={48}
          resizeMode="contain"
        />
      </Center>
      {MENU_ITEMS.map((item, index) => (
        <Pressable
          px={5}
          py={4}
          bg="white"
          _pressed={{
            bg: "gray.300",
          }}
          onPress={() => item.navigator && navigation.navigate(item.navigator)}
        >
          <View flexDirection="row" alignItems="center">
            <View w="1/5">{item.icon}</View>
            <View>
              <Text fontWeight="bold" color="gray.600" fontSize="md">
                {item.titulo}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
      <View
        position={"absolute"}
        bottom={8}
        left={3}
        flexDirection="row"
        alignItems="center"
      >
        <Text color="gray.600" fontSize="sm" fontWeight="bold">
          Deseja ativar o login com biometria?
        </Text>
        <Switch size="sm" />
      </View>
    </VStack>
  );
}
