import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud , faSun , faCloudRain , faThunderstorm , faSnowman , faTint, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import './iconoClima.css'

const IconoClima = ({pic, desc, data}) => {
    
    if(pic === 'Clouds'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faCloud} className='icon'/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>            
            </div>
            )
    }else if(pic === 'Clear'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faSun}/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>           
            </div>
            )
    }else if(pic === 'Rain'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faCloudRain}/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>              
            </div>
            ) 
    }else if(pic === 'Thunderstorm'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faThunderstorm}/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>            
            </div>
            )
    }else if(pic === 'Drizzle'){
        return( 
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faTint}/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                    <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>            
            </div>
            )
    }else if(pic === 'Snow'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faSnowman}/></h2> 
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>            
            </div>
            )
    }else if(pic === 'Atmosphere'){
        return(
            <div className="weather-principal">
                <h2>{pic} <FontAwesomeIcon icon={faGlobeAmericas}/></h2>   
                <p>{desc}</p>                
                <ul className="data-name">
                <li>Clouds: <span>{data.clouds.all}%</span></li>
                    <li>Humidity: <span>{data.main.humidity}%</span> </li>
                    <li>Wind-Speed: <span>{data.wind.speed}</span></li>
                </ul>              
            </div>
            )
    } 
    
}
export default IconoClima