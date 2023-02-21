import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Descriptions } from "../Descriptions";
import { Container, InputSearchComponent, Post, PublicationsContainer } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Publications() {

    const { issues } = useContext(UserContext)
    return (
        <Container>
            <Descriptions title="Publicações" subtitle={`${issues.total_count} publicações`} />
            <InputSearchComponent type="text" placeholder="Buscar conteúdo" />
            <PublicationsContainer>
                {issues.items.map((issue) => (
                    <Post key={issue.title}>
                        <Descriptions
                            title={issue.title}
                            subtitle={formatDistanceToNow(new Date(issue.created_at),
                                {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                        />
                        <p>
                            {issue.body.slice(0, 185) + '...'}
                        </p>

                    </Post>
                ))}

            </PublicationsContainer>
        </Container>
    )
}