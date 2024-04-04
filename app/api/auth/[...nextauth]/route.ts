// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// Use your own logic to authenticate users against your FastAPI backend
async function customAuthenticationFunction(credentials: any) {
    try {
        // Call your FastAPI endpoint for user authentication
        const response = await fetch("http://127.0.0.1:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (response.ok) {
            const user = await response.json();
            return user;
        } else {
            // Return null if authentication fails
            return null;
        }
    } catch (error) {
        console.error("Error during authentication:", error);
        return null;
    }
}

// export default NextAuth({
//     providers: [
//         Providers.Credentials({
//             // The name to display on the sign-in form (e.g., 'Sign in with...')
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials, req) {
//                 // Fetch user from your API
//                 const user = await customAuthenticationFunction(credentials);

//                 if (user) {
//                     // Any user object returned here will be set in the session for the user
//                     return Promise.resolve(user);
//                 } else {
//                     // If the credentials are invalid, return null
//                     // return Promise.resolve(null);
//                     throw new Error(
//                         JSON.stringify({ errors: [], status: false })
//                     );
//                 }
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt(token, user) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session(session, token) {
//             session.user.id = token.id;
//             return session;
//         },
//         async redirect({ url, baseUrl }) {
//             return baseUrl;
//         },
//     },
//     pages: {
//         error: "/login",
//         signIn: "/login",
//     },
// });

import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign-in form (e.g., 'Sign in with...')
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Fetch user from your API
                const user = await customAuthenticationFunction(credentials);

                if (user) {
                    // Any user object returned here will be set in the session for the user
                    return Promise.resolve(user);
                } else {
                    // If the credentials are invalid, return null
                    return Promise.resolve(null);
                    // throw new Error(
                    //     JSON.stringify({ errors: [], status: false })
                    // );
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            console.log(token);
            // session.user.id = token.id;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
    pages: {
        error: "/login",
        signIn: "/login",
    },
    debug: true,
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
