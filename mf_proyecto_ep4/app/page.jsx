'use client'
import Image from 'next/image'
import fetchGet from './function/fetchGET'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={()=>fetchGet("stock")}>aca</button>
    </main>
  )
}
