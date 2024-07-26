import { auth, signOut } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </main>
  );
}
