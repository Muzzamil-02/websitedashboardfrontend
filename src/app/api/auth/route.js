import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy user authentication (Replace with real DB check)
        const user = { id: "1", email: credentials.email };

        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "password"
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to the login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
