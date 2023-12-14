import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import SignInButton from "./components/SignInButton";
import MainPage from "./components/MainPage";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session)

  return (
    <main className="min-h-screen flex items-center justify-center">
      {session ? (
        <MainPage />
      ) : (
        <div>
          <SignInButton>Sign In!</SignInButton>
        </div>
      )}
    </main>
  );
}
