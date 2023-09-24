import Icons from "../../constants/icons"
import { Container } from "./styles"
import { IconProps } from "./types"

export function Icon({ icon, size = 20, color, style, ...rest }: Omit<IconProps, 'source'>){
    return(
        <Container size={size} source={Icons[icon]} style={[{tintColor: color}, style]} resizeMode="contain" {...rest}/>
    )
}