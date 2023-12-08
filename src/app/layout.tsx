import type { Metadata } from 'next'
import {Provider as ReduxProvider} from 'react-redux';
import './globals.css'
import store from './redux/store';
import { StoreProvider } from './redux/StoreProvider';

export const metadata: Metadata = {
  title: 'Cipher',
  description: 'connecting people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
    <html lang="en">
      <body className="min-h-screen max-w-[1200px] w-full m-auto bg-white-100 border-black border-2">{children}</body>
    </html>
    </StoreProvider>
  )
}
