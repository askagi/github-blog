import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { githubApi } from "../services/githubApi";

interface UserContextProviderProps {
    children: ReactNode
};

interface UserType {
    name: string;
    login: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    following: number;
    html_url: string;
}

export interface IssuesItems {
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

interface IssueType {
    items: IssuesItems[];
    total_count: number;
}

interface UserContextType {
    user: UserType;
    issues: IssueType;
    issue: IssuesItems;
    fetchIssues: (query?: string) => void;
    fetchIssueByParams: (params: string | undefined) => void;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {

    const [user, setUser] = useState({} as UserType);
    const [issues, setIssues] = useState({} as IssueType);
    const [issue, setIssue] = useState({} as IssuesItems)


    async function fetchUser() {
        try {
            const response = await githubApi.get('/users/askagi');
            setUser(response.data);
            // console.log(response.data);


        } catch (error) {
            console.log(error);
        }
    }


    const fetchIssues = useCallback(async (query?: string) => {
        const queryRepository = query + `repo:askagi/github-blog is:blog`
        try {
            const response = await githubApi.get(`/search/issues`, {
                params: {
                    q: queryRepository
                }
            });
            // console.log(response.data);
            setIssues(response.data);

        } catch (error) {
            console.log(error);

        }
    }, [])


    const fetchIssueByParams = useCallback(async (params: string | undefined) => {
        try {
            const response = await githubApi.get(`/repos/askagi/github-blog/issues/${params}`);
            console.log(response.data);
            setIssue((state) => {
                return { state, ...response.data }
            });

        } catch (error) {
            console.log(error);
        }
    }, [issue]);



    useEffect(() => {
        fetchUser()
        fetchIssues('')
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            issues,
            fetchIssues,
            fetchIssueByParams,
            issue
        }}
        >
            {children}
        </UserContext.Provider>
    )
}