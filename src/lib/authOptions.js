import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNameObj } from "./dbConnect";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const user = await loginUser(credentials);
                console.log(user);
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                const { providerAccountId, provider } = account;
                const { email: user_email, image, name } = user;
                const userCollection = dbConnect(collectionNameObj.userCollection);
                const isExisted = await userCollection.findOne({ providerAccountId });
                if (!isExisted) {
                    const payload = { providerAccountId, provider, email: user_email, image, name };
                    await userCollection.insertOne(payload);
                }
            }
            return true;
        },
    }
};
