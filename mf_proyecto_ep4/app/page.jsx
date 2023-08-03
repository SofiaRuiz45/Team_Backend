'use client'

import { getAllMateria, getAllStock } from "@/api"
import { useEffect, useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import { useRouter } from "next/navigation"
import Direccion from "./components/Direccion"
  

export default function Home() {

  return (
    
    <main className="flex h-screen flex-col justify-center items-center p-24 bg-slate-100 bg-cover bg-image" style={{ backgroundImage: "url('/foto.png')" }}>
     
      <form className="flex flex-col gap-4 items-center border" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "25px" }}>
        <h2 className="text-blue-900 text-sm md:text-lg xl:text-xl lg:text-xl">Usuario</h2>
        <Input estilos={'text-slate-900'} place={'username'} tipo='text'></Input>
        <h2 className="text-blue-900 text-sm md:text-lg xl:text-xl lg:text-xl">Contrasena</h2>
        <Input estilos={'text-slate-900'} place={'password'} tipo='password'></Input>
        <Direccion estilos='bg-emerald-300 hover:bg-emerald-600 transition w-40' direc='/menu'contenido={'Ingresar'} ></Direccion>
        <div></div>
      </form>
    </main>
  )
}