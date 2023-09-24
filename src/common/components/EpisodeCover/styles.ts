import styled from "styled-components/native";
import { EpisodeCoverProps } from "./types";
import { Platform } from "react-native";

export const Container = styled.Image<Partial<EpisodeCoverProps>>`
    width: ${({size}) => size === "small" ? 100 : size === "medium" ? 200 : 300};
    background-color: ${({theme}) => theme.colors.surface};
    border-radius: ${({theme}) => Platform.OS === "ios" ?  theme.borders.radius.small : 0};
`;

export const AbsoluteIconEpsodeCover = styled.View`
    position: absolute;
    left: 40%;
    top: 40%;
`;