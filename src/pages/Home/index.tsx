import { Suspense } from "react";
import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publications";

export function Home() {
    return (
        <Suspense>
            <Profile />
            <Publications />
        </Suspense>
    )
}