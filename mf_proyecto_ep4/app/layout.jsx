import Image from 'next/image'
import './globals.css'
import { Inter , Ysabeau, Roboto, Montserrat } from 'next/font/google'
import Link from 'next/link'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'ProyectoMF',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='overflow-x-hidden'>
          <div className='w-full bg-amber-500 h-50 flex items-center justify-center gap-10'>
            <Image src="/logo-finca.jpg" width={100} height={100} alt='logo de la finca' />
            <Link className='text-xl font-bold text-center' href='/menu'>FINCA COSMOS</Link>
          </div>
          {children}
          <div className='w-full bg-amber-500 h-50 flex items-center justify-center gap-10'>
            <Image src="/logo-finca.jpg" width={100} height={100} alt='logo de la finca' />
            <Link className='text-xl font-bold text-center' href='/menu'>FINCA COSMOS</Link>
          </div>
        </div>
      </body>
    </html>
  )
}
