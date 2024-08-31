var fs=require('fs')
fs.mkdirSync('Solucion',(error)=>{
    if(error){
        throw error;
    }
    console.log('la carpeta de creo con exito')
})

fs.writeFileSync('./solucion/ejercicio.txt','profe paseme;c',(error)=>{
    if(error){
        throw error;
    }
    console.log('el archivo se creo con exito')
}) 
fs.unlikSync('./Solucion/ejercio.txt')

fs.rmdir('./solucion',(err)=>{
    if(err) {
        console.error(err);
    }else{
            console.log('carpeta eliminada con exito');
        }
    
})