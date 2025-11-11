"use client";


import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <h1>Page Not Found - <span className="cursor-pointer underline" onClick={() => router.push("/")}>Click here to visit Home </span></h1>
    )
}

export default NotFound;