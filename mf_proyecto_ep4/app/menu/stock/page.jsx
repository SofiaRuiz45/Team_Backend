import bdd from "@/data/bdd.json";
import { getAllStock } from "@/api"


export default async function Stock(){
    const productos = await getAllStock()
    console.log(productos)
    return(
        <div className="w-screen h-screen bg-white-500">
            {/* {
                productos.map((producto)=>{
                    return <div className="border-2 w-24 h-12 bg-slate-200">{producto.Nombre}</div>
                })
            } */}
            <div className="flex items-center justify-center h-32">
                <h1 className="text-6x1 font-bold" >STOCK DE PRODUCTOS</h1>


            </div>
            
        <div className="w-full max-w-4xl mx-auto">
                
      <table className="table-auto border border-black bg-">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad de Envases</th>
            <th>Cantidad Neta</th>
            <th>Unidad de Producto</th>
            <th>Fabricante</th>
            <th>Número de Lote</th>
            <th>Fecha de Vencimiento</th>
            <th>Cuarentena</th>
            <th>Número de Registro Interno</th>
          </tr>
        </thead>
        <tbody>
          {bdd.Stock.map((producto, index) => (
            <tr key={index}>
              <td>{producto.Nombre}</td>
              <td>{producto.CantidadDeEnvases}</td>
              <td>{producto.CantidadNeta}</td>
              <td>{producto.UnidadDeProducto}</td>
              <td>{producto.Fabricante.join(", ")}</td>
              <td>{producto.NumeroDeLote.join(", ")}</td>
              <td>{producto.FechaDeVencimiento.join(", ")}</td>
              <td>{producto.Cuarentena}</td>
              <td>{producto.NumeroDeRegistroInterno.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    )
}