export default function Suma({data , valor}){
    let cantidadAnterior= data.CantidadNEta;
    let cantidadNueva = cantidadAnterior+valor;
    fetch("../APIs/stock.json",{
        method: "POST",
        headers: {
          "Content-Type": "stock.json",
        },
        body: JSON.stringify(cantidadNueva),
      });
    return(console.log("suma realizada"))
}