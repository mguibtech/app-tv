import React from "react";

import { Container } from "./styles";
import { SpacerProps } from "./type";

const Spacer = ({ height, width }: SpacerProps) => {
    return <Container width={width} height={height}/>
}

export default Spacer;