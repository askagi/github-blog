import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useTheme } from "styled-components";
import { IssuesItems } from "../../contexts/UserContext";
import { ArrowUpRight, BackLeft, Calendar, Comment, GitHub } from "../Icons";
import {
    Body,
    Container, InfoFooter, Item, Linkcustom,
    ListItems,
    Nav,
    Title
} from "./styles";

interface Props {
    issue: IssuesItems;
}

export function PostHeader({ issue }: Props) {
    const theme = useTheme();

    return (
        <Container>
            <Body>
                <Nav>
                    <Linkcustom to='/'>
                        <BackLeft size={12} color={theme.blue} />
                        Voltar
                    </Linkcustom>

                    <a href={issue.html_url} target='_blank'>
                        Ver no github
                        <ArrowUpRight size={12} color={theme.blue} />
                    </a>
                </Nav>
                <Title>{issue.title}</Title>
                <InfoFooter>
                    <ListItems>
                        <Item>
                            <GitHub size={18} color={theme["base-label"]} />
                            {issue.assignee?.login}
                        </Item>
                        <Item>
                            <Calendar size={18} color={theme["base-label"]} />
                            {issue.created_at && formatDistanceToNow(new Date(issue.created_at),
                                {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
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