import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import SignInButton from "./components/SignInButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen flex items-center justify-center">
      {session ? <div>Logged IN</div> : <div><SignInButton>Sign In!</SignInButton></div>}
    </main> 
  );
}

