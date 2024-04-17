import React from "react";
import { AiFillBulb } from "react-icons/ai";
import './Chatwebsocket.css';
import{useEffect, useState} from 'react';


function Chatwebsocket(){
  const [Mensaje, setMensaje] = useState('');
// const [mensajes, setMensajes] = useState([]);
const [mensaje, setMensajes]=
                             useState<string[]>([]);
// const [mensajes, setMensajes] = useState([]);
const [socket, setSocket] =
             useState<WebSocket | null>(null);
useEffect(()=>{
    const newSocket =
    new WebSocket('ws://localhost:8087');
    newSocket.onopen = ()=>{
        console.log('conectado');
    };
    newSocket.onmessage = (evento)=> {
        evento.data.text().then((texto:string)=>{
           console.log(texto);
           setMensajes((mAnterior)=>
            [...mAnterior, texto]);
           
        });
    };
    newSocket.onclose = ()=>{
        console.log('sesion cerrada');
    };
    setSocket(newSocket);
    return ()=>{
        newSocket.close()
    };
},[]); 
const sendMensaje = () =>{
    if(socket && Mensaje.trim()){
        setMensajes((anteriorM)=>
        [...anteriorM, Mensaje]);
        socket.send(Mensaje);
        setMensaje('')
    }
}                                             
    return(
        <>
        <div className="chat-container">
            <div className="chat-title">titulo
                Titulo {/* Titulo variable */}
            </div>    
            <div className="chat-imput-message">
                {mensaje.map((mensaje, index)=>(
                    <div className={'mensaje-azul'} key = {index}>
                        {mensaje}
                    </div>     
                ))}
            </div>
            <div className={'chat-input-message'}>
                    <input className="chat-text"
                    value={Mensaje}
                    onChange={(evento)=>
                    setMensaje(evento.target.value)}
                    onKeyDown={(evento)=>{
                    if(evento.key == 'Enter'){
                        sendMensaje();
                      }      
                    }}
                ></input>    
                </div>
            <div className="chat-imput-message">
                <input type="chat-text" />
                <div className="chat-send">
                    <AiFillBulb/>
                </div>
            </div>
        </div>                        
        </>

    )
    }
export default Chatwebsocket;