import Button from "@/app/components/Button";
export default function Produccion(){
    return(
        <div className=" p-24 w-screen h-full bg-slate-100 flex flex-wrap items-center justify-center gap-4">
            <div className="bg-amber-200 border-2 border-amber-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                    Vinos
                </h1>
                <div className="flex items-center justify-center"> {/* Agregado */}
                    <img src="/vino.jpg" alt="crema" width={260} height={260} />
                </div>
                
                <div className="flex justify-around">
                    
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Producir'></Button>

                </div>
            </div>
            <div className="bg-amber-200 border-2 border-amber-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                    JABON DE JARILLA
                </h1>
                <div className="flex items-center justify-center"> {/* Agregado */}
                    <img src="/jabon.jpg" alt="crema" width={260} height={260} />
                </div>
                
                <div className="flex justify-around">
                    
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Producir'></Button>
                    
                </div>
            </div>
            <div className="bg-amber-200 border-2 border-amber-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                Crema de lavanda
                </h1>
                <div className="flex items-center justify-center"> {/* Agregado */}
                    <img src="/crema.jpg" alt="crema" width={260} height={260} />
                </div>
                
                <div className="flex justify-around">

                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Producir'></Button>
                    
                </div>
            </div>
      </div>
    )
}