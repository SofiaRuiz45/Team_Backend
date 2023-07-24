'use client'

import { getAllMateria, getAllStock } from "@/api"
import { useEffect, useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import { useRouter } from "next/navigation"
import Direccion from "./components/Direccion"

export default function Home() {

  return (
    <main className="flex h-screen flex-col justify-center items-center p-24 bg-slate-100">
      <form className="flex flex-col gap-4 items-center">
        <h2 className="text-blue-900 text-sm md:text-lg xl:text-xl lg:text-xl">Usuario</h2>
        <Input estilos={'text-slate-900'} place={'Ingrese un usuario'} tipo='text'></Input>
        <h2 className="text-blue-900 text-sm md:text-lg xl:text-xl lg:text-xl">Contrasena</h2>
        <Input estilos={'text-slate-900'} place={'Ingrese una contrasena'} tipo='password'></Input>
        <Direccion estilos='bg-amber-500 hover:bg-amber-600 transition' direc='/menu'contenido={'Ingresar'} ></Direccion>
      </form>
    </main>
  )
}