const express = require('express')
const app = express()
const port = 8080

app.get("/info", (req, res)=>{

    console.log(`Carpeta: ` + process.execPath() );
    console.log(`Versión de Node: ` + process.version() ); 
    console.log(`Sistema operativo: ` + process.platform() );
    console.log(`Uso de la memoria: ` + process.memoryUsage() );
    console.log(`Process ID: ` + process.pid() )
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
  })