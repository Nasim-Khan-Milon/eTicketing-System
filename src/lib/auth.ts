import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectToDb from "./db"
import User from "@/models/user.model"
import bcrypt from "bcryptjs"

const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "<email>" },
                password: { label: "Password", type: "password", placeholder: "<password>" }
            },
            async authorize(credentials, req) {

                const email = credentials?.email;
                const password = credentials?.password;
                if (!email || !password) {
                    return null;
                }

                await connectToDb();
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("No user found with the given email")
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    image: user.image || null
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.image = token.image as string | null;
            }

            return session;
        }
    },

  session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
  },

    pages: {
        signIn: '/login',
        error: '/login',
    },

    secret: process.env.NEXTAUTH_SECRET,
}

export default authOptions