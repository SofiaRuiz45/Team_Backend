'use client'
import { useRouter } from "next/navigation";

export default function Button({estilos,funcion,contenido}){
    let style = 'rounded text-sm md:text-base lg:text-xl xl:text-xl w-12 h-6  md:w-16 lg:w-20 xl:w-20 md:h-8 lg:h-10 xl:h-10  '+estilos;
    const router= useRouter()
    return(
        <button className={style} >{contenido}</button>
    )
}