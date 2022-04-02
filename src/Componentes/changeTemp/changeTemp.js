import './changeTemp.css'
const ChangeTemp = ({temp, mood}) =>{
    if(mood === 'C'){
        const cent = temp - 273;
        return(<div className="temp">{cent.toFixed(2)} <sup>o</sup>{mood}</div>)
    }else{
        const far = 1.8 * (temp - 273) + 32
        return(<div className="temp">{far.toFixed(2)} <sup>o</sup>{mood}</div>)
    }
    
}
export default ChangeTemp