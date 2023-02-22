import { Container, Logo } from "./styles";
import logo from '../../assets/logo.svg'

export function Header() {

    return (
        <Container>
            <Logo src={logo} />
        </Container>
    )
}