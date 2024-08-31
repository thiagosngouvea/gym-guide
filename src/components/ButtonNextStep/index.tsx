import React from "react";

import { Button } from "native-base";

interface Props {
    onPress: () => void;
    title: string;
}


export function ButtonNextStep({
    onPress,
    title,
    ...rest
}: Props) {
    return (
        <Button
            bg="white"
            _pressed={{ 
                opacity: 0.5,
                color: "white",
                bg: "red.600",
                _text: {
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "lg",
                }
            }}
            _text={{
                color: "red.600",
                fontWeight: "bold",
                fontSize: "lg",
            }}
            w="100%"
            h="10%"
            shadow={4}
            flexDirection="column"
            p="2"
            my={2}
            onPress={onPress}
            {...rest}
        >
            {title}
        </Button>
    );
}