import { Suspense, useContext, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import { PostHeader } from "../../components/PostHeader";
import { UserContext } from "../../contexts/UserContext";
import { Body } from "./styles";

export function PostPage() {
    const { fetchIssueByParams, issue } = useContext(UserContext);

    const { postNumber } = useParams()

    useEffect(() => {
        fetchIssueByParams(postNumber);
    }, [])

    return (
        <Suspense>
            <PostHeader
                issue={issue}
            />
            <Body>
                <ReactMarkdown>
                    {issue.body}
                </ReactMarkdown>
            </Body>
        </Suspense>
    )
}