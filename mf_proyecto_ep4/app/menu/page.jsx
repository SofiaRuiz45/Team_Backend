'use client'

import Link from "next/link"

export default function Menu(){
    const tarjetas = [{nombre:'Produccion',direc:'/menu/produccion'},{nombre:'Recetas',direc:'/menu/recetas'},{nombre:'Stock',direc:'/menu/stock'}]
    return(
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row items-center gap-4 justify-center w-screen h-screen bg-slate-100">
            {tarjetas.map((tarj)=>{
                return (
                    <Link className='bg-amber-400 hover:bg-amber-600 transition border-blue-800 border-2 rounded w-40 h-40 text-center flex justify-center items-center' href={tarj.direc}>{tarj.nombre}</Link>
                )
            })
            }
        </div>
    )
}