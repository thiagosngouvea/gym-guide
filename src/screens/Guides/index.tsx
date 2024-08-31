import React from "react";

import { Center, View, VStack } from "native-base";
import { Header } from "@components/Header";

import { MenuItem } from "@components/MenuItem";
import { ButtonNextStep } from "@components/ButtonNextStep";

export function Guides() {
    return (
        <VStack
            flex={1}
            bg="white"
        >
            <Header titulo="Guia de Vistos" />

            <Center
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <ButtonNextStep
                    title="Imigrante"
                    onPress={() => {}}
                />
                <ButtonNextStep
                    title="Não Imigrante"
                    onPress={() => {}}
                />
            </Center>

        </VStack>
    );
}