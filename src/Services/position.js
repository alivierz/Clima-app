import axios from "axios";

const map = async (lat, lon) =>{   
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b85040aeb5cd769c38065b9c9d782ce`
    const req = await axios.get(URL)
    return  req
}

export default map;