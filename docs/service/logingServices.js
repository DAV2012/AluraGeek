const listarLoging = (usuario , pasword) => fetch(`https://my-json-server.typicode.com/DAV2012/alurageek/loging?usuario=${usuario}&password=${pasword}`).then(respuesta=>respuesta.json())

    
export const  logingServices = {
    listarLoging,
}