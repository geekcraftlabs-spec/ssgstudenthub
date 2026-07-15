import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { JWT } from "next-auth/jwt";

// Temporary users for testing
const users = [
  {
    id: "1",
    email: "test@school.com",
    password: "$2a$10$N9qo8uLOickgx2ZMRZoMy.Mr/.cWx5rJ5UoM5QYVcZxU8VZvVZvV2", // "Test123!"
    role: "STUDENT",
    full_name: "Test Student",
    school_id: "1",
    grade: "Grade 8"
  }
];

async function findUser(email: string) {
  return users.find(u => u.email === email) || null;
}

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    fullName?: string;
    schoolId?: string;
    grade?: string;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
      fullName?: string;
      schoolId?: string;
      grade?: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    role?: string;
    fullName?: string;
    schoolId?: string;
    grade?: string;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await findUser(credentials.email);
        if (!user || !user.password) return null;
        
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;
        
        return {
          id: user.id,
          email: user.email,
          role: user.role || 'STUDENT',
          fullName: user.full_name || '',
          schoolId: user.school_id || '',
          grade: user.grade || '',
        };
      },
    }),
  ],
  session: { 
    strategy: "jwt" as const 
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
        token.fullName = user.fullName;
        token.schoolId = user.schoolId;
        token.grade = user.grade;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.fullName = token.fullName as string;
        session.user.schoolId = token.schoolId as string;
        session.user.grade = token.grade as string;
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut } = NextAuth(authOptions);
export const GET = handlers.GET;
export const POST = handlers.POST;