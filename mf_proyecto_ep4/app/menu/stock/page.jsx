import { getAllStock } from "@/api"


export default async function Stock(){
    const productos = await getAllStock()
    console.log(productos)
    return(
        <div className="w-screen h-screen bg-blue-500">
            {
                productos.map((producto)=>{
                    return <div className="border-2 w-24 h-12 bg-slate-200">{producto.Nombre}</div>
                })
            }
        </div>
    )
}