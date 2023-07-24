const baseUrl = 'http://localhost:3001'

export const getAllMateria = async ()=>{
    const res = await fetch(`${baseUrl}/materia`);
    const materia = await res.json();
    return materia;
}

export const getAllStock = async ()=>{
    const res = await fetch(`${baseUrl}/stock`);
    const stock = await res.json();
    return stock;
}
export const getAllRecetas = async ()=>{
    const res = await fetch(`${baseUrl}/recetas`);
    const recetas = await res.json();
    return recetas;
}