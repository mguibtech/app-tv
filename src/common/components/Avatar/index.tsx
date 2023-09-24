import { useTheme } from "styled-components";
import { Container, Content, AbsoluteIcon } from "./styles";
import { AvatarProps } from "./types";

export function Avatar({ name, size, url } : AvatarProps){
    const { colors } = useTheme()
    return(
        <Container>
            <Content
                source={{uri: url}}
                size={size}
                resizeMode="cover"
                alt="Imagem do Usuario"
                accessibilityRole="image"
                accessibilityLabel={name}
            >

            </Content>
            {!url && <AbsoluteIcon icon="person" size={20} color={colors.caption}/>}
        </Container>
    )
}