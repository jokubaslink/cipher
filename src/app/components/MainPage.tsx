import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { authOptions } from "../../../auth";
import { signal } from "@preact/signals";

export default async function MainPage() {
/*   const { data, status } = useSession()!;

  console.log(data);
 */

  const userData = signal(await getServerSession(authOptions));

  console.log(userData);

  return (
    <div>
      {!userData.value ? (
        <div>Loading</div>
      ) : (
        <div>
          Welcome, {userData.value.user?.name}
          <Image
            width={30}
            height={40}
            src={userData.value.user?.image || ""}
            alt=""
          />
   {/*        <button
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            Sign Out
          </button> */}
        </div>
      )}
    </div>
  );
}
