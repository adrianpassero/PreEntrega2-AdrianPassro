const productos = [
    {id:"1", nombre:"Royal Caning - Calm Feline ", precio: 10.075, img:"../img/calm-feline.webp", idCat: "1", descripcion: "Alimento adecuado para gatos que sufren situaciones estresantes en momentos determinados de su vida: llegada de un nuevo animal a casa, viajes en coche, mudanzas, fiestas de fin de año y trastornos de comportamiento."},
    {id:"2", nombre:"Royal Caning - Diabetic Feline ", precio: 15.155, img:"../img/diabetic-feline.webp", idCat: "1", descripcion: "Alimento para gatos que requieren una regulación del aporte de glucosa (Diabetes Mellitus)."},
    {id:"3", nombre:"Royal Caning - Early Renal feline ", precio: 11.835, img:"../img/early-renal-feline.webp", idCat: "1", descripcion: ""},
    {id:"4", nombre:"Royal Caning - Gastro Fibre Response Feline ", precio: 17.058, img:"../img/gastro-fibre-response-feline.webp", idCat: "2", descripcion: ""},
    {id:"5", nombre:"Royal Caning - Gastrointestinal Feline ", precio: 16.705, img:"../img/gastrointestinal-feline.webp", idCat: "2", descripcion: "Un alimento para gatos, formulado para contribuir al control de los desórdenes intestinales agudos que afectan la absorción y para promover la recuperación nutricional y la convalecencia. Este alimento contiene ingredientes de alta digestibilidad, un nivel elevado de electrolitos y nutrientes esenciales. Contenido energético elevado."},
    {id:"6", nombre:"Royal Caning - Gastrointestinal mod Calorie Feline ", precio: 16.785, img:"../img/gastrointestinal-mod-calorie-feline.webp", idCat: "2", descripcion: "Un alimento para gatos adultos formulado para contribuir al control de los desórdenes intestinales agudos que afectan la absorción y para promover la recuperación nutricional y la convalecencia. Este alimento contiene ingredientes de alta digestibilidad, un nivel incrementado de electrolitos y nutrientes esenciales. Su contenido moderado en calorías lo vuelve particularmente adecuado para gatos en los cuales es difícil mantener el peso ideal (castrados, con sobrepeso o sedentarios)."},
    {id:"7", nombre:"Royal Caning - Gatos Castrados Weight Control Feline ", precio: 4.249, img:"../img/gatos-castrados-weight-control-feline.webp", idCat: "3", descripcion: "Un alimento para gatos adultos castrados que ayuda a mantenerlos en estado óptimo de salud"},
    {id:"8", nombre:"Royal Caning - Hepatic Feline ", precio: 12.585, img:"../img/hepatic-feline.webp", idCat: "3", descripcion: "Un alimento para gatos adultos en mantenimiento, formulado para contribuir al sostén de la función del hígado durante y después de un trastorno hepático."},
    {id:"9", nombre:"Royal Caning - Hypoallergenic Feline ", precio: 18.835, img:"../img/hypoallergenic-feline.webp", idCat: "3", descripcion: "Alimento para gatos adultos, formulado con fuentes seleccionadas de proteína y carbohidratos adecuadas para el manejo de reacciones adversas a ingredientes."},
    {id:"10", nombre:"Royal Caning - Mature Consult Feline ", precio: 12.225, img:"../img/mature-consult-feline.webp", idCat: "3", descripcion: "Alimento para gatos adultos maduros (mayores a 7 años) sin signos visibles de envejecimiento que ayuda a mantenerlos en estado óptimo de salud, contribuyendo a limitar el aumento de peso."},
    {id:"11", nombre:"Royal Caning - Renal Feline", precio: 14.845, img:"../img/renal-feline.webp", idCat: "4", descripcion: "Un alimento para gatos formulado para el soporte de la función renal en caso de insuficiencia renal crónica. Contribuye también a reducir la formación de cálculos de oxalato cuando la función renal está comprometida"},
    {id:"12", nombre:"Royal Caning - Satiety Support Feline ", precio: 11.365, img:"../img/satiety-support-feline.webp", idCat: "4", descripcion: "Un alimento completo de prescripción para gatos adultos formulado para contribuir a una reducción del exceso de peso. Este alimento contiene un bajo nivel energético."},
    {id:"13", nombre:"Royal Caning - Urinary Feline ", precio: 4.219, img:"../img/urinary-feline.webp", idCat: "4", descripcion: "Alimento para gatos adultos, formulado para promover una alta dilución urinaria, ayudando a la disolución de cálculos de estruvita. Contribuye al manejo nutricional de los cálculos de oxalato de calcio y de estruvita, reduciendo su recurrencia mediante el uso único de esta dieta."}
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