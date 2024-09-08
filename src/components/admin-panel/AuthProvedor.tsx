"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
    children: ReactNode
}

const AuthProvedor = ({children}: PropsType) => {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvedor