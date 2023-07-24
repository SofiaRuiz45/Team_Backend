import Link from "next/link";

export default function Direccion({estilos,direc,contenido}){
    let style = ' text-center rounded text-sm md:text-base lg:text-xl xl:text-xl w-12 h-6  md:w-16 lg:w-20 xl:w-20 md:h-8 lg:h-10 xl:h-10  '+estilos;
    return(
        <Link href={direc} className={style}>{contenido}</Link>
    )
}