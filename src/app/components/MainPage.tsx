"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

export default function MainPage({ session }: { session: Session }) {
  useEffect(() => {
    console.log(session);
  }, []);

  return (
    <div>
      maincomponent
      <button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
