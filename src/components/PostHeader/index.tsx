import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext, useEffect } from "react";
import { useTheme } from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { ArrowUpRight, BackLeft, Calendar, Comment, GitHub } from "../Icons";
import {
    Body,
    Container, InfoFooter, Item,
    Link,
    ListItems,
    Nav,
    Title
} from "./styles";

interface Props {
    issue: {
        title: string;
        body: string;
        created_at: string;
        number: number;
        html_url: string;
        comments: number;
        assignee: {
            login: string;
        }
    }
}

export function PostHeader({ issue }: Props) {
    const theme = useTheme();

    useEffect(() => {
        console.log(issue);
    }, [])
    return (
        <Container>
            <Body>
                <Nav>
                    <Link href={''}>
                        <BackLeft size={12} color={theme.blue} />
                        Voltar
                    </Link>

                    <Link href={issue.html_url}>
                        Ver no github
                        <ArrowUpRight size={12} color={theme.blue} />
                    </Link>
                </Nav>
                <Title>{issue.title}</Title>
                <InfoFooter>
                    <ListItems>
                        <Item>
                            <GitHub size={18} color={theme["base-label"]} />
                            {/* {issue.assignee.login} */}
                        </Item>
                        <Item>
                            <Calendar size={18} color={theme["base-label"]} />
                            {/* {formatDistanceToNow(new Date(issue.created_at, {
                                addSuffix: true,
                                locale: ptBR
                            })} */}
                            <span></span>
                        </Item>
                        <Item>
                            <Comment size={18} color={theme["base-label"]} />
                            {issue.comments} comentários
                        </Item>
                    </ListItems>
                </InfoFooter>
            </Body>
        </Container>
    )
}