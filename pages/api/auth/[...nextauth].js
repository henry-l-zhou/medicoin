import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      return '/homepage'; // Redirect to homepage after successful sign in
    },
    async redirect(url, baseUrl) {
      return baseUrl
    }
  }
})