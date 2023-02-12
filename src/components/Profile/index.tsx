import { useTheme } from "styled-components";
import { ArrowUpRight, Building, GitHub, UserGroup } from "../Icons";
import { Avatar, Body, Container, Description, Info, InfoFooter, InfoHeader, Item, Link, ListItems, Username } from "./styles";

export function Profile() {
    const theme = useTheme();
    return (
        <Container>
            <Body>
                <Avatar loading="lazy" src="https://github.com/askagi.png" />
                <Info>
                    <InfoHeader>
                        <Username>José Costa</Username>
                        <Link href="#">
                            github
                            <ArrowUpRight size={12} color={theme.blue} />
                        </Link>
                    </InfoHeader>
                    <Description>
                        Full Stack Developer | Bacharel em Sistemas de Informação.
                        Baiano, viciado em escrever linhas de códigos e apaixonado pelas coisas simples da vida.
                    </Description>
                    <InfoFooter>
                        <ListItems>
                            <Item>
                                <GitHub size={18} color={theme["base-label"]} />
                                Askagi
                            </Item>
                            <Item>
                                <Building size={18} color={theme["base-label"]} />
                                Cubos Academy
                            </Item>
                            <Item>
                                <UserGroup size={18} color={theme["base-label"]} />
                                20 seguidores
                            </Item>
                        </ListItems>
                    </InfoFooter>
                </Info>
            </Body>
        </Container>
    )
}