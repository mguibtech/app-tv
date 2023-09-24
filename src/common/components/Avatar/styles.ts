import styled from "styled-components/native";
import { AvatarProps } from "./types";
import { Icon } from "../Icon";

export const Container = styled.View`
    align-items:center;
    justify-content: center;
`;

export const Content = styled.Image<Partial<AvatarProps>>`
    width: ${({size}) => (size === 'large' ? 150 : 60)}px;
    height: ${({size}) => (size === 'large' ? 150 : 60)}px;
    border-radius: ${({size}) => (size === 'large' ? 75 : 35)}px;
    background-color: ${({theme}) => theme.colors.surface};
`;


export const AbsoluteIcon = styled(Icon)`
    position: absolute;
`;