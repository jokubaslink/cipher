import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import SignInButton from "./components/SignInButton";
import MainPage from "./components/MainPage";
import { signal } from "@preact/signals";

export default async function Home() {
  const session = signal(await getServerSession(authOptions));

  return (
    <main className="min-h-screen flex items-center justify-center">
      {session.value !== null && session.value !== undefined && session.value ? (
        <MainPage />
        ) : (
          <div>
          <SignInButton>Sign In!</SignInButton>
        </div>
      )}
    </main>
  );
}
