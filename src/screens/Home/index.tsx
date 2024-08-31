import { HStack, Text, VStack, View } from "native-base";
import { Header } from "@components/Header";
import { FontAwesome, Octicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import { MenuItem } from "@components/MenuItem";

type MenuItemsProps = {
    titulo: string;
    icon?: any;
    sideColor?: string;
    backgroundColorIcon?: string;
    navigateTo?: "Guides" | "AccessKey" | "Releases" | "Camera" | "Phone" | "Deliveries" | "Occurrences" | "Reservations" | "Questions" | "Panic";
    width?: string;
};


const MENU_ITEMS: MenuItemsProps[] = [
    {
        titulo: "Guia de Vistos",
        icon: <FontAwesome5 name="book-open" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Guides"
    },
    {
        titulo: "Assistente Virtual",
        icon: <MaterialCommunityIcons name="assistant" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "AccessKey"
    },
    {
        titulo: "Comunidade",
        icon: <FontAwesome name="group" size={24} color="white" />,
        sideColor: "cyan.600",
        navigateTo: "Releases"
    },
    {
        titulo: "Checklist",
        icon: <Octicons name="checklist" size={24} color="white" />,
        sideColor: "gray.500",
        navigateTo: "Camera"
    },
    {
        titulo: "News",
        icon: <FontAwesome5 name="newspaper" size={24} color="white" />,
        sideColor: "gray.500",
        navigateTo: "Camera"
    },
]

export function Home() {
    return (
        <VStack
            flex={1}
            bg="white"
        >
            <Header titulo="Guia da Imigração" headerType="start"/>
            <View
                flex={1}
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-around"
                mt={8}
            >
                {MENU_ITEMS.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        titulo={item.titulo} 
                        icon={item.icon} 
                        sideColor={item.sideColor} 
                        backgroundColorIcon={item.backgroundColorIcon}
                        navigateTo={item.navigateTo}    
                        width="45%"
                    />
                ))}
            </View>
        </VStack>
    );
}