import { useContext, useEffect } from "react";
import { Profile } from "../components/Profile";
import { Publications } from "../components/Publications";
import { UserContext } from "../contexts/UserContext";
import { githubApi } from "../services/githubApi";

export function Home() {
    return (
        <>
            <Profile />
            <Publications />
        </>
    )
}