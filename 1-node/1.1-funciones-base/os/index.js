const os = require('os')

console.log('version del sistema: ', os.version())

console.log('Arquitectura: ', os.arch())
console.log('Da información acerca de los cpu s: ',os.cpus())
console.log('Número de procesadores lógicos: ', os.cpus().length)
console.log('Memoria libre en bytes: ', os.freemem())
console.log('Carpeta del usuario actual: ', os.homedir())
console.log('Mi dirección IP o mi hostname (local):', os.hostname())
console.log('Nombre de la versión del sistema: ', os.platform())
console.log('Número de la versión del sistema: ', os.release())
console.log('Versión del sistema detallada: ', os.version())