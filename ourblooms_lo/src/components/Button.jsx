import i1 from '../assets/buttonDot.png'
import '../App.css'
function Button({buttonName}){
    return(
        <div className ="btn-yellow">
            <img src = {i1} alt="buttonDot" />
            <p className="paragraph1">{buttonName}</p>
        </div>

    )
}

export default Button