import './App.css';
import map from './Services/position';
import { useState , useEffect} from 'react';
import AppClima from './Componentes/appClima';

function App() {

  //? Estado de la posicion actual
  const [lati , setLati] = useState(0)
  const [long , setLong] = useState(0)

  navigator.geolocation.watchPosition((position) => {
    setLati(position.coords.latitude)
    setLong(position.coords.longitude)
  })
  //* valores en pantalla y uso de su estado

  const [ cityName , setCityName  ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ weather , setWeather] = useState([]);
  const [ temp , setTemp ] = useState(0);
  const [ dataAditional , setDataAditional ] = useState({})


  //! Efecto de la posicion actual
 
    useEffect(() =>{
    map(lati, long).then((res) =>{
      setCityName(res.data.name)
      setCountry(res.data.sys.country)
      setWeather(res.data.weather)
      setTemp(res.data.main.temp)
      setDataAditional(res.data)
      
    }).catch((error) =>{
      console.log('Debes aceptar terminos')
    })
    }, [lati , long])

    
  return (
    <div className="App">
      <AppClima cond={lati} name={cityName} country={country} weather={weather} temp={temp} dataA={dataAditional}/>
    </div>
  );
}

export default App;
