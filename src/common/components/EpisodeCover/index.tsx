import { View } from "react-native";
import { Container, AbsoluteIconEpsodeCover } from "./styles";
import { EpisodeCoverProps } from "./types";
import { Icon } from "../Icon";
import { useTheme } from "styled-components";

const aspectRatio = 16/9;

export function EpisodeCover({ name, size = 'small', url }: EpisodeCoverProps) {

    const {colors} = useTheme()

    return (
        <View>
            <Container
                size={size}
                accessibilityLabel={name}
                accessibilityRole="image"
                source={{uri: url}}
                resizeMode="contain"
                style={{aspectRatio}}
            />
            {!url &&(
                <AbsoluteIconEpsodeCover>
                    <Icon icon="picture" color={colors.caption}/>
                </AbsoluteIconEpsodeCover>
            )}
        </View>
    )
}