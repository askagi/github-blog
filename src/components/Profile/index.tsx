import { useContext } from "react";
import { useTheme } from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { ArrowUpRight, Building, GitHub, UserGroup } from "../Icons";
import {
    Avatar,
    Body,
    Container,
    Description,
    Info,
    InfoFooter,
    InfoHeader,
    Item,
    Link,
    ListItems,
    Username
} from "./styles";

export function Profile() {
    const theme = useTheme();
    const { user } = useContext(UserContext);
    return (
        <Container>
            <Body>
                <Avatar loading="lazy" src={user.avatar_url} />
                <Info>
                    <InfoHeader>
                        <Username>{user.name}</Username>
                        <Link href={user.html_url} target='_blank'>
                            github
                            <ArrowUpRight size={12} color={theme.blue} />
                        </Link>
                    </InfoHeader>
                    <Description>{user.bio}</Description>
                    <InfoFooter>
                        <ListItems>
                            <Item>
                                <GitHub size={18} color={theme["base-label"]} />
                                {user.login}
                            </Item>
                            <Item>
                                <Building size={18} color={theme["base-label"]} />
                                {user.company}
                            </Item>
                            <Item>
                                <UserGroup size={18} color={theme["base-label"]} />
                                {user.followers} seguidores
                            </Item>
                        </ListItems>
                    </InfoFooter>
                </Info>
            </Body>
        </Container>
    )
}