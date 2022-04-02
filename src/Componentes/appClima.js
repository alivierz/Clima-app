import IconoClima from "./iconoClima.js/iconoClima";
import ChangeTemp from "./changeTemp/changeTemp";
import { useState } from "react";
import './appClima.css'

const AppClima = ({cond, name, country, weather, temp, dataA}) =>{

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
    

    //! Renderizado Condicional
    if(cond === 0){
        return(
            <div className="load">
                <div className="spiner"></div>
            </div>
        )
    }else{
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
    }
    
}

export default AppClima;