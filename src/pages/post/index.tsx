import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostHeader } from "../../components/PostHeader";
import { UserContext } from "../../contexts/UserContext";
import { Body } from "./styles";
import ReactMarkdown from 'react-markdown';

export function PostPage() {
    const { fetchIssueByParams, issue } = useContext(UserContext);

    const { postNumber } = useParams()

    useEffect(() => {
        fetchIssueByParams(postNumber);
    }, [])

    return (
        <>
            <PostHeader
                issue={issue}
            />
            <Body>
                <ReactMarkdown>
                    {issue.body}
                </ReactMarkdown>
            </Body>
        </>
    )
}