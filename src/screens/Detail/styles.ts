import { Platform } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../common/constants/styles/colors";

const isIos = Platform.OS === "ios";

export const RowCover = styled.View`
    flex-direction: row;
`;

export const RowFavorite = styled.Pressable`
    flex-direction: row;
    align-items: center;
`;

export const RowButtonSeason = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-radius: ${({theme}) => isIos ? theme.borders.radius.small : 0}px;
`;

export const ContentttonSeason = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${({theme}) => !isIos ? theme.spacing.sm : 0}px;
    background-color: ${({theme}) => ! isIos ? colors.surface : 'transparent'};
`;


