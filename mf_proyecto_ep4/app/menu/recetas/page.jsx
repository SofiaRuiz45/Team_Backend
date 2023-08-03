import Button from "@/app/components/Button";

export default function Recetas(){
    return(
        <div className=" p-24 w-screen h-full bg-slate-100 flex flex-wrap items-center justify-center gap-4">
            
            
            <div className="bg-amber-200 border-2 border-blue-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                    JABON DE JARILLA
                </h1>
                <p className="text-blue-800 text-lg">Aceite de oliva: 500 ml</p>
                <p className="text-blue-800 text-lg">SCI: 500 g</p>
                <div className="flex justify-around">
                    <Button estilos='bg-red-500 hover:bg-red-700 transitions' contenido='Borrar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Editar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Crear'></Button>
                </div>
            </div>
            <div className="bg-amber-200 border-2 border-blue-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                    JABON DE JARILLA
                </h1>
                <p className="text-blue-800 text-lg">Aceite de oliva: 500 ml</p>
                <p className="text-blue-800 text-lg">SCI: 500 g</p>
                <div className="flex justify-around">
                    <Button estilos='bg-red-500 hover:bg-red-700 transitions' contenido='Borrar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Editar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Crear'></Button>
                </div>
            </div>
            <div className="bg-amber-200 border-2 border-blue-800 w-96 h-96 rounded justify-around flex flex-col p-4">
                <h1 className="text-base lg:text-xl xl:text-xl text-blue-800 text-center">
                    JABON DE JARILLA
                </h1>
                <p className="text-blue-800 text-lg">Aceite de oliva: 500 ml</p>
                <p className="text-blue-800 text-lg">SCI: 500 g</p>
                <div className="flex justify-around">
                    <Button estilos='bg-red-500 hover:bg-red-700 transitions' contenido='Borrar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Editar'></Button>
                    <Button estilos='bg-amber-500 hover:bg-amber-700 transitions' contenido='Crear'></Button>
                </div>
            </div>
        </div>
    )
}