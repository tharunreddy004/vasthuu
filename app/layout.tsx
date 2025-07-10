// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import type { ReactNode } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import WhatsAppButton from '../components/WhatsAppButton';

// export const metadata = {
//   title: 'Vastu Harmony',
//   description: 'Professional Vastu Consultation Services',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       {/* <body className="bg-gray-50 min-h-screen flex flex-col"> */}
//       <body className="bg-yellow-100">
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//         <WhatsAppButton />
//       </body>
//     </html>
//   );
// }



import React from 'react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

// If you are importing fonts but not using them, remove or apply them properly
// import { Geist, Geist_Mono } from 'next/font/google'
// const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
// const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Vastu Harmony',
  description: 'Professional Vastu Consultation Services',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className="bg-yellow-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
