'use client'
import Image from "next/image"
import Link from "next/link"

export default function Menu(){
    const tarjetas = [{nombre:'Produccion',direc:'/menu/produccion'},{nombre:'Recetas',direc:'/menu/recetas'},{nombre:'Stock',direc:'/menu/stock'}]
    return(
        <div>
           <div className='w-full bg-amber-500 h-50 flex items-center justify-center gap-10' style={{ position: 'fixed', top: 0 }}>
            <Image src="/logo-finca.jpg" width={100} height={100} alt='logo de la finca' />
            <Link className='text-xl font-bold text-center' href='/menu'>FINCA COSMOS</Link>
          </div> 
          <div className="bg-amber-200 flex flex-col md:flex-col lg:flex-row xl:flex-row items-center gap-4 justify-center w-screen h-screen ">
            
            {tarjetas.map((tarj, index)=>{
                return (
                    <div key={index}>
                        <Link className='bg-amber-400 hover:bg-amber-600 transition border-amber-800 border-2 rounded-3xl w-40 h-60 text-center flex justify-center items-center' href={tarj.direc}>{tarj.nombre} </Link>
                    </div>
                    
                )
            })
            }
      </div>
        </div>
        
)
}