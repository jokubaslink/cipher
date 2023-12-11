"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

export default function SignInButton({children} : {children: string}) {
  return (
    <button onClick={() => {
        signIn();
      }}>{children}</button>
  )
}
