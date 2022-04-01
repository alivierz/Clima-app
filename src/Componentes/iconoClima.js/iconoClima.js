import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud , faSun , faCloudRain , faSmog , faThunderstorm , faWind, faSnowman, faIcicles} from "@fortawesome/free-solid-svg-icons";


const IconoClima = ({pic, desc}) => {
    if(pic.toLowerCase() === 'clouds'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faCloud}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Sun'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faSun}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Rain'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faCloudRain}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Fog'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faSmog}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Storm'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faThunderstorm}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Wind'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faWind}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Snow'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faSnowman}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }else if(pic === 'Ice'){
        return(
            <div> 
                <h2>{pic} <FontAwesomeIcon icon={faIcicles}/></h2> 
                <p>{desc}</p>
            </div>
            )
    }
    
}
export default IconoClima