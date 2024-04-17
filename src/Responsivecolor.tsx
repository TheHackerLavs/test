import React from "react";
import "./Responsivecolor.css"
function Responsivecolor(){
    const cambioColor = (color:string)=>{
        const element = document.getElementById('colores') as HTMLDivElement;
        if(color.length ==6){
            element.style.background = "#" + color;
        }
    };
    const cambioFont = (font:string)=>{
        const element = document.getElementById('colores') as HTMLDivElement;
        element.style.fontFamily = font;
    }
    return(
        <>
        <div className="colores" id="colores">
        <input onChange={(e)=>{
            cambioColor(e.target.value)
        }} className="input-color"></input>
        <input onChange={(e)=>{
            cambioFont(e.target.value)
        }} className"input-color"></input>   
    
        </div>
        </>
    );
}