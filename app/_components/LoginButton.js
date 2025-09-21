// components/LoginButton.tsx (client)
"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email}
        <button className="cursor-pointer" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <button className="cursor-pointer" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
