import { useTheme } from "styled-components";
import { Container } from "./styles";
import { NotFoundProps } from "./types";
import Spacer from "../Spacer";
import Text from "../Text";
import { Icon } from "../Icon";

export function NotFound({ icon = "noResults", color, title } : NotFoundProps){
    const { colors, spacing } = useTheme()

    return(
        <Container>
            <Icon icon={icon} size={100} color={color || colors.caption}/>
            <Spacer height={spacing.md}/>
                {!!title && (
                    <Text color="caption" size={20}>
                        {title}
                    </Text>
                )}
            
        </Container>
    )
}