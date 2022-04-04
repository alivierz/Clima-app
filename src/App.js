import './App.css';
import map from './Services/position';
import { useState , useEffect} from 'react';
import AppClima from './Componentes/appClima';

function App() {

  //* valores en pantalla y uso de su estado
  const [ cityName , setCityName  ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ weather , setWeather] = useState([]);
  const [ temp , setTemp ] = useState(0);
  const [ dataAditional , setDataAditional ] = useState({})
  const [ target , setTarget ] = useState(false);
  //! Efecto de la posicion actual
 
    useEffect(() =>{
      //?latitud y longitud directamente
    navigator.geolocation.watchPosition((position) => {
      map(position.coords.latitude, position.coords.longitude).then((res) =>{
        setCityName(res.data.name)
        setCountry(res.data.sys.country)
        setWeather(res.data.weather)
        setTemp(res.data.main.temp)
        setDataAditional(res.data)
        setTarget(true)   
        }).catch((error) =>{
        console.log('Debes aceptar terminos')
      })
    })
    }, [])

    
  return (
    <div className="App">
      <AppClima render={target} name={cityName} country={country} weather={weather} temp={temp} dataA={dataAditional}/>
    </div>
  );
}

export default App;
