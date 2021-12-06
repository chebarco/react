const productos = [
    {id:1,imagenes: '../imagenes/chocoamargoconsal.jpg',nombre:"Choco Amargo", precio: "$150"},
    {id:2,imagenes: '../imagenes/chocoamargoconte.jpg',nombre:"Choco Amargo con te",precio: "$150"},
    {id:3,imagenes: '../imagenes/chocoamargosinazucar.jpg',nombre:"Choco Amargo sin azucar",precio: "$150"},
    {id:4,imagenes: '../imagenes/chocoblanco.jpg',nombre:"Choco Blanco",precio: "$150"}

];

export const Fetch = new Promise ((resolve) => {

    setTimeout(()=>{
        resolve(productos)
    }, 3000)


})

