import "../globals.css";
import "../../public/assets/sass/styles.scss";

import { permanentRedirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { NextAuthProvider } from "@/app/components/NextAuthProvider";
import { AOSInit } from "@/app/components/aos-init";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = async ({children}) => {
    const session = await getServerSession(authOptions);
    if (!session) permanentRedirect('/login');

    return (
        <NextAuthProvider session={session}>
            <html lang="en">
            <AOSInit/>
            <body>
            {children}
            </body>
            </html>
        </NextAuthProvider>
    )
}

export default DashboardLayout;