// importamos "https" de node, para poder realizar solicitudes a las url de la api
const https = require('https');

// URLs de la API
const apiUrls = {
  ability: "https://pokeapi.co/api/v2/ability/",
  berry: "https://pokeapi.co/api/v2/berry/",
  
  // ... Resto de las URLs
};

// Función para realizar una solicitud GET a la API utilizando https
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // https.get es usado para realizar una solicitud a GET a la URL 
    https.get(url, (response) => {
      let data = '';
    //   data es un evento para ir acumulando los datoos,
      response.on('data', (chunk) => {
        data += chunk;
      });
    
      response.on('end', () => {
        //parseando los datos acumulador como JSON
        resolve(JSON.parse(data));
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Función para mostrar los resultados por consola
async function mostrarResultados() {
  // Iterar(recorer los elementos) sobre las propiedades del objeto API
  for (const key in apiUrls) {
    const url = apiUrls[key];
    try {

        //fetchData es una funcion que recibe las URLs.
      const data = await fetchData(url);
    //    ${key} imprime el no,¿mbre de la propiedad actual
      console.log(`Resultados para ${key}:`, data);


    } catch (error) {
      console.log(`Error al obtener los resultados para ${key}:`, error);
    }
  }
}

// Ejecutar la función para mostrar los resultados
mostrarResultados();
