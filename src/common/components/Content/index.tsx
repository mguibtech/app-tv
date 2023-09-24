import { Container } from "./styles";
import { ContentProps } from "./type";

export function Content({ children }: ContentProps){
    return(
        <Container>
            {children}
        </Container>
    )
}