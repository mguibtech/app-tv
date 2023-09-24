import { Pressable, useWindowDimensions } from "react-native";
import { Container, AbsoluteIcon, CenterIconAndImage, ShowCoverImage } from "./styles";
import { ShowCoverProps } from "./types";
import { useTheme } from "styled-components";
import { useMemo } from "react";
import { Icon } from "../Icon";
import Spacer from "../Spacer";
import Text from "../Text";
import React from "react";

function ShowCover({ onpress, url, title }: ShowCoverProps) {

    const aspecRatio = 9 / 12.5;
    const widthPercentage = 0.45;

    const { width } = useWindowDimensions()
    const { spacing, colors } = useTheme()

    const widthShowCover = useMemo(() => width * widthPercentage, [width])

    return (
        <Pressable
            onPress={onpress}
            accessibilityLabel={title}
            accessibilityRole="button"
        >
            <Container width={widthShowCover}>
                <CenterIconAndImage>
                    <ShowCoverImage
                        hasBackground={!url}
                        source={{ uri: url }}
                        resizeMode="contain"
                        style={{
                            aspectRatio: aspecRatio,
                            width: widthShowCover
                        }}
                    />
                    {!url && (
                        <AbsoluteIcon>
                            <Icon icon="picture" size={40} color={colors.caption} />
                        </AbsoluteIcon>
                    )}
                </CenterIconAndImage>
                {!!title && (
                    <>
                        <Spacer height={spacing.sm} />
                        <Text numberOfLines={1} color="caption">
                            {title}
                        </Text>
                    </>
                )}
            </Container>

        </Pressable>
    )
}

export default React.memo(ShowCover)