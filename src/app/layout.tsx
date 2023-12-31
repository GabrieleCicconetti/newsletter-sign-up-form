import './globals.css'
import type { Metadata } from 'next'
import {Inter, Roboto} from 'next/font/google'
import React from "react";

const roboto = Roboto({subsets: ['latin'], weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Newsletter sign up form',
  description: 'Frontend mentor challenge :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
