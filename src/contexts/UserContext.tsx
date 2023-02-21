import { createContext, ReactNode, useEffect, useState } from "react";
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

interface IssuesItems {
    title: string;
    body: string;
    created_at: string;
}

interface IssueType {
    items: IssuesItems[];
    total_count: number;
}

interface UserContextType {
    user: UserType;
    issues: IssueType;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {

    const [user, setUser] = useState({} as UserType);
    const [issues, setIssues] = useState({} as IssueType);


    async function fetchUser() {
        try {
            const response = await githubApi.get('/users/askagi');
            setUser(response.data);
            console.log(response.data);


        } catch (error) {
            console.log(error);
        }
    }

    async function fetchIssues() {
        try {
            const response = await githubApi.get('/search/issues?q=repo:askagi/github-blog');
            console.log(response.data);
            setIssues(response.data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchUser()
        fetchIssues()
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            issues
        }}
        >
            {children}
        </UserContext.Provider>
    )
}