async function fetchGet(tipo){
    if(tipo=="stock"){
        const response = await fetch("../apis/stock.json");
        const stock = await response.json();
        console.log(stock);
    }
    else if (tipo=="materia"){
        const response = await fetch("../apis/materia.json");
        const materia = await response.json();
        console.log(materia);
    }
    else if(tipo=="recetas"){
        const response = await fetch("../apis/recetas.json");
        const recetas = await response.json();
        console.log(recetas);
    }
    else{
        console.log("No se encontro esta base de datos")
    }
}

export default fetchGet;