import { useTheme } from "styled-components";
import { Container, AbsoluteIcon, Content, AbsoluteLoading } from "./styles";
import { InputProps } from "./types";
import { ActivityIndicator, Platform } from "react-native";
import { Icon } from "../Icon";

export function Input({ loading, ...rest }: InputProps) {
    const { colors } = useTheme()

    return (
        <Container>
            <Content placeholder="Buscar" placeholderTextColor={colors.caption} {...rest} />
            {loading && <AbsoluteLoading>
                <ActivityIndicator color={colors.onSecondary} size={Platform.OS === 'ios' ? 'small' : 'large'} />
            </AbsoluteLoading>}
            <AbsoluteIcon>
                <Icon  icon="magnify" color={colors.caption} />
            </AbsoluteIcon>
        </Container>
    )
}