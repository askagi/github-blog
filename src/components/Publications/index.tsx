import { yupResolver } from '@hookform/resolvers/yup';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { UserContext } from "../../contexts/UserContext";
import { Descriptions } from "../Descriptions";
import { Container, InputSearchComponent, Post, PublicationsContainer } from "./styles";
import ReactMarkdown from 'react-markdown';


const searchFormschema = yup.object().shape({
    query: yup.string()
});

type SearchFormInput = yup.InferType<typeof searchFormschema>

export function Publications() {

    const { issues, fetchIssues } = useContext(UserContext);

    const { handleSubmit, register } = useForm<SearchFormInput>({
        resolver: yupResolver(searchFormschema),
    });

    async function handleSearchIssues(data: SearchFormInput) {
        fetchIssues(data.query);
    }

    const navigate = useNavigate()

    return (
        <Container>
            <Descriptions title="Publicações" subtitle={`${issues.total_count} publicações`} />
            <form onSubmit={handleSubmit(handleSearchIssues)}>
                <InputSearchComponent
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </form>
            <PublicationsContainer>
                {issues.items && issues.items.map((issue) => (
                    <Post
                        onClick={() => navigate(`/posts/${issue.number}`)}
                        key={issue.title}>
                        <Descriptions
                            title={issue.title}
                            subtitle={formatDistanceToNow(new Date(issue.created_at),
                                {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                        />
                        <ReactMarkdown>
                            {issue.body.slice(0, 185) + '...'}
                        </ReactMarkdown>
                    </Post>
                ))}

            </PublicationsContainer>
        </Container>
    )
}