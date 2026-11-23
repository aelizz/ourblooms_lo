import l2 from '../assets/blooms/Logo-1.png'
import l1 from '../assets/Logo/Image-1.png'
import l3 from '../assets/Logo/Image.png'
function Header(){
    return(
        <header>
            <img src={l2} alt="Our Blooms Logo"/>
            <h1 className="display"> Our Blooms</h1>
            <img src = {l1}
            srcSet = {`${l1} 400w, ${l2} 800w, ${l3} 1200w`}
            sizes = "(max-width:600px) 100vw, 50vw"
            alt= "Our Blooms Logo"/>
            
        </header>
    )
}

export default Header