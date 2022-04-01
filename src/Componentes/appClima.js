import IconoClima from "./iconoClima.js/iconoClima";
import ChangeTemp from "./changeTemp/changeTemp";
import { useState } from "react";

const AppClima = ({cond, name, country, weather, temp}) =>{


    //? Estados de los elementos
    const [ type , setType] = useState('C')
    const [ databoton , setDataBoton ] = useState('Faren')

    
    //*Lista de climas
    const icon = weather.map((clima) => <IconoClima pic={clima.main} desc={clima.description} key={clima.id}/>)


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
            <h2>Hola</h2>
        )
    }else{
        return(
        <div>
           <h2>{`${name} - ${country}`}</h2> 
           {icon}
           <ChangeTemp temp={temp} mood={type}/>
           <button onClick={changeAll}>Change {databoton}</button>
        </div>
    )
    }
    
}

export default AppClima;