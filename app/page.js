"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  // if(!session){
  //   redirect("/signin")
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello world this is new project by zedro/razal
      {session ? (
        <button onClick={() => signOut()}>Sign Out in {session.user.email} </button>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with Github</button>
      )}
    </div>
  );
}
