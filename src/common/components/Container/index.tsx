import React from "react";

import { Content } from "./styles";
import { ContainerProps } from "./types";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";

const Container = ({ children }: ContainerProps) => {
    const { colors } = useTheme()

    return (
        <Content> 
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.secondary}
            />
            {children} 
        </Content>
    )
}

export default Container;