import IconoClima from "./iconoClima.js/iconoClima";
import ChangeTemp from "./changeTemp/changeTemp";
import { useState } from "react";
import './appClima.css'

const AppClima = ({name, country, weather, temp, dataA, render}) =>{

    console.log(render)
    //! Variable constante cambio de fondo
    const climaActual = weather.map((clima) => clima.main);
    //? Estados de los elementos
    const [ type , setType] = useState('C')
    const [ databoton , setDataBoton ] = useState('Faren');

    //*Lista de climas
    const icon = weather.map((clima) => <IconoClima pic={clima.main} desc={clima.description} data={dataA} key={clima.id}/>)


    //? Funciones
    const changeAll = () =>{
        if(type === 'C'){
            setType('F')
            setDataBoton('Centigrados')
        }else{
            setType('C')
            setDataBoton('Faren')
        }
    }
    
    console.log(climaActual)
    //! Renderizado Condicional
    if(render){
        return(
            <div className={`container ${climaActual[0]}`}>
               <div className="info">
                {icon}
               </div>
               <div className="titulo">
                    <h2>{`${name} - ${country}`}</h2>
                    <ChangeTemp temp={temp} mood={type}/>
                    <button onClick={changeAll}>Change {databoton}</button>  
                </div>       
            </div>
        )
    }else{
        return(
            <div className="load">
                <div className="spiner"></div>
            </div>
        )
    }
    
}

export default AppClima;