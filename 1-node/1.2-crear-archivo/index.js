const fs = require('fs')

const path = './1-node\\1.2-crear-archivo'
const nameFile = 'my-file.txt'
//Path Absoluto: C:\Users\HOME\Documents\js-avanzado-RS\1-node\1.2-crear-archivo
//Path Relativo: 1-node\1.2-crear-archivo
const contentForFile = 'Esto lo escribí desde node'
const filePath = `${path}/${nameFile}`
fs.writeFile(filePath, contentForFile, (err)=>{
    if(err){
        throw err
    }else{
        console.log('Archivo creado exitosamente...!')
    }
})