const ChangeTemp = ({temp, mood}) =>{
    if(mood === 'C'){
        const cent = temp - 273;
        return(<div>{cent.toFixed(2)} {mood}</div>)
    }else{
        const far = 1.8 * (temp - 273) + 32
        return(<div>{far.toFixed(2)} {mood}</div>)
    }
    
}
export default ChangeTemp