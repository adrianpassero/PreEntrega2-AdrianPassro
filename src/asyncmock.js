const productos = [
    {id:"1", nombre:"Royal Caning - Calm Feline ", precio: 10.070, img:"../img/calm-feline.webp", idCat: "1"},
    {id:"2", nombre:"Royal Caning - Diabetic Feline ", precio: 15.155, img:"../img/diabetic-feline.webp", idCat: "1"},
    {id:"3", nombre:"Royal Caning - Early Renal feline ", precio: 11.835, img:"../img/early-renal-feline.webp", idCat: "1"},
    {id:"4", nombre:"Royal Caning - Gastro Fibre Response Feline ", precio: 17.05, img:"../img/gastro-fibre-response-feline.webp", idCat: "2"},
    {id:"5", nombre:"Royal Caning - Gastrointestinal Feline ", precio: 16.705, img:"../img/gastrointestinal-feline.webp", idCat: "2"},
    {id:"6", nombre:"Royal Caning - Gastrointestinal mod Calorie Feline ", precio: 16.780, img:"../img/gastrointestinal-mod-calorie-feline.webp", idCat: "2"},
    {id:"7", nombre:"Royal Caning - Gatos Castrados Weight Control Feline ", precio: 4.240, img:"../img/gatos-castrados-weight-control-feline.webp", idCat: "3"},
    {id:"8", nombre:"Royal Caning - Hepatic Feline ", precio: 12.580, img:"../img/hepatic-feline.webp", idCat: "3"},
    {id:"9", nombre:"Royal Caning - Hypoallergenic Feline ", precio: 18.835, img:"../img/hypoallergenic-feline.webp", idCat: "3"},
    {id:"10", nombre:"Royal Caning - Mature Consult Feline ", precio: 12.225, img:"../img/mature-consult-feline.webp", idCat: "3"},
    {id:"11", nombre:"Royal Caning - Renal Feline", precio: 14.845, img:"../img/renal-feline.webp", idCat: "4"},
    {id:"12", nombre:"Royal Caning - Satiety Support Feline ", precio: 11.360, img:"../img/satiety-support-feline.webp", idCat: "4"},
    {id:"13", nombre:"Royal Caning - Urinary Feline ", precio: 4.210, img:"../img/urinary-feline.webp", idCat: "4"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () =>{
        resolve (productos)
        }, 500)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () =>{
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        }, 500)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 500)
    })
}