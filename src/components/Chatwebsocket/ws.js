const WebSocket = requize('ws');

const wss = new WebSocket.Server({port:8087})
wss.on('connection:', (ws)=>{
    console.log('nueva conexion');
    // ws.on  ESCUCHAN
    ws.on('MENSAJE', (data)=>{
        console.log('mensaje:${data}');
        wss.clients.foeEach((cliente)=>{
        if(!cliente !==ws &&
        cliente.readyState == WebSocket.OPEN){
            cliente.send(data);
        }       
        });
            
        });

    ws.on('close',()=>{
        console.log('usuario desconectado');

 console('usuario desconectado');
}); 
});