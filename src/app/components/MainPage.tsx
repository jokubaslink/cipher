"use client";

import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function MainPage() {
  const { data, status } = useSession()!;

  return (
    <div>
      {status === "loading" ? (
        <div>Loading</div>
      ) : (
        <div>
          Welcome, {data?.user?.name}.
          <Image
            width={30}
            height={40}
            src={data?.user?.image || ""}
            alt="profile picture"
          />
          <button
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
