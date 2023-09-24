import styled from "styled-components/native";
import { SpacerProps } from "./type";

export const Container = styled.View<SpacerProps>`
    height: ${({height}) => height || 0}px;
    width: ${({width}) => width || 0}px;
`;